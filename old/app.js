// https://firebase.google.com

/*
 db.collection('cars').get()
 En asynchronous metod for att hämta data...
----
*/

/*
db.collection('cars').get().then((snapshot) => {
--- Vi får tillbaka en snapshot av databasen  
console.log(snapshot.docs);
})
*/

/*
db.collection('cars').get().then((snapshot) => {
// Vi får tillbaka data ur databasen 
snapshot.docs.forEach(doc => {
console.log(doc); // log out doc...
console.log(doc.data()) // ge oss tillbaka data
})
// console.log(snapshot.docs);
})
*/

// Referens till bil lista
const carList = document.querySelector("#car-list");
// Form referens
const form = document.querySelector("#add-car-form");
/*
 And asynchronous request that returns a (Promise)
 to us meaning it takes some time to finish or do and
 therefore we cannot store it in a variable like:

 var cars = db.collection('cars').get();...
 */

// Skapa element och visar(rendera) i DOM
function renderCar(doc) {
  /*
     Skapa en <li> tagg som innehåller två <span>
     taggar inuti för varje dokument vi får...
    */
  let li = document.createElement("li");
  let name = document.createElement("span");
  let city = document.createElement("span");
  let cross = document.createElement("div");

  li.setAttribute("data-id", doc.id); // attribut(data-id) med unik dokument id(doc.id) för varje dokument
  name.textContent = doc.data().name; // texten till name element
  city.textContent = doc.data().city; // texten till city element
  cross.textContent = "x"; // texten till cross elementet

  // Append child tags to <li> tag
  li.appendChild(name);
  li.appendChild(city);
  li.appendChild(cross);

  carList.appendChild(li);

  // Ta bort data..
  cross.addEventListener("click", (e) => {
    /*
         ...förhindrar att (parent events)
         händelser körs eller exekveras.
        */
    e.stopPropagation();

    // (e.target): Elementet('x') som klickas
    // (e.target.parentElement): Föräldern('li') tilll element('x')
    // getAttribute('data-id'): Attributet('data-id') från <li> elementet
    let id = e.target.parentElement.getAttribute("data-id");

    // db.collection('cars').doc(id): Hitta varje dokument med sin unika id
    db.collection("cars").doc(id).delete();
  });
}

// hämta(get) data
// db.collection('cars').where('city', '<', 'n').get().then((snapshot) => {
// db.collection('cars').orderBy('city').get().then((snapshot) => {
// db.collection('cars').where('city', '==', 'Manchester').orderBy('name').get().then((snapshot) => {
/*
db.collection('cars').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderCar(doc);
  })
});
*/

// sending(saving) data
form.addEventListener("submit", (e) => {
  /*
(submit) eventet returnerar en callback funktion() som 
tar event objekt(e) som parameter..
*/

  // Prevent (default) browser reload action
  e.preventDefault();

  // Hämta en referns till vår billsamling i firestore
  db.collection("cars").add({
    /*
     Spara värden inuti vår objekt
     som representerar våra nya objekt och 
     som sedan läggs till vår bil samling
    */
    name: form.name.value,
    city: form.city.value,
  });
  form.name.value = "";
  form.city.value = "";
});

/*
 Real-time listener. onSnapshot() metoden
 används för att åstadkomma realtidsförmågor i
 vår applikation.....
*/
db.collection("cars")
  .orderBy("city")
  .onSnapshot((snapshot) => {
    let changes = snapshot.docChanges();
    // console.log(changes);
    changes.forEach((change) => {
      // console.log(change.doc.data())
      if (change.type == "added") {
        renderCar(change.doc);
      } else if (change.type == "removed") {
        let li = carList.querySelector("[data-id=" + change.doc.id + "]");
        carList.removeChild(li);
      }
    });
  });

// Uppdatara dokumentets egenskaper
/*
update(): Metoden updaterar egenskaper
db.collection('cars').doc('CpyMWLJoZzj5kyGOCktj').update({
name: 'Wario World'
})
*/

/*  
(set): Denna metod skriver över objektet all värden med det nya värdet
db.collection('cars').doc('CpyMWLJoZzj5kyGOCktj').set({
      city: 'Nairobi'
})
*/
