var nameError = document.getElementById('name-error')
var phoneError = document.getElementById('phone-error')
var emailError = document.getElementById('email-error')
var messageError = document.getElementById('message-error')
var submitError = document.getElementById('submit-error')

function validateName(){
    var name =  document.getElementById('contact-name').value;
    if(name.length == 0){
        nameError.innerHTML = 'Name is required'
        return false
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name'
        return false
    }
    nameError.innerHTML = 'valid'
    return true;
}

function validatPhone(){
    var phone =  document.getElementById('contact-phone').value;
    if(phone.length == 0){
        phoneError.innerHTML = 'phone number is required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'phone should be 10 digits'
        return false
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = valid;
        return true;
    }
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;
    if(email.length == 0){
        emailError.innerHTML = 'email is required'
        return false
    }
    if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'email invalid'
        return false
    }
    emailError.innerHTML = 'valid';
    return true
}

function validateMessage(){
    var message = document.getElementById('contact-message');
    var required = 150;
    var left  = required - 
    message.lenght;
    if(left > 0){
        messageError.innerHTML = left + 'more characters needed'
        return false
    }
    messageError.innerHTML = 'valid '
    return true
}

function validateForm(e){
    e.preventDefault();
    console.log('button clicked')
    if(!validateName() || !validatPhone() || !validateEmail() || !validateMessage() ){
        submitError.innerHTML = 'please fix the error to submit'
        return false
    }
}
let darkButton =document.getElementById('dark')
darkButton.addEventListener('click',darkTheme) 
let projectsworkedone = document.getElementById('projectsworkedone');
let projectsworkedtwo = document.getElementById('projectsworkedtwo');
let projectsworkedthree = document.getElementById('projectsworkedthree')
let projectsworkedfour = document.getElementById('projectsworkedfour');
let projectsworkedfive = document.getElementById('projectsworkedfive');
let projectsworkedsix = document.getElementById('projectsworkedsix');
let projectsworkedseven = document.getElementById('projectsworkedseven');
let projectsworkedeight = document.getElementById('projectsworkedeight');
let projectsworkednine = document.getElementById('projectsworkednine');
let aboutone = document.getElementById('aboutone');
let abouttwo = document.getElementById('abouttwo');
let aboutthree = document.getElementById('aboutthree');
let aboutfour = document.getElementById('aboutfour');
let propertyone = document.getElementById('propertyone');
let propertytwo = document.getElementById('propertytwo');
let propertythree = document.getElementById('propertythree');
let propertyfour = document.getElementById('propertyfour');
let oone = document.getElementById('oone')
let otwo = document.getElementById('otwo')
let othree = document.getElementById('othree')
let ofour = document.getElementById('ofour')
let ofive = document.getElementById('ofive')
let bottomlogo = document.getElementById('bottomlogo')
let questionsection = document.getElementById('questionsection')
let questionone = document.getElementById('questionone')
let questiontwo = document.getElementById('questiontwo')
let questionthree = document.getElementById('questionthree')


function darkTheme() {
    var darkTheme = document.getElementById('dark-theme');
    darkTheme.style.backgroundColor = 'black';
    darkTheme.style.color = 'white'
    projectsworkedone.style.color = 'white'
    projectsworkedtwo.style.color = 'white'
    projectsworkedfour.style.color = 'white'
    projectsworkedfive.style.color = 'white'
    projectsworkedseven.style.color = 'white'
    projectsworkedeight.style.color = 'white'
    projectsworkedsix.style.backgroundColor = 'white'
    projectsworkedsix.style.color = 'black'
    projectsworkedthree.style.backgroundColor = 'white'
    projectsworkedthree.style.color = 'black'
    projectsworkednine.style.backgroundColor = 'white'
    projectsworkednine.style.color = 'black'
    aboutone.style.color = 'white'
    abouttwo.style.color = 'white'
    aboutthree.style.color = 'white'
    aboutfour.style.backgroundColor = 'white'
    aboutfour.style.color = 'black'
    propertyone.style.color = 'white'
     propertytwo.style.color = 'white'
    propertythree.style.color = 'white'
    propertyfour.style.backgroundColor = 'white'
    propertyfour.style.color = 'black'
    oone.style.color = 'white'
    otwo.style.color = 'white'
    othree.style.color = 'white'
    ofour.style.backgroundColor = 'white'
    ofour.style.color = 'black'
    ofive.style.color = 'white'
    bottomlogo.style.backgroundColor = 'black'
    questionsection.style.backgroundColor = 'black'
    questionone.style.color = 'white'
    questiontwo.style.color = 'white'
    questionthree.style.color = 'white'
    


    

}
