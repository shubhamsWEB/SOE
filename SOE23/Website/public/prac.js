var config = {
    apiKey: "AIzaSyCmEUSYoZfOvOYpIdq_V1EQ-OKeiSejRnc",
    authDomain: "soee-b9b18.firebaseapp.com",
    databaseURL: "https://soee-b9b18.firebaseio.com",
    projectId: "soee-b9b18",
    storageBucket: "",
    messagingSenderId: "418778385271"
  };
  firebase.initializeApp(config);
// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);
  function getInputVal(id){
  return document.getElementById(id).value;
}


  // Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    nam123e: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}}