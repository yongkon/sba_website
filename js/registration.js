let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

function validation() {
    // User name Check
    if (document.Registration.Username.value=="") {
        document.getElementById("message").innerHTML="Enter Username*";        
        document.Registration.Username.focus();
        return false;
    }
    else if(document.Registration.Username.value.length<5) {
        document.getElementById("message").innerHTML="Username at least five letters*";  
        return false;      
    }

    // Email Check
    if (document.Registration.Email.value=="") {
        document.getElementById("message").innerHTML="Enter your Email*";        
        document.Registration.Email.focus();
        return false;
    } 

    // Password Check
    if (document.Registration.Password.value=="") {
        document.getElementById("message").innerHTML="Enter your Password*";        
        document.Registration.Password.focus();
        return false;
    } else if(!passwordRegex.test(document.Registration.Password.value)) {
        document.getElementById("message").innerHTML="Password should be over 8 characters, <br>at least one letter, number and special character*";    
        return false;
    } else if(document.Registration.Password.value!==document.Registration.cPassword.value) {
        document.getElementById("message").innerHTML="passwords doesn't match*";    
        return false; 
    } else if(document.Registration.cPassword.value == "") {
        document.getElementById("message").innerHTML="Confirm your Password*";    
        document.Registration.cPassword.focus();
        return false; 
    }
 
    let username = document.Registration.Username.value;
    let email = document.Registration.Email.value;
    let password = document.Registration.Password.value;
    // 1. object to JSON
    // Stringfy(obj)
    let json = JSON.stringify(true);

    let newUser = {
        username : username,
        email : email,
        password : password,
    }
    json = JSON.stringify(newUser);

    alert(json);



    // 2. JSON to Object
    // 

}
