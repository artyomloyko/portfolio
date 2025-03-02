export function subtractOneYear(date: number | string | Date) {
  const newDate = new Date(date);
  newDate.setFullYear(newDate.getFullYear() - 1);
  return newDate;
}

export function formatDateString(date: Date) {
  return new Date(date).toISOString().split('T')[0];
}
