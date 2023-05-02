
var firebaseConfig = {
  apiKey: "AIzaSyD7AzB7v0mgTxDT6awFHFMNUka2drM3rwU",
  authDomain: "lets-chat-web-app-e0dc6.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-e0dc6-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-e0dc6",
  storageBucket: "lets-chat-web-app-e0dc6.appspot.com",
  messagingSenderId: "782150537537",
  appId: "1:782150537537:web:a8832a286727608d7c91c0"
};


  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome To Chat App " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "chat_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "chat_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
