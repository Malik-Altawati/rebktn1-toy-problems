/*
Military Time
Given a string that represents time in hours and minutes, convert the string to military time (if necessary).

Examples: 

toMilitary("3:00pm") // "15:00"
toMilitary("9:15am") // "09:15"
toMilitary("12:00am") // "00:00"
toMilitary("04:00") // "04:00"
*/

function toMilitary(time) {
  var result = ""
  if (time[time.length - 1] != "m") return time;

  time = time.split(":")
  var hour = JSON.parse(time[0])
  var period = time[1].slice(2, 4)

  if (period == "pm") {
    result += hour + 12
  } else if (period == "am") {
    if (JSON.stringify(hour).length <= 1) {
      result += '0' + hour
    } else {
      result += hour
    }
  }

  if (result === "12:00") return "00:00";
  return result + ":" + time[1].slice(0, 2)
}
