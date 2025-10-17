// 🧠 Day 1 Practice Tasks

// 1. Oddiy "Salom dunyo" chiqarish
console.log("Salom dunyo!");

// 2. Hoisting sinovi
console.log(a); // undefined
var a = 10;
console.log(a); // 10

// Izoh: V8 Engine boshlanganda a ni xotiraga joylaydi, lekin qiymatni bermaydi → undefined.

// 3. Mini challenge: Nima uchun let bilan xatolik bo‘ladi?
// console.log(b); // ReferenceError
// let b = 5;

// 4. Runtime misoli:
setTimeout(() => console.log("Browser timer"), 0);
console.log("Plain JS code");
// Natija: Plain JS code → Browser timer
// Sabab: setTimeout browser API’da ishlaydi, JS Engine emas.


