submit.onclick = userSubmitted;

var users = {user1: ["wombat_fire123", "bug"]};

function userSubmitted() {
    const rawusername = document.getElementById("username");
    const rawpassword = document.getElementById("password");
    const username = rawusername.value;
    const password = rawpassword.value;
    console.log(username);
    console.log(password);
}
    
