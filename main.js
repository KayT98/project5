
function error() {
    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    if  (username == "") {
        alert("Enter your name bitch")
    }
    else if (email == "") {
        alert("Enter your email as well bitch, remember to add the damn message too :|")
    }
    else {
        alert("You are good to go :)")
    }
    return false;
}