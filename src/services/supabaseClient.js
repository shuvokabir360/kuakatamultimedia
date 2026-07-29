import { createClient } from '@supabase/supabase-js';

// Retrieve credentials from localStorage or environment
const supabaseUrl = localStorage.getItem('km_supabase_url') || import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = localStorage.getItem('km_supabase_key') || import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConnected = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConnected 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

// SQL schema for 1-click creation in Supabase SQL Editor
export const SUPABASE_SQL_SCHEMA = `-- Kuakata Multimedia Supabase Database Schema
-- Run this script in Supabase SQL Editor (https://supabase.com/dashboard/project/_/sql)

-- 1. Create Members Table
CREATE TABLE IF NOT EXISTS public.members (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT,
    phone TEXT,
    role TEXT DEFAULT 'member',
    designation TEXT,
    dept TEXT,
    basic_salary NUMERIC,
    join_date DATE,
    avatar TEXT,
    skills TEXT[],
    status TEXT DEFAULT 'Active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 2. Create Attendance Table
CREATE TABLE IF NOT EXISTS public.attendance (
    id TEXT PRIMARY KEY,
    user_id TEXT REFERENCES public.members(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    status TEXT NOT NULL,
    check_in TEXT,
    check_out TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 3. Create Salary Table
CREATE TABLE IF NOT EXISTS public.salaries (
    id TEXT PRIMARY KEY,
    user_id TEXT REFERENCES public.members(id) ON DELETE CASCADE,
    user_name TEXT,
    month TEXT,
    month_key TEXT,
    basic_salary NUMERIC,
    bonus NUMERIC DEFAULT 0,
    deductions NUMERIC DEFAULT 0,
    absent_days INT DEFAULT 0,
    leave_days INT DEFAULT 0,
    half_days INT DEFAULT 0,
    net_salary NUMERIC,
    paid_status TEXT DEFAULT 'Pending',
    payment_date DATE,
    transaction_id TEXT,
    note TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 4. Create Projects Table
CREATE TABLE IF NOT EXISTS public.projects (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT,
    description TEXT,
    image TEXT,
    demo_url TEXT,
    tags TEXT[],
    featured BOOLEAN DEFAULT true,
    client TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Enable RLS & Public Access Policies
ALTER TABLE public.members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.salaries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public select members" ON public.members FOR SELECT USING (true);
CREATE POLICY "Allow public insert/update members" ON public.members FOR ALL USING (true);

CREATE POLICY "Allow public select attendance" ON public.attendance FOR SELECT USING (true);
CREATE POLICY "Allow public insert/update attendance" ON public.attendance FOR ALL USING (true);

CREATE POLICY "Allow public select salaries" ON public.salaries FOR SELECT USING (true);
CREATE POLICY "Allow public insert/update salaries" ON public.salaries FOR ALL USING (true);

CREATE POLICY "Allow public select projects" ON public.projects FOR SELECT USING (true);
CREATE POLICY "Allow public insert/update projects" ON public.projects FOR ALL USING (true);
`;
