# 🟢 Day 1 — JavaScript Engine & Runtime

## 1️⃣ JavaScript nima?
JavaScript — bu **veb sahifaga hayot beradigan til**.  
HTML — skelet, CSS — kiyim, JS — miyada harakat.

```js
document.querySelector("button")
  .addEventListener("click", () => alert("Bosildi!"));

2️⃣ JavaScript Engine nima?

Engine — JS kodni o‘qib, tushunib, bajaradigan mashina miyasi.

Chrome / Node.js → V8

Firefox → SpiderMonkey

Safari → JavaScriptCore

3️⃣ Engine tuzilishi
Qism	Vazifa	Oddiy ta’rif
Parser	Kodni so‘zlarga ajratadi, grammatika tekshiradi	“Til o‘qituvchisi”
Interpreter	Kodni qatorma-qator o‘qib bajaradi	“Tarjimon”
Compiler (JIT)	Tez-tez ishlaydigan kodni yodlab oladi va tezlashtiradi	“Yod olgan tarjimon”
Heap (Memory)	Ma’lumotlar joyi	“Xotira”
Call Stack	Funksiyalar ish navbati (LIFO)	“Ish ro‘yxati”
4️⃣ JavaScript Runtime

Runtime — Engine ishlaydigan muhit.

Muhit	Ichida nimalar bor	Misol
Browser Runtime	V8 Engine + Web APIs (alert, setTimeout, fetch, DOM)	Chrome
Node.js Runtime	V8 Engine + Server APIs (fs, timers, network)	Backend

🧠 Analogiya: Engine = mator, Runtime = butun mashina.

5️⃣ Compilation vs Interpretation
Turi	Qachon tarjima bo‘ladi	Tezlik	JS’dagi holat
Compiled (C++)	Ishlashdan oldin	Juda tez	Klassik C++
Interpreted (JS eski)	Ishlayotganda	Sekinroq	Klassik JS
Hybrid (JIT)	Avval o‘qiydi, so‘ng tezlashtiradi	Tez	Zamonaviy JS

🧩 Analogiya: Oshpaz retseptni kitobdan qarasa → interpreted.
Retseptni yodlab olsa → compiled.
JS → ikkalasini aralashtiradi (JIT).

6️⃣ Misol
console.log("Salom, dunyo!");


Engine kodni o‘qiydi.

console.log browser API orqali ishlaydi.

Natija → “Salom, dunyo!”

7️⃣ Muhim terminlar
So‘z	Ma’nosi
Engine	JS kodni bajaruvchi mashina miyasi
Runtime	Engine ishlaydigan muhit (browser yoki Node)
Interpreter	Kod qatorma-qator bajariladi
Compiler	Kod mashina tiliga aylantiriladi
JIT	“Just In Time” – tez ishlaydigan kodni yodlab oladi
Web API	Browser xizmatlari (alert, fetch, DOM)
Call Stack	Funksiyalar navbati (LIFO)
8️⃣ Xulosa

JavaScript — interaktiv, hybrid til.

Engine = miyasi, Runtime = tanasi.

Zamonaviy JS interpreted + JIT compiled.


# 📚 Qo‘shimcha o‘qish uchun
- V8 Engine ruxsat sayti: https://v8.dev/docs
- JS Working Model diagram: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Engine

