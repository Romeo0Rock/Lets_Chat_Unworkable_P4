
var firebaseConfig = {
    apiKey: "AIzaSyC2apj3kDrB-JFprMOl1owh7TQyQPxnPJ0",
    authDomain: "kwitter-84bc5.firebaseapp.com",
    databaseURL: "https://kwitter-84bc5-default-rtdb.firebaseio.com",
    projectId: "kwitter-84bc5",
    storageBucket: "kwitter-84bc5.appspot.com",
    messagingSenderId: "505243944056",
    appId: "1:505243944056:web:a399de9b173919c758598d"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



