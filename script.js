var price_Check = document.getElementById("price").value; 
var name_check = document.getElementById("name").value;
var date_check = document.getElementById("dateoflaunch").value;
function checkpage(){
if (name_check == "")
    alert("Enter your name");
    
if(isNaN(price_check) == true)
    alert("price must be in number");
    
if(date_check == "")
    alert("Enter the date");
}