import { DEFAULT_SUPABASE_URL, DEFAULT_SUPABASE_ANON_KEY } from './supabaseClient';

export const SUPABASE_CONFIG = {
  url: localStorage.getItem('km_supabase_url') || DEFAULT_SUPABASE_URL,
  anonKey: localStorage.getItem('km_supabase_key') || DEFAULT_SUPABASE_ANON_KEY
};

export const saveCloudCredentials = (url, anonKey) => {
  localStorage.setItem('km_supabase_url', url);
  localStorage.setItem('km_supabase_key', anonKey);
  window.location.reload();
};

export const isCloudConnected = () => {
  return Boolean(SUPABASE_CONFIG.url && SUPABASE_CONFIG.anonKey);
};
