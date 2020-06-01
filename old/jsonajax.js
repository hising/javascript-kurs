// Objects...
var eachPerson = {
  name: "Joel",
  gender: "male",
  city: "stockholm",
};
// eachPerson.name === "Joel";

// Arrays...
var myCars = ["jaguar", "porsche", "buick"];
// myCars[0] === "jaguar";

/*
JSON: Objects & Arrays nested in each other.
Json ät ett format för att skicka och ta emot data
*/
var peepCollection = [
  {
    name: "Joel",
    gener: "male",
    city: "stockholm",
  },
  {
    name: "anna",
    gener: "female",
    city: "vienna",
  },
  {
    name: "moses",
    gener: "male",
    city: "london",
  },
];
// peepCollection[1].name === "anna";

/*
AJAX: Tekniken för att dynamiskt hämta och skicka iväg data utan
att behöva ladda om sidan webbsidan...

XMLHttpRequest:
Det inbyggda verktyget i webbläsaren för att skicka
iväg och ta emot data....
*/

var pageCounter = 1;
var objectContainer = document.getElementById("object-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  // anonymous function...

  var ourRequest = new XMLHttpRequest();
  // ourRequest.open("get", "https://randomuser.me/api/");
  // ourRequest.open("get", "https://learnwebcode.github.io/json-example/animals-1.json");
  ourRequest.open(
    "get",
    "https://learnwebcode.github.io/json-example/animals-" +
      pageCounter +
      ".json"
  );
  ourRequest.onload = function () {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      // console.log(ourData[0]); // Som default tolkar webbläsare JSON data som text eller textsträng...
      renderHTML(ourData);
    } else {
      console.log("We connected to the server but it returned an error");
    }
    // console.log(ourRequest.responseText);
    // var ourData = ourRequest.responseText;

    // var ourData = JSON.parse(ourRequest.responseText);
    // console.log(ourData[0]); // Som default tolka webbläsare JSON data som text eller textsträng...
    // renderHTML(ourData);
    pageCounter++;
    if (pageCounter > 3) {
      btn.classList.add("hide-me");
    }
  };

  ourRequest.onerror = function () {
    console.log("Connection error");
  };
  // skicka iväg requesten...
  ourRequest.send();
});

// funktionen lägger in html i webbsidan...
function renderHTML(data) {
  // var htmlString = "this is a test";
  var htmlString = "";
  /* 
     i denna variable kan vi lägga
     vår json (data) varje gång genom loopen    
    */
  for (i = 0; i < data.length; i++) {
    // htmlString += "<p>" + data[i].results + "is" + data[i].gender + ".</p>";
    htmlString +=
      "<p>" + data[i].name + "is a " + data[i].species + "that likes to eat ";

    for (j = 0; j < data[i].foods.likes.length; j++) {
      // htmlString += data[i].foods.likes[j];
      if (j == 0) {
        htmlString += data[i].foods.likes[j];
      } else {
        htmlString += " and " + data[i].foods.likes[j];
      }
    }
    htmlString += " and dislike";
    for (j = 0; j < data[i].foods.dislikes.length; j++) {
      // htmlString += data[i].foods.likes[j];
      if (j == 0) {
        htmlString += data[i].foods.dislikes[j];
      } else {
        htmlString += " and " + data[i].foods.dislikes[j];
      }
    }

    htmlString += ".</p>";
  }
  // objectContainer.insertAdjacentHTML('beforeend', 'Testing 123');
  objectContainer.insertAdjacentHTML("beforeend", htmlString);
}
