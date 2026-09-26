import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://otoinkqczqpmckeytsur.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90b2lua3FjenFwbWNrZXl0c3VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAzMDYwNDgsImV4cCI6MjEwNTg4MjA0OH0.WVkUSggocO2kotLuzdRK1L29M0K6MoebvoSm9ABBTng";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

{
  /* <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
//or
<script src="https://unpkg.com/@supabase/supabase-js@2"></script> */
}
