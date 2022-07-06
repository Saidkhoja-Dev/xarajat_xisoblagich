// Uy ishi Xarajatlar Hisobi

var dollar = 9433.34;
var euro = 10354.03;
var dollarNarxi = 500 * dollar;
var euroNarxi = euro * 120;

var umumiyNarx = dollarNarxi + dollarNarxi / 2 + euroNarxi;

var kiritilganPul = prompt("Pulingiz qancha kiriting:");

if (kiritilganPul >= umumiyNarx) {
    alert("Alisher oq yo'l !");
    console.log("Alisher oq yo'l !");
} else if (kiritilganPul <= umumiyNarx) {
    alert("Alisher, ozgina sabr qilish kerak bo'lar ekan");
    console.log("Alisher, ozgina sabr qilish kerak bo'lar ekan");
} else {
    alert("String turdagi ma'lumot kiriting !");
    console.log("String turdagi ma'lumot kiriting !");
}