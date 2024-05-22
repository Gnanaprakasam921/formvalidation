function validName()
{



    var name = document.getElementById("name").value;
    var regxname = /^[a-zA-Z]{3,30}$/;
    if (regxname.test(name)) {
        // alert("valid");
        document.getElementById("iblur").innerHTML = "valid";
        document.getElementById("iblur").style.visibility = "visible";
        // name.style.border="2px solid green";
        document.getElementById("iblur").style.color = "green";

        
    localStorage.setItem("name",name);
  

        
    }
    else {
        document.getElementById("iblur").innerHTML = "Invalid";
        document.getElementById("iblur").style.visibility = "visible";
    //    name.style.border="2px solid red";
        document.getElementById("iblur").style.color = "red";
       
    }   


}


    
function validLastName()
{
        // validation for Last name
        var lname = document.getElementById("lastname").value;
        var regxlname = /^[a-zA-Z ]{2,30}$/;
        if (regxlname.test(lname)) {
            // alert("valid");
            document.getElementById("lblur").innerHTML = "valid";
            document.getElementById("lblur").style.visibility = "visible";
            document.getElementById("lblur").style.color = "green";
           // document.getElementById("iblur").style.border="1px solid green"
            localStorage.setItem("lastname",lname);
        }
        else {
            document.getElementById("lblur").innerHTML = "Invalid";
            document.getElementById("lblur").style.visibility = "visible";
           // document.getElementById("iblur").style.border="1px solid green"
            document.getElementById("lblur").style.color = "red";
        }


}

function validEmail()
{
      // validation for email
    var email = document.getElementById("email").value;
    var regxemail = /^([a-zA-Z0-9]{2,12})@([a-zA-Z0-9]{2,12}).([a-z]{2,8})$/;
    if (regxemail.test(email)) {
        // alert("valid");
        document.getElementById("eblur").innerHTML = "valid";
        document.getElementById("eblur").style.visibility = "visible";
        document.getElementById("eblur").style.color = "green";

        localStorage.setItem("email",email);
    }
    else {
        document.getElementById("eblur").innerHTML = "Invalid";
        document.getElementById("eblur").style.visibility = "visible";
        document.getElementById("eblur").style.color = "red";
    }

}
function validphone()
{
       // Phone number validation
       var phone = document.getElementById("number").value;
       var regxphone = /^[7-9][0-9]{9}$/;
       if (regxphone.test(phone)) {
           // alert("valid");
           document.getElementById("phoneblur").innerHTML = "valid";
           document.getElementById("phoneblur").style.visibility = "visible";
           document.getElementById("phoneblur").style.color = "green";
           localStorage.setItem("number",phone);
       }
       else {
           document.getElementById("phoneblur").innerHTML = "Invalid";
           document.getElementById("phoneblur").style.visibility = "visible";
           document.getElementById("phoneblur").style.color = "red";
       }
}

function validpassword()
{
      // validation for password
      var password = document.getElementById("password").value;
      var regxpassword = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      if (regxpassword.test(password)) {
          // alert("valid");
          document.getElementById("passblur").innerHTML = "valid";
          document.getElementById("passblur").style.visibility = "visible";
          document.getElementById("passblur").style.color = "green";
          localStorage.setItem("password",password);
      }
      else {
          document.getElementById("passblur").innerHTML = "Invalid";
          document.getElementById("passblur").style.visibility = "visible";
          document.getElementById("passblur").style.color = "red";
      }
   
}

// function validgender()
// {
//       // Radio button check
//       var radios = document.getElementsByName("gender");
//       var formValid = false;

//       var i = 0;
//       while (!formValid && i < radios.length) {
//           if (radios[i].checked) formValid = true;
//           i++;
//       }

//       if (formValid) {
//           document.getElementById("radioblur").innerHTML = "valid";
//           document.getElementById("radioblur").style.visibility = "visible";
//           document.getElementById("radioblur").style.color = "green";
//       }
//       else {
//           document.getElementById("radioblur").innerHTML = "Invalid";
//           document.getElementById("radioblur").style.visibility = "visible";
//           document.getElementById("radioblur").style.color = "red";
//       }
// }

function validaddress()
{

            //Address validation
            var address = document.getElementById("adress").value;
            var regxaddress = /^[a-zA-Z0-9 ]{10,30}$/;
            if (regxaddress.test(address)) {
                // alert("valid");
                document.getElementById("addblur").innerHTML = "valid";
                document.getElementById("addblur").style.visibility = "visible";
                document.getElementById("addblur").style.color = "green";
                localStorage.setItem("address",address);
            }
            else {
                document.getElementById("addblur").innerHTML = "Invalid";
                document.getElementById("addblur").style.visibility = "visible";
                document.getElementById("addblur").style.color = "red";
            }

}

function validpin()
{

    var zipcode = document.getElementById("pin").value;
    var regxpin = /^(\d{6})$/;
    if (regxpin.test(zipcode)) {
        // alert("valid");
        document.getElementById("pinblur").innerHTML = "valid";
        document.getElementById("pinblur").style.visibility = "visible";
        document.getElementById("pinblur").style.color = "green";
        localStorage.setItem("pin",zipcode);
    }
    else {
        document.getElementById("pinblur").innerHTML = "Invalid";
        document.getElementById("pinblur").style.visibility = "visible";
        document.getElementById("pinblur").style.color = "red";
    }

}

function validpan()
{

     
    var pan_number = document.getElementById("pan").value;
    var regxpan = /^[0-9A-Z]{10}$/;
    if (regxpan.test(pan_number)) {
        // alert("valid");
        document.getElementById("panblur").innerHTML = "valid";
        document.getElementById("panblur").style.visibility = "visible";
        document.getElementById("panblur").style.color = "green";
        localStorage.setItem("pan",pan_number);
    }
    else {
        document.getElementById("panblur").innerHTML = "Invalid";
        document.getElementById("panblur").style.visibility = "visible";
        document.getElementById("panblur").style.color = "red";
    }

}

function validAmount()
{

    var Money = document.getElementById("amount").value;
    var regxamount = /^\d+(\.\d{1,2})?$/;
    if (regxamount.test(Money)) {
        // alert("valid");
        document.getElementById("balanceblur").innerHTML = "valid";
        document.getElementById("balanceblur").style.visibility = "visible";
        document.getElementById("balanceblur").style.color = "green";
        localStorage.setItem("amount",Money);
    }
    else {
        document.getElementById("balanceblur").innerHTML = "Invalid";
        document.getElementById("balanceblur").style.visibility = "visible";
        document.getElementById("balanceblur").style.color = "red";
    }

}
