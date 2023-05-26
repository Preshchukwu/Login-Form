let formButton = document.getElementById("myButton")
let emailInput = document.getElementById("emailInput")
let passwordInput = document.getElementById("passwordInput")
let formNotice = document.getElementById("formNotice")
let successAlert = document.getElementById("success-alert")


formButton.addEventListener("click", function(){
    if(emailInput.value === ""){
        formNotice.innerText = `Please Enter Your Email Address`
    }else if(passwordInput.value === ""){
        formNotice.innerText = `Please Enter Your Password`
    }else{
        successAlert.classList.remove("hidden-alert")
        successAlert.classList.add("reveal-alert")
    }

})
