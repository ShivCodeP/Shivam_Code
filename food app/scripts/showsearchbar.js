function showsearchbar() {
  
    var container = document.getElementById("navbar");

    var search_box = document.getElementById("dropdown");
    
    var search_dropdown = document.getElementById("search_link");
    // console.log(search_dropdown)
    
    search_dropdown.addEventListener("mouseover",function () {
    
      // console.log("working")
      showdropDown();
    
    });
    function showdropDown() {
      
      search_box.style.visibility = "visible";
    }
    
    container.addEventListener("mouseleave",function () {
    
    hidedropdown();
    })
    
    function hidedropdown() {
     search_box.style.visibility = "hidden";
    
    }

}

export default showsearchbar;
