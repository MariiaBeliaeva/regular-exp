// Изучи тесты `spec/snils.spec.js`
// Чтобы понимать как должны работать твои методы.

// Определи, есть ли во входной строке номер СНИЛС.
function hasSNILS(string) {
  //   let regexp = /(\d\d\d).(\d\d\d).(\d\d\d).(\d\d)/g;
  //   return regexp.test(string);
  let regexp = /(\d{3}).(\d{3}).(\d{3}).(\d{2})/g;
  return regexp.test(string);
}

// Найди и верни номер СНИЛС из строки.
function grabSNILS(string) {}

// Найди и верни все номера СНИЛС, что есть в строке.
function grabAllSNILS(string) {}

//console.log(grabAllSNILS("The numbers are 350-802-074 94, 234-600-142 22, and 013-605-876 94"))

// Зашифруй номера СНИЛС. Example: XXX-XXX-XXX 30.
function hideAllSNILS(string) {}

// Отформатируй все номера СНИЛС, чтобы использовались правильные разделители:
// '48001443027', '480.014.430.27', и '480--014--430 27' должны превратиться в '480-014-430 27'.
function formatSNILS(string) {}

module.exports = {
  hasSNILS,
  grabSNILS,
  grabAllSNILS,
  hideAllSNILS,
  formatSNILS,
};
