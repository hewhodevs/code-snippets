// ------------------------------------------
// func formatYYYYMMDD
// ------------------------------------------
// Takes a date object, and returns a string formatted as YYYY-MM-DD
// @date - a date object that will not be mutated by this function.
function formatYYYYMMDD(date) {
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1; // as getMonth starts from 0 for Jan
  let year = date.getFullYear();
  // Add a leading 0 to single digit days / months
  if (dayOfMonth < 10) { dayOfMonth = `0${dayOfMonth}` }
  if (month < 10) { month = `0${month }` }
  return `${year}-${month}-${dayOfMonth}`;
}

// ------------------------------------------
// func incrementDate
// ------------------------------------------
// Returns a new date object incremented by the number of days specified
// @date - a date object that will not be mutated by this function.
// @day -  increment a day (1), week (7), or fortnight (14) etc.
// @month - increment a month (1), bi-monthly (2), quarterly (3), bi-annually (6)
// @year - increment a year (1), biennial (2)
function incrementDate(date, days, months, years) {
  // dont mutate passed date, make a copy of it
  let newDate = new Date(date.valueOf());
  newDate.setDate(newDate.getDate() + days);
  newDate.setMonth(newDate.getMonth() + months);
  newDate.setFullYear(newDate.getFullYear() + years);
  return newDate;
}