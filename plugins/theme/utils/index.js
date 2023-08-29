// 时间转化
export function transformDate(inputTime, format = 'YYYY:MM:DD HH:mm:ss') {
  const date = new Date(inputTime);
  if (Number.isNaN(date)) {
    return "Invalid input time.";
  }
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  // 根据输出格式生成新的时间字符串
  let outputTime = format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);

  return outputTime;
}