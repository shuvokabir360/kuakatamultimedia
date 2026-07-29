/**
 * Cloud Database Service Adapter for Kuakata Multimedia
 * Supports Supabase (PostgreSQL) and Firebase Cloud DB out of the box.
 */

// Supabase Configuration Helper
export const SUPABASE_CONFIG = {
  url: localStorage.getItem('km_supabase_url') || '',
  anonKey: localStorage.getItem('km_supabase_key') || ''
};

export const saveCloudCredentials = (url, anonKey) => {
  localStorage.setItem('km_supabase_url', url);
  localStorage.setItem('km_supabase_key', anonKey);
  window.location.reload();
};

export const isCloudConnected = () => {
  return Boolean(SUPABASE_CONFIG.url && SUPABASE_CONFIG.anonKey);
};
