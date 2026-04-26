import { requireMethod, sendJson } from '../_utils/http.js';
import { verifySession } from '../_utils/session.js';

export default function handler(req, res) {
  if (!requireMethod(req, res, 'GET')) {
    return;
  }

  if (!verifySession(req)) {
    sendJson(res, 401, { error: 'Unauthenticated.' });
    return;
  }

  sendJson(res, 200, { ok: true, user: { role: 'admin' } });
}
