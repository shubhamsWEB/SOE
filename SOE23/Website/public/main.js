// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyC-ba_IKmvLqjVCp0CnxVqQmpNV5URBFA8",
    authDomain: "soefirebaseproject-4612b.firebaseapp.com",
    databaseURL: "https://soefirebaseproject-4612b.firebaseio.com",
    projectId: "soefirebaseproject-4612b",
    storageBucket: "",
    messagingSenderId: "959553461674"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');
var database = firebase.database();

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
  // console.log(name, company, email, phone, message);
  
  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
 //document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

var ref = database.ref('messages');
ref.on('value',gotData,errData);

function gotData(data){
  var darry  = data.val();
//  console.log(darry);
  //returns the array of keys/ids.
  var keys = Object.keys(darry);
//  console.log(keys);
  for(var i=0; i< keys.length ; i++){
    var k = keys[i];
    var name = darry[k].email;
    console.log(name);
    var node = document.createElement("LI");                 
    var textnode = document.createTextNode(name);         
    node.appendChild(textnode);                              
    document.getElementById("result").appendChild(node);
  } 
}

function errData(err){
  console.log(err);
}


// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}