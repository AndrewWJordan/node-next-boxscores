const dateObj = new Date();

export function getToday(): string {
  return `${dateObj.getFullYear()}-${
    dateObj.getMonth() + 1
  }-${dateObj.getDate()}`;
}

export function fiveMinutesAgo(currentTimestamp): Date {
  return new Date(currentTimestamp.getTime() - 5 * 60 * 1000);
}
