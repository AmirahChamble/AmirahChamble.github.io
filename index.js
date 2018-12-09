function hideTabs(){

  var tabContent = document.getElementsByClassName("Contentwrapper");
  //hide all blocks wth this class name
  for(var i = 0; i < tabContent.length; i++ ){
    tabContent[i].style.display = "none";
  }
}


function openTab(event, tab){
  //some variables
  var i , tabLinks ;

  //hide all elements with the class="tabContnet"
  hideTabs();

  //remove active class from all class="tablinks"
  tabLinks = document.getElementsByClassName("tabWrapper");
  for( i =0; i < tabLinks.length; i++){
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }
  //show current tab content section and add the active status to its tab
  document.getElementById(tab).style.display = "flex";
  event = currentTarget.className += " active"

  

}
