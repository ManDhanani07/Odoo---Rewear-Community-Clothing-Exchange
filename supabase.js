import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mvqqzgewfeqxcyghiuar.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12cXF6Z2V3ZmVxeGN5Z2hpdWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIzMTM0NzksImV4cCI6MjA2Nzg4OTQ3OX0.aQKYbInaODCPS0KqIfZzrtkNpyotpfpyzMnFySG22yw';

export const supabase = createClient(supabaseUrl, supabaseKey);
