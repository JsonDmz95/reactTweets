export function dateFormat(fullDate) {
  const months = ["Jan", "Fec", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  let toUse = new Date(fullDate);

  let formatted_date = `${months[toUse.getMonth()]} ${toUse.getDate()}`;
  return formatted_date;
}