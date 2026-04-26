import { readJsonBody, requireMethod, sendJson } from '../_utils/http.js';
import { verifySession } from '../_utils/session.js';
import { validateSubdomainRecords } from '../../lib/subdomainValidation.js';

const CONFIG_PATH = 'public/subdomains.json';

function getRequiredEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`${name} is not configured.`);
  }

  return value;
}

async function githubRequest(url, options) {
  const response = await fetch(url, {
    ...options,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${getRequiredEnv('GITHUB_TOKEN')}`,
      'Content-Type': 'application/json',
      'X-GitHub-Api-Version': '2022-11-28',
      ...options?.headers,
    },
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || `GitHub request failed with ${response.status}.`);
  }

  return data;
}

export default async function handler(req, res) {
  if (!requireMethod(req, res, 'POST')) {
    return;
  }

  if (!verifySession(req)) {
    sendJson(res, 401, { error: 'Unauthenticated.' });
    return;
  }

  try {
    const owner = getRequiredEnv('GITHUB_OWNER');
    const repo = getRequiredEnv('GITHUB_REPO');
    const branch = process.env.GITHUB_BRANCH || 'main';
    const body = await readJsonBody(req);
    const validation = validateSubdomainRecords(body.records);

    if (!validation.valid) {
      sendJson(res, 400, { error: 'Config validation failed.', details: validation.errors });
      return;
    }

    const baseUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${CONFIG_PATH}`;
    const currentFile = await githubRequest(`${baseUrl}?ref=${encodeURIComponent(branch)}`, {
      method: 'GET',
    });
    const content = `${JSON.stringify(validation.records, null, 2)}\n`;

    const commit = await githubRequest(baseUrl, {
      method: 'PUT',
      body: JSON.stringify({
        message: 'Update static subdomain config',
        content: Buffer.from(content).toString('base64'),
        sha: currentFile.sha,
        branch,
      }),
    });

    sendJson(res, 200, {
      ok: true,
      message: 'Config committed to GitHub. Vercel will redeploy from the new commit.',
      commit: commit.commit?.sha,
    });
  } catch (error) {
    sendJson(res, 500, { error: error.message || 'Unable to save config.' });
  }
}
