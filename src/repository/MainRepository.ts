import { PostgrestResponse } from "@supabase/supabase-js";
import supabase from "../connection/supabase";

export async function getHellWorld(): Promise<PostgrestResponse<any>> {
  const data = await supabase.from("cycle").select("*");
  return data;
}
