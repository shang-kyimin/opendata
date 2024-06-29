export function randomDate(): string {
  const startDate = new Date(1980, 0, 1).getTime();
  const endDate = new Date().getTime();

  const newDate = new Date(startDate + Math.random() * (endDate - startDate));

  return newDate.getFullYear() + "-" + numberFormat(newDate.getMonth() + 1) + "-" + numberFormat(newDate.getDate()) + " " + numberFormat(newDate.getHours()) + ":" + numberFormat(newDate.getMinutes()) + ":" + numberFormat(newDate.getSeconds());
}

export function randomNumber(length: number): number {
  return Math.floor(Math.random() * length);
}

function numberFormat(num: number): string {
  if (num < 10) {
    return "0" + num;
  }
  return String(num);
}


export function currentDate(): string {
  const date = new Date();

  return date.getFullYear() + "-" + numberFormat(date.getMonth() + 1) + "-" + numberFormat(date.getDate()) + " " + numberFormat(date.getHours()) + ":" + numberFormat(date.getMinutes()) + ":" + numberFormat(date.getSeconds());
}


