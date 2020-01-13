export const dateFormat = (date) => {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  date = new Date(date)
  var day = date.getDate()
  if(day<10){
    day='0'+day
  }
  return day + "/" + (monthNames[date.getMonth()]) + "/" + date.getFullYear()
}