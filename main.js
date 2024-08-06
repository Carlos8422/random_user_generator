

// Check if obj exists:
console.log(dataObj); // Whole object
console.log(dataObj.results) // An array just like the code along for today:
console.log(dataObj.results[0]) // Represents the very first object (first person)

let username = document.getElementById("userName");
let email = document.getElementById("email");
let age = document.getElementById("age");
let randomUserButton = document.getElementById("randomUserBtn");
let randomImage = document.getElementById("image");

function randomUserData(){
    let randUser = dataObj.results[Math.floor(Math.random()*(dataObj.results).length)]
    username.innerText = `${randUser.name.title}. ${randUser.name.first} ${randUser.name.last}`;

    let randEmail = randUser.email;
    email.innerText = "Email: " + randEmail;

    let randAge = randUser.dob.age;
    age.innerText = "Age: " + randAge;

    let randImage = randUser.picture.large;
    randomImage.src = randImage
}

randomUserButton.addEventListener("click", randomUserData);