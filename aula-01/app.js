const present = new Date();

console.log(present); // data completa
console.log("getFullYear", present.getFullYear()); // ano
console.log("getMonth", present.getMonth()); // mês
console.log("getDate", present.getDate()); // dia do mês
console.log("getDay", present.getDay()); // dia da semana
console.log("getHours", present.getHours()); // hora
console.log("getMinutes", present.getMinutes()); //minutos
console.log("getSeconds", present.getSeconds()); //segundos

console.log("totimeString:", present.toTimeString());
console.log("toDateString", present.toDateString());
console.log("tolocaleString", present.toLocaleString());
