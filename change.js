var bod = document.getElementsByName("body");
var headerText = document.getElementById("headerText");
var headerToggle = document.getElementById("headerToggle");
var toggler = document.getElementById("toggler");
var boggle = document.getElementById("boggle");
var followItems = document.getElementsByClassName("follow-item");
var overviewItems = document.getElementsByClassName("overview-items");



function changeTheme(){
    var elements = [bod, headerText, headerToggle,
        toggler, boggle, followItems, overviewItems];
    
    elements.forEach((ele)=>{
        if(ele.classList.contains("light")){
            ele.classList.remove("light");
        }else if(ele.classList.contains("light") == false){
            ele.classList.add("light");
        }
    })
}