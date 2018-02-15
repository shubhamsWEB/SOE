  // Initialize Firebase
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
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var cert = getInputVal('cert');

  var Team1 = document.querySelector("#Team1");
  var Team2 = document.querySelector("#Team2");
  var Team3 = document.querySelector("#Team3");
  var Team4 = document.querySelector("#Team4");
  
  var sector = Team1.options[Team1.selectedIndex].value;
  var gender = Team2.options[Team2.selectedIndex].value;
  var state = Team3.options[Team3.selectedIndex].value;
  var exp = Team4.options[Team4.selectedIndex].value;

  // console.log(name, company, email, phone, message);
  
  // Save message
  saveMessage(name, email, phone,sector,gender,state,exp,cert);

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
  } 
}

function errData(err){
  console.log(err);
}

var submit = document.querySelector("button").addEventListener("click",function(){
  // alert("clicked");
})
;

// Save message to firebase
function saveMessage(name, email, phone,sector,gender,state,exp,cert){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    phone:phone,
    sector: sector,
    gender: gender,
    state: state,
    exp: exp,
    cert: cert,
  });
}