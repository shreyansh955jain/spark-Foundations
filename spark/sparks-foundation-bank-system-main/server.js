// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
// import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";


// const firebaseConfig = {
//   apiKey: "AIzaSyBg59qHsRHDRvTCu7DW7zMDdBlTZult444",
//   authDomain: "sparks-foundation-7f994.firebaseapp.com",
//   databaseURL: "https://sparks-foundation-7f994-default-rtdb.firebaseio.com",
//   projectId: "sparks-foundation-7f994",
//   storageBucket: "sparks-foundation-7f994.appspot.com",
//   messagingSenderId: "848126803831",
//   appId: "1:848126803831:web:fc05292cc228a44311eb72",
//   measurementId: "G-9Y3L1LZBHH"
// };

//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

//   //reference database
//    var objDB =firebase.database().ref("Sparks Foundation");
//     document.getElementById('survey-form').addEventListener('submit',submitForm);

//     function submitForm(e){
//       e.preventDefault();
//       var sEmail=getElementVAl('Semail');
//       var rEmail=getElementVAl('Remail');
//       var amt=getElementVAl('amt');

//       console.log(sEmail,rEmail,amt);
//     }

//     const getElementVAl=(id)=> {
//       return document.getElementById(id).Value;
//     }


  function sendMoney(){
    var enterName = document.getElementById("Semail").value;
    var enterSName = document.getElementById("Remail").value;
    var enterAmount = parseInt(document.getElementById("amt").value);
  
  var findSenderBankAccount = enterSName + "BankBalance";
    var enterSAmount =parseInt(document.getElementById(findSenderBankAccount).innerHTML);
    if (enterAmount > enterSAmount) {
      alert("Insufficient Balance.")
    }
  }


