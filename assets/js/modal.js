// Get the <span> element that closes the modal
var accept=document.getElementsByClassName("forward")[0];
var modal= document.getElementById("myModal");

// Get the modal
window.onload = function() {
      modal.style.display="block"; 
    };
accept.onclick= function() {
    
    modal.style.display="none";
    
};


//window.onload = function() {
//    console.log("Hello2");
//    
//    document.getElementById("send").onclick = function() {
//        console.log("Hello");
//        var name= document.getElementById("name").value;
//        var email= document.getElementById("email").value;
//        var message1=document.getElementById("message").value;
//            Email.send({
//            Host : "smtp.elasticemail.com",
//            Username : "ftureagrawal@gmail.com",
//            Password : "6ca13c6f-2afc-4198-933d-4bb9bb75c438",
//            To : 'cheeruagrawal@gmail.com',
//            From : "ftureagrawal@gmail.com",
//            Subject : "Hi! I am " + name + " my email is " + email,
//            Body :  message1
//        }).then(
//          message => alert(message)
//        );
//        console.log("Hello1");
//    }
//}
