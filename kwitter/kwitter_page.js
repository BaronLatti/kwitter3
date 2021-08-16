// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCk5TZ2hwuMKNP2cSPvuBfPiz9ZFBRzfa0",
      authDomain: "kwitter-25b37.firebaseapp.com",
      databaseURL: "https://kwitter-25b37-default-rtdb.firebaseio.com",
      projectId: "kwitter-25b37",
      storageBucket: "kwitter-25b37.appspot.com",
      messagingSenderId: "645139865054",
      appId: "1:645139865054:web:29f15cf1721ef86ae1514f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });
document.getElementById("msg").value = "";
}


//End code
      } });  }); }
getData();
