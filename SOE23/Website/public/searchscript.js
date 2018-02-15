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
var final;
var j = 0;

var Team1 = document.querySelector("#team1");
var Team2 = document.querySelector("#team2");
var Team3 = document.querySelector("#team3");
var Team4 = document.querySelector("#team4");
  
var sector = Team1.options[Team1.selectedIndex].value;
var gender = Team2.options[Team2.selectedIndex].value;
var state = Team3.options[Team3.selectedIndex].value;
var exp = Team4.options[Team4.selectedIndex].value;

var apply = document.querySelector("#button");
apply.addEventListener("click",function(){
  console.log(sector,gender,state,exp);  
});

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

var ref = database.ref('messages');
ref.on('value',gotData,errData);

function gotData(data){
  var darry  = data.val();
  var keys = Object.keys(darry);

//  console.log(keys);
  for(var i=0; i< keys.length ; i++){
    var k = keys[i];
    var name = darry[k].name;
    var cert = darry[k].cert;
    var sector = darry[k].sector;
    var phone = darry[k].phone;
    var email = darry[k].email;
    console.log(name);

    var node = document.createElement("div");
    var nodChild = document.createElement("li");
    var navigate = document.createElement("nav");
    var body = document.querySelector("body");
    var side = document.createElement("div");
    node.className = "h1";
    side.className = "collapsable";
    nodChild.className = "image";
    navigate.className += "wrapper";
    nodChild.innerHTML += "<div>";
    nodChild.innerHTML +=  "Name - " + name ;
    nodChild.innerHTML +=  "<br>" ;
    nodChild.innerHTML +=  "Sector - " + sector ;
    nodChild.innerHTML += "<br>" ;
    nodChild.innerHTML += " Certificate Number - " + cert +" " ;
    nodChild.innerHTML += "<br>" ;
    nodChild.innerHTML += "Contact Number - " + phone ;
    nodChild.innerHTML += "<br>" ;
    nodChild.innerHTML += "Email-id - " + email ;
    nodChild.innerHTML += "<br>" ;


    node.appendChild(nodChild);
    body.appendChild(node);
    body.appendChild(navigate);

    //li.className = "final";
    
  } 
//  console.log(darry);
  //returns the array of keys/ids.
}

function errData(err){
  console.log(err);
}
