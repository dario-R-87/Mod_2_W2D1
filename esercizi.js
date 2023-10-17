//ESERCIZI SUGLI IF: 



/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
//supponiamo di avere già in memoria 2 variabili intere a e b
//suppongo inizialmente che b sia il più grande

let a = 36423534;
let b = 34523563;
let max=b;
if(a >= b){
 max=a;
}
console.log("max: "+max);
//se  a>= b assegno il suo valore a max altrimenti se non lo è max conterrà già il massimo
*/



/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let num=15;
if(num < 5){
	console.log("Tiny");
} else if(num < 10){
	console.log("Small");
} else if(num < 15){
	console.log("Medium");
} else if(num < 20){
	console.log("Large");
} else {
	console.log("Huge");
}
*/



//ESERCIZI SUI CICLI: 



/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA 
for(let i=0; i<11; i++){
 if(i===3 || i===8){
  continue;
 }
 console.log(i);
}
*/



/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
for(let i=0; i<15; i++){
 if(i%2 === 1){
  console.log("il numero " + i + " è dispari!");
 } else {
  console.log("il numero " + i + " è pari!");  
 }
 
}
*/



//ESERCIZI EXTRA NON OBBLIGATORI



/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
 let x = 0;
 let y = 8;
 let somma = x+y;
 let sottrazione = (x-y)>=0 ? x-y : y-x;

 if(x === 8 || y === 8){
	console.log("Uno dei due interi è uguale a 8");
 }
 if(somma === 8){
	console.log("La somma dei due interi è uguale a 8");
 }
 if(sottrazione === 8){
	console.log("La sottrazione dei due interi è uguale a 8");
 }
*/



/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let totalShoppingCart = 51;
let shippingCost = 10;
let hasDiscount = false;

if(totalShoppingCart > 50){
 hasDiscount = true;
}
let totalAmount = hasDiscount ? totalShoppingCart : totalShoppingCart+shippingCost;
console.log("Il totale da pagare è: $ "+totalAmount);
*/



/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let totalShoppingCart = 80;
let shippingCost = 10;
let hasDiscount = false;
let blackFridayDiscountPercentage = 20;
totalShoppingCart *= (100-blackFridayDiscountPercentage)/100;

if(totalShoppingCart > 50){
 hasDiscount = true;
}
let totalAmount = hasDiscount ? totalShoppingCart : totalShoppingCart+shippingCost;
console.log("Il totale da pagare è: $ "+totalAmount);
*/



/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let isMale = false;
let gender = isMale ? "male" : "female";
console.log("gender: " + gender);
*/



/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA 
ESEMPIO 1
for(let i=0; i<100; i++){
 if((i+1)%3===0 && (i+1)%5===0){
  console.log("FizzBuzz");
 } else if((i+1)%3===0) {
  console.log("Fizz");
 } else if((i+1)%5===0) {
  console.log("Buzz");
 } else {
  console.log(i+1);
 }
 
}
*/

/*ESEMPIO 2
for(let i=0; i<100; i++){
 let str="";
 if((i+1)%3===0){
  str += "Fizz";
 }
 if((i+1)%5===0){
  str += "Buzz";
 }
 if((i+1)%3!==0 && (i+1)%5!==0){
  console.log(i+1);
 }
 else {
  console.log(str);
 }
}
*/

