const isCorrectLength = (str, length) => str.length <= length;

// Строка короче 20 символов
isCorrectLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
isCorrectLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
isCorrectLength('проверяемая строка', 10); // false


function isPalindrome(str) {

  const normalStr = str.replaceAll(' ', '').toLowerCase();

  for (let i = 0; i < normalStr.length / 2; i++) {
    if (normalStr[i] !== normalStr.at(-(i + 1))) {
      return false;
    }
  }

  return true;
}

// Строка является палиндромом
isPalindrome('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindrome('ДовОд'); // true
// Это не палиндром
isPalindrome('Кекс'); // false
// Это палиндром
isPalindrome('Лёша на полке клопа нашёл '); // true

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

