export const ROOT_DOMAIN = import.meta.env.VITE_ROOT_DOMAIN || 'yahyaqr.xyz';

export function detectSubdomain(hostname = window.location.hostname) {
  const cleanHostname = hostname.split(':')[0].toLowerCase();

  if (cleanHostname === ROOT_DOMAIN || cleanHostname === `www.${ROOT_DOMAIN}`) {
    return null;
  }

  if (!cleanHostname.endsWith(`.${ROOT_DOMAIN}`)) {
    return null;
  }

  const subdomain = cleanHostname.replace(`.${ROOT_DOMAIN}`, '');

  return subdomain && !subdomain.includes('.') ? subdomain : null;
}

export async function fetchSubdomainConfig() {
  const response = await fetch(`/subdomains.json?ts=${Date.now()}`, {
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Unable to load subdomain configuration.');
  }

  return response.json();
}

export function findActiveTenant(records, subdomain) {
  return records.find((record) => record.subdomain === subdomain && record.status === 'active') || null;
}
