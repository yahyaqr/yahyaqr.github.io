import { readJsonBody, requireMethod, sendJson } from '../_utils/http.js';
import { createSessionCookie } from '../_utils/session.js';

export default async function handler(req, res) {
  if (!requireMethod(req, res, 'POST')) {
    return;
  }

  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    sendJson(res, 500, { error: 'ADMIN_PASSWORD is not configured.' });
    return;
  }

  try {
    const body = await readJsonBody(req);

    if (body.password !== adminPassword) {
      sendJson(res, 401, { error: 'Invalid password.' });
      return;
    }

    res.setHeader('Set-Cookie', createSessionCookie());
    sendJson(res, 200, { ok: true });
  } catch (error) {
    sendJson(res, 400, { error: error.message || 'Invalid request body.' });
  }
}
