const validNames = ["Nicole","Nics","Nicy",];
function checkName() {
const enteredName =
document.getElementById('nameInput').value.trim();

if 
(validNames.includes(enteredName)) {window.location.href = "success.html";}
  else {
    alert("Hindi ka siyaaa");
  }
}
  // Tab to edit
  