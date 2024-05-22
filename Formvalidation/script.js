



    function validation() {
        validName()
        validLastName()
        validEmail()
        validphone()

        
        window.location.href="output.html";

    





    window.location.href="output.html";
  
   

     

    
      
      
      
        // Radio button check
        // var radios = document.getElementsByName("gender");
        // var formValid = false;

        // var i = 0;
        // while (!formValid && i < radios.length) {
        //     if (radios[i].checked) formValid = true;
        //     i++;
        // }

        // if (formValid) {
        //     document.getElementById("radioblur").innerHTML = "valid";
        //     document.getElementById("radioblur").style.visibility = "visible";
        //     document.getElementById("radioblur").style.color = "green";
        // }
        // else {
        //     document.getElementById("radioblur").innerHTML = "Invalid";
        //     document.getElementById("radioblur").style.visibility = "visible";
        //     document.getElementById("radioblur").style.color = "red";
        // }



      
        // validated Checkbox
        // var check = document.getElementById("language")
        // var formValid = false;

        // var i = 0;
        // while (!formValid && i < check.length) {
        //     if (check[i].checked) formValid = true;
        //     i++;
        // }
        // if (formValid) {
        //     document.getElementById("checkblur").innerHTML = "valid";
        //     document.getElementById("checkblur").style.visibility = "visible";
        //     document.getElementById("checkblur").style.color = "green";
        // }
        // else {
        //     document.getElementById("checkblur").innerHTML = "Invalid";
        //     document.getElementById("checkblur").style.visibility = "visible";
        //     document.getElementById("checkblur").style.color = "red";
        // }

      

        // var file = document.getElementById("photo").value;
        // //var regxamount = /^\d+(\.\d{1,2})?$/;
        // if (file.value == "") {
        //     // alert("valid");
        //     document.getElementById("fileload").innerHTML = "valid";
        //     document.getElementById("fileload").style.visibility = "visible";
        //     document.getElementById("fileload").style.color = "green";
        // }
        // else {
        //     document.getElementById("fileload").innerHTML = "Invalid";
        //     document.getElementById("fileload").style.visibility = "visible";
        //     document.getElementById("fileload").style.color = "red";
        // }

       // localStorage.setItem("name",name);
  //  window.location.href="output.html";


    }












    function storeTable()
    {
       var name=localStorage.getItem("name");
       document.getElementById("result-name").innerHTML = name;


       var lastname=localStorage.getItem("lastname");
       document.getElementById("result-lname").innerHTML=lastname;

       var email=localStorage.getItem("email");
       document.getElementById("result-email").innerHTML=email;

       var phone=localStorage.getItem("number");
       document.getElementById("result-phone").innerHTML=phone;

       var password=localStorage.getItem("password");
       document.getElementById("result-password").innerHTML=password;

       var address=localStorage.getItem("address");
       document.getElementById("result-adress").innerHTML=address;

       var zip=localStorage.getItem("pin");
       document.getElementById("result-pin").innerHTML=zip;

       var pan=localStorage.getItem("pan");
       document.getElementById("result-lname").innerHTML=lastname;




    }







        function checkaddres() {
            var current = document.getElementById("adress");
            var Permanant = document.getElementById("per_add");
            var checBox = document.getElementById("same_add");
            if (current === Permanant) {
                checBox.checked = true;
                copyAddress();
                alert("address same");
            }
            else {
                checBox.checked = false
                alert("Diffrent Address");

            }
        }

        function copyAddress() {
            var current = getElementById("adress");
            var checkBox = getElementById("same_add");
            if (checkBox.checked) {
                document.getElementById("per_add").value = current;
            }
            else {
                document.getElementById("per_add").value = "";
            }
        }

















    

// window.addEventListener('load', () => {

//    const params=( URL (document.location)).searchParams;
//     var name=params.get('name')
//     var lname=params.get('lname')

//      document.getElementById('result_name').innerHTML=name;
//      document.getElementById('result_lname').innerHTML=lname;


// })