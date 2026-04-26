import crypto from 'node:crypto';

const COOKIE_NAME = 'yahya_admin_session';
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

function getSecret() {
  return process.env.ADMIN_SESSION_SECRET || '';
}

function sign(value) {
  return crypto.createHmac('sha256', getSecret()).update(value).digest('base64url');
}

function parseCookies(cookieHeader = '') {
  return Object.fromEntries(
    cookieHeader
      .split(';')
      .map((cookie) => cookie.trim())
      .filter(Boolean)
      .map((cookie) => {
        const index = cookie.indexOf('=');
        return [cookie.slice(0, index), decodeURIComponent(cookie.slice(index + 1))];
      })
  );
}

function serializeCookie(value, options = {}) {
  const parts = [`${COOKIE_NAME}=${encodeURIComponent(value)}`, 'Path=/', 'HttpOnly', 'SameSite=Lax'];

  if (options.maxAge !== undefined) {
    parts.push(`Max-Age=${options.maxAge}`);
  }

  if (process.env.VERCEL || process.env.NODE_ENV === 'production') {
    parts.push('Secure');
  }

  return parts.join('; ');
}

export function createSessionCookie() {
  if (!getSecret()) {
    throw new Error('ADMIN_SESSION_SECRET is not configured.');
  }

  const payload = Buffer.from(
    JSON.stringify({
      role: 'admin',
      exp: Math.floor(Date.now() / 1000) + SESSION_MAX_AGE_SECONDS,
    })
  ).toString('base64url');

  return serializeCookie(`${payload}.${sign(payload)}`, {
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
}

export function clearSessionCookie() {
  return serializeCookie('', { maxAge: 0 });
}

export function verifySession(req) {
  if (!getSecret()) {
    return false;
  }

  const cookies = parseCookies(req.headers.cookie || '');
  const token = cookies[COOKIE_NAME];

  if (!token) {
    return false;
  }

  const [payload, signature] = token.split('.');

  if (!payload || !signature || sign(payload) !== signature) {
    return false;
  }

  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));

    return data.role === 'admin' && data.exp > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}
