// 1) Напишите регулярное выражение для проверки корректности формата телефонного номера.

const phoneNumberRegex = /^\+\d{3}\s?\(\d{3}\)\s?\d{2}-\d{2}-\d{2}$/;
const isValidPhoneNumber = phoneNumberRegex.test('+996 (550) 27-02-74');

console.log(isValidPhoneNumber);     

//2) Напишите регулярное выражение для поиска всех IP-адресов в тексте.

const textt = '192.168.110.160 999.999.999.999 256.0.0.0.';
const ipAddressRegex = /\b(?:\d{1,3}\.){3}\d{1,3}\b/g;
const foundIPs = textt.match(ipAddressRegex);

console.log(foundIPs);

// 3) Напишите регулярное выражение для проверки корректности формата ввода даты в формате "дд.мм.гггг".
const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/;
const isValidDate = dateRegex.test('22.10.2022');

console.log(isValidDate);

// 4) Напишите регулярное выражение для проверки сложности пароля (например, наличие букв верхнего и нижнего регистра, цифр и специальных символов).
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+\\|[\]{};:'",.<>/?]).{8,}$/;
const isValidPassword = passwordRegex.test('Sanika2019_');

console.log(isValidPassword);

// 5) Напишите регулярное выражение для поиска всех годов (четырехзначных чисел) в тексте.
const text = "I was born in 2004 and my brother in 1994.";
const yearRegex = /\b\d{4}\b/g;
const foundYears = text.match(yearRegex);

console.log(foundYears);

// 6) Напишите регулярное выражение для поиска всех дат в формате "дд.мм.гггг" и замены их на формат "мм/дд/гггг".
const texttt = `Вторая мировая война началась 01.09.1939 и закончилась 02.09.1945`;
const date = /(\b\d{2})\.(\d{2})\.(\d{4})\b/g;
const modifiedText = texttt.replace(date, '$2/$1/$3');

console.log(modifiedText);