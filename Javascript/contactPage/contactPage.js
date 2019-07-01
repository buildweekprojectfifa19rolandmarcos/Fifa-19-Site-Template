document.getElementById("form1").onsubmit=function() {
    first = document.getElementById("firstname").value;
    last = document.getElementById("lastname").value;
    eMail= document.getElementById("eMail").value;
    message = document.getElementById("message").value;
    yourName = first + " " + last;
    document.getElementById("yourname").innerHTML = "Hi " + yourName + ". Your message " + message + " has been submitted.From " + eMail + ".";
    return false;
  }