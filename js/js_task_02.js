// Завдання 2 Напишіть скрипт перевірки кількості товарів на складі. Є змінні total
// (кількість товарів на складі) і ordered (кількість замовленого товару).
// Зрівняти ці значення і за результатами вивести:
// Якщо в замовленні вказано число, що перевищує кількість товарів на складі, то

// виведіть повідомлення "На складі недостатня кількість товару!". В другому

// випадку виведіть повідомлення "Замовлення оформлено". Перевірте працездатність

// коду з різними значеннями змінної ordered, наприклад 20, 80 і 130.
// const total = 100; const ordered = 50;

let total = 100;

let ordered = Number(prompt("Скільки потрібно товару?", ""));
if (total >= ordered) {
  alert("Замовлення оформлено");
} else {
  alert("На складі недостатня кількість товару!");
}
