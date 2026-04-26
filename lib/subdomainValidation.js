export const RESERVED_SUBDOMAINS = [
  'www',
  'api',
  'admin',
  'dashboard',
  'mail',
  'vercel',
];

const SUBDOMAIN_PATTERN = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/;
const HEX_COLOR_PATTERN = /^#[0-9a-fA-F]{6}$/;

export function normalizeSubdomain(value) {
  return String(value || '').trim().toLowerCase();
}

export function isValidHttpUrl(value) {
  try {
    const url = new URL(String(value || ''));
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

export function createEmptySubdomainRecord() {
  const now = new Date().toISOString();

  return {
    id: '',
    subdomain: '',
    type: 'page',
    title: '',
    content: {
      headline: '',
      description: '',
      links: [],
    },
    targetUrl: '',
    theme: {
      background: '#111111',
      accent: '#ffdb70',
    },
    status: 'active',
    createdAt: now,
    updatedAt: now,
  };
}

export function normalizeSubdomainRecord(record) {
  const subdomain = normalizeSubdomain(record?.subdomain || record?.id);
  const now = new Date().toISOString();
  const type = ['page', 'redirect', 'external'].includes(record?.type) ? record.type : 'page';

  return {
    id: subdomain,
    subdomain,
    type,
    title: String(record?.title || '').trim(),
    content: type === 'page' ? record?.content || {} : null,
    targetUrl: ['redirect', 'external'].includes(type) ? String(record?.targetUrl || '').trim() : '',
    theme: {
      background: record?.theme?.background || '#111111',
      accent: record?.theme?.accent || '#ffdb70',
    },
    status: record?.status === 'disabled' ? 'disabled' : 'active',
    createdAt: record?.createdAt || now,
    updatedAt: record?.updatedAt || now,
  };
}

export function validateSubdomainRecord(record, records = []) {
  const errors = [];
  const normalized = normalizeSubdomainRecord(record);

  if (!normalized.subdomain) {
    errors.push('Subdomain is required.');
  } else {
    if (!SUBDOMAIN_PATTERN.test(normalized.subdomain)) {
      errors.push('Subdomain can only use lowercase letters, numbers, and hyphens, and cannot start or end with a hyphen.');
    }

    if (RESERVED_SUBDOMAINS.includes(normalized.subdomain)) {
      errors.push(`"${normalized.subdomain}" is reserved.`);
    }
  }

  const duplicates = records
    .map((item) => normalizeSubdomain(item?.subdomain || item?.id))
    .filter((item) => item === normalized.subdomain);

  if (normalized.subdomain && duplicates.length > 1) {
    errors.push(`"${normalized.subdomain}" is duplicated.`);
  }

  if (!['page', 'redirect', 'external'].includes(normalized.type)) {
    errors.push('Type must be "page", "redirect", or "external".');
  }

  if (!['active', 'disabled'].includes(normalized.status)) {
    errors.push('Status must be either "active" or "disabled".');
  }

  if (!normalized.title) {
    errors.push('Title is required.');
  }

  if (normalized.type === 'redirect') {
    if (!isValidHttpUrl(normalized.targetUrl)) {
      errors.push('Redirect records require a valid http(s) target URL.');
    }
  }

  if (normalized.type === 'external' && normalized.targetUrl && !isValidHttpUrl(normalized.targetUrl)) {
    errors.push('External records can include only a valid http(s) reference URL.');
  }

  if (normalized.type === 'page') {
    if (!normalized.content || typeof normalized.content !== 'object' || Array.isArray(normalized.content)) {
      errors.push('Page records require content JSON as an object.');
    }
  }

  if (!HEX_COLOR_PATTERN.test(normalized.theme.background)) {
    errors.push('Theme background must be a 6-digit hex color.');
  }

  if (!HEX_COLOR_PATTERN.test(normalized.theme.accent)) {
    errors.push('Theme accent must be a 6-digit hex color.');
  }

  return {
    valid: errors.length === 0,
    errors,
    record: normalized,
  };
}

export function validateSubdomainRecords(records) {
  if (!Array.isArray(records)) {
    return {
      valid: false,
      errors: ['Subdomain config must be an array.'],
      records: [],
    };
  }

  const normalizedRecords = records.map(normalizeSubdomainRecord);
  const errors = [];

  normalizedRecords.forEach((record, index) => {
    const result = validateSubdomainRecord(record, normalizedRecords);

    result.errors.forEach((error) => {
      errors.push(`Record ${index + 1} (${record.subdomain || 'missing subdomain'}): ${error}`);
    });
  });

  return {
    valid: errors.length === 0,
    errors,
    records: normalizedRecords,
  };
}
