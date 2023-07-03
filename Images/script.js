
let nameError = document.getElementById("name-error")
let phoneError = document.getElementById("phone-error")
let emailError = document.getElementById("email-error")
let subjectError = document.getElementById("subject-error")
let submitError = document.getElementById("submit-error") 

function validatename(){
    let name = document.getElementById("contact-name").value ;

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name"
        return false
    }
    nameError .innerHTML = '<i class="fas fa-check-circle"> </i>'
    return true
}
function validatephone(){
    let phone = document.getElementById("contact-phone").value;

    if(phone.length == 0){
        phoneError.innerHTML = "Phone no is required"
        return false
    } 
    if(phone.length !== 10){
        phoneError.innerHTML = "Phone no should be 10 digits"
        return false
    } 
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "Only Digits plese"
        return false
    }

    phoneError.innerHTML = '<i class="fas fa-check-circle"> </i> '
    return true
}
function validateEmail(){
    let email = document.getElementById("contact-email").value

    if(email.length == 0){
        emailError.innerHTML = "Email is Required"
        return false
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Email is required"
        return false
    }

    emailError.innerHTML ='<i class="fas fa-check-circle"> </i>';
    return true
}

function validateSubject(){
    let subject = document.getElementById("contact-subject").value ;

    if(subject.length == 0){
        subject.innerHTML = "Write Something";
        return false;
    }
    if(!subject.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        subjectError.innerHTML = "Write Something"
        return false
    }
    subjectError.innerHTML = '<i class="fas fa-check-circle"> </i>'
    return true
}

function validateForm(){
    if(!validatename() || !validatephone() || !validateEmail() || !validateSubject()){
        submitError.style.display = "inline"
        submitError.innerHTML = "Plese fix error to Submit"
        setTimeout(() => {
            submitError.style.display = "none"; 
        }, 2000);
        return false
    }
    if(validatename() || validatephone() || validateEmail() || validateSubject()){
        submitError.style.display = "inline"
        submitError.style.color = "green"
        submitError.innerHTML = "Form Submitted"
        setTimeout(() => {
            submitError.style.display = "none"; 
        }, 2000);
        return true
    } 
    
}
// function valid(){
//     if(validatename() || validatephone() || validateEmail() || validateSubject()){
//         submitError.style.color = "green"
//         submitError.innerHTML = "Form Submitted"
//         setTimeout(() => {
//             submitError.style.display = "none"; 
//         }, 1000);
//         return false
//     } 
// }

