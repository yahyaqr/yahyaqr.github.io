import { requireMethod, sendJson } from '../_utils/http.js';
import { clearSessionCookie } from '../_utils/session.js';

export default function handler(req, res) {
  if (!requireMethod(req, res, 'POST')) {
    return;
  }

  res.setHeader('Set-Cookie', clearSessionCookie());
  sendJson(res, 200, { ok: true });
}
