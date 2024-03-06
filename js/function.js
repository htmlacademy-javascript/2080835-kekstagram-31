const convertTimeToMinutes = (time) => {
  const times = time.split(':');
  return Number(times[0]) * 60 + Number(times[1]);
};

const checkMeetingTime = (startWorkingDay, endWorkingDay, startMeeting, durationMeeting) => {
  const startWorkingDayToMinutes = convertTimeToMinutes(startWorkingDay);
  const endWorkingDayToMinutes = convertTimeToMinutes(endWorkingDay);
  const startMeetingToMinutes = convertTimeToMinutes(startMeeting);

  return startMeetingToMinutes >= startWorkingDayToMinutes && endWorkingDayToMinutes >= (startMeetingToMinutes + durationMeeting);
};
/*
'8:00' - начало рабочего дня
'17:30' - конец рабочего дня
'14:00' - начало встречи
90 - продолжительность встречи в минутах
*/
// eslint-disable-next-line no-console, no-undef
console.log(checkMeetingTime('08:00', '17:30', '14:00', 90)); // true
// eslint-disable-next-line no-console, no-undef
console.log(checkMeetingTime('8:0', '10:0', '8:0', 120)); //true
// eslint-disable-next-line no-console, no-undef
console.log(checkMeetingTime('08:00', '14:30', '14:00', 90)); //false
// eslint-disable-next-line no-console, no-undef
console.log(checkMeetingTime('14:00', '17:30', '08:0', 90)); //false
// eslint-disable-next-line no-console, no-undef
console.log(checkMeetingTime('8:00', '17:30', '08:00', 900)); //false

