export function convertIsoToDate(expiration_date) {
  return expiration_date.split("T")[0];
}

export function convertIsoToDate(created_at) {
  return created_at.split("T")[0];
}
