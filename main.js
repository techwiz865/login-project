
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', userSubmitted);

const users = {
    splat: "not plop",
    plop: "not splat",
};

function userSubmitted(event) {
    event.preventDefault(); // Prevent default form submission

    const rawUsername = document.getElementById("username");
    const rawPassword = document.getElementById("password");
    const username = rawUsername.value;
    const password = rawPassword.value;
    const currentPlace = document.getElementById("div1");

    
    let correct_login = false;

  
    for (let i in users) {
        
        if (i == username && users[i] == password) {
            
            correct_login = true;
            
            break;
        }
    }
    if (correct_login) {
        currentPlace.innerHTML = ""; // Clear existing content

        const newElement = document.createElement("p");
        const newContent = document.createTextNode("Correct login");
        newElement.appendChild(newContent);
        currentPlace.appendChild(newElement);
    } else {
        currentPlace.innerHTML = ""; // Clear existing content

        const newElement2 = document.createElement("p");
        const newContent2 = document.createTextNode("Incorrect login");
        newElement2.appendChild(newContent2);
        currentPlace.appendChild(newElement2);
    }
}


