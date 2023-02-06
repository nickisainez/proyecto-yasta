import supabase from "../connection/supabase";
export function logMiddleware(log: any): void {
  try {
    supabase
      .from("logs")
      .insert({
        log
      })
      .then(() => {
        console.log("Log registrado en Supabase");
      });
  } catch {
    (error: Error) => {
      console.error("Error al registrar log en Supabase: ", error);
    };
  }
}
