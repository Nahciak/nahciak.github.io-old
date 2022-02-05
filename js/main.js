function openPage(pageName,elmnt,url) {
  var i, tablinks;
  document.getElementById(pageName).style.display = "block";
  elmnt.style.opacity = 1;
  if(url != null){
    window.location.replace(url); }
  else{
    url = "../" }
}
// Gets the element with id="defaultOpen" and clicks on it
document.getElementById("defaultOpen").click();
