/*
Snack 1
Crea un array composto da 10 automobili. Ogni oggetto automobile avrà le seguenti proprietà: marca, 
modello e alimentazione (benzina, diesel, gpl, elettrico, metano).[✔]

Dividi le automobili in 3 array separati:[✔]

nel primo array solo le auto a benzina,[✔]
nel secondo solo le auto a diesel,[✔]
nel terzo il resto delle auto.[✔]

Infine stampa separatamente i 3 array.[✔]
*/

const cars = [
  { brand: 'Ford', model: 'Fiesta', fuel: 'benzina' },
  { brand: 'Toyota', model: 'Corolla', fuel: 'diesel' },
  { brand: 'Honda', model: 'Civic', fuel: 'gpl' },
  { brand: 'Tesla', model: 'Model 3', fuel: 'elettrico' },
  { brand: 'Fiat', model: 'Panda', fuel: 'metano' },
  { brand: 'Volkswagen', model: 'Golf', fuel: 'benzina' },
  { brand: 'BMW', model: 'Serie 3', fuel: 'diesel' },
  { brand: 'Audi', model: 'A4', fuel: 'gpl' },
  { brand: 'Mercedes', model: 'Classe C', fuel: 'elettrico' },
  { brand: 'Peugeot', model: '208', fuel: 'metano' }
];

// loop
let autoBenzina = []
let autoDiesel = []
let altreAuto = []

for (let i = 0; i < cars.length; i++) {
     const autoSingola = cars[i] 
     if (autoSingola.fuel === "benzina") {
        autoBenzina.push(autoSingola)
     } else if (autoSingola.fuel === "diesel") {
       autoDiesel.push(autoSingola)
     } else {
       altreAuto.push(autoSingola)
     }
}
console.log(autoBenzina);
console.log(autoDiesel);
console.log(altreAuto);

// con filter
const benzina = cars.filter((macchina) => {
return macchina.fuel === "benzina";

})
console.log(benzina);


const diesel = cars.filter((macchina) => {
return macchina.fuel === "diesel"
})
console.log(diesel);

const altre = cars.filter((macchina) => {
return macchina.fuel !== "diesel" && macchina.fuel !== "benzina"
})
console.log(altre);

