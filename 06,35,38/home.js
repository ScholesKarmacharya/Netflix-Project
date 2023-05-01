function validate()
{
  var username=document.getElementById("username").value;
  var password=document.getElementById("password").value;

    if (username=="NETFLIX" && password=="NETFLIX")
    {
      return true;
    }
    else
    {
      alert("login failed")
      return false;
    }
  
}