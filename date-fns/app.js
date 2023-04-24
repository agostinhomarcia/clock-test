const present = new Date();

// console.log(dateFns.isToday(present));
console.log(dateFns.format(present, "MMMM"));
console.log(dateFns.format(present, "YY"));
console.log(dateFns.format(present, "dddd"));
console.log(dateFns.format(present, "Do"));
console.log(dateFns.format(present, "DD/Mm/YYYY"));

// diferença da data passada para a data atual
const past = new Date("April 7 2019 17:00:00");
console.log(dateFns.distanceInWords(present, past));
