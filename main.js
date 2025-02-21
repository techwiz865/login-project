
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
    const message_board = document.getElementById("message");
    message_board.innerHTML = "";
    
    let correct_login = false;

  
    for (let i in users) {
        
        if (i == username && users[i] == password) {
            
            correct_login = true;
            
            break;
        }
    }
    if (correct_login) {
        message_board.className = "";

    } else {
        message_board.innerHTML = "Incorrect login"; 
    }
}


