function hideTabs(){
  var tabContent = document.getElementsByClassName("Contentwrapper");
  //hide all blocks wth this class name
  for(var i = 0; i < tabContent.length; i++ ){
    tabContent[i].style.display = "none";
  }
}

function removeActiveClass(){
  var tabLinks = document.getElementsByClassName("tabWrapper");
  for( var i =0; i < tabLinks.length; i++){
    tabLinks[i].className = tabLinks[i].className.replace("active", "");
  }
}


function openTab(tab, tabContent){
  //hide all elements with the class="tabContent"
  hideTabs();
  //remove active class from all class="tabLinks"
  removeActiveClass();
  //show current tab content section and add the active status to its tab
  document.getElementById(tabContent).style.display = "flex";
  document.getElementById(tab).classList.add("active");

}