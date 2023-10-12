const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const Confirmpassword = document.querySelector("#confirmPassword");
const form = document.querySelector("#form");
 
const showSuccess= (input,massege) => {
    let parentElement = input.parentElement;
    parentElement.classList = 'form-control error';
    const small = parentElement.querySelector("small");
    const successIcon = parentElement.querySelectorAll("i")[0];
    const errorIcon = parentElement.querySelectorAll("i")[i];
    
    errorIcon.stye.visibility = 'visible';
    successIcon.stye.visibility = 'hidden';
    small.innerText = massege
};



const checkEmpty = (element) => {
   element.forEach( (element) => {
    if(element.value === ''){
        // element.parentElement.classList = 'form-control error'
        showError(element,'input required')
    }else{
        showSuccess(element)
    }
   });
}
const checkEmail = (email) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(reg.test(email.value)){
        showSuccess(email)
    }else{
        showError(email,'Invalid Email');
    }
}  

form.addEventListener("submit", (event)=> {
   event.preventDefault();
   checkEmpty( [username,email,password,ConfirmPassword]);
   checkEmail(email);

})