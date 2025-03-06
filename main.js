
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', userSubmitted);

const users = {
    splat: "not plop",
    plop: "not splat",
};
function accountExists(username) {
    for (let i in users) { // Iterate through all keys (usernames)
        if (i == username) { // Check if the current key matches the input username
            return true; // Found the username, return true
        }
    }
    return false; // Username not found after checking all keys, return false
}

function userSubmitted(event) { event.preventDefault(); 


    const rawUsername = document.getElementById("username");
    const rawPassword = document.getElementById("password");
    const username = rawUsername.value;
    const password = rawPassword.value;
    const message_board = document.getElementById("message");
    message_board.innerHTML = "";

    let correct_login = false;
    const account_exists = accountExists(username);

        for (let i in users) {
            if (i == username && users[i] == password) {
                correct_login = true;
                break;
            }
        }
        if (correct_login) {
            message_board.innerHTML = "Correct login";
        } else if (account_exists == true && correct_login == false) {
            message_board.innerHTML = "Incorrect password";
        } else if (account_exists == false && correct_login == false) {
            message_board.innerHTML = "Account does not exist";
        }
    } 

