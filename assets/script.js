let symbols = 
/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validation(){
    let email = document.getElementById("email").value
    let form = document.getElementById("form")
    let text = document.getElementById("text")

    if(email.match(symbols)){
        form.classList.add("valid")
        form.classList.remove("valid")
        text.innerHTML = ""
    }else if(email == ""){
        text.innerHTML = " Please enter an email"
        text.style.color = "hsl(354, 100%, 66%)"
    }else{
        form.classList.remove("valid")
        form.classList.add("valid")
        text.innerHTML="Please provide a valid email address"
        text.style.color = "hsl(354, 100%, 66%)"
    }
}