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


