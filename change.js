const bod = document.body;
const headerText = document.getElementById("headerText");
const headerToggle = document.getElementById("headerToggle");
const toggler = document.getElementById("toggler");
const boggle = document.getElementById("boggle");
const followItems = document.getElementsByClassName("follow-item");
const overviewItems = document.getElementsByClassName("overview-item");


regElements = [bod, headerText, headerToggle, toggler, boggle];
function changeTheme(){
    for(i=0;i < regElements.length;i++){
        if(regElements[i].classList.contains("light")){
            regElements[i].classList.remove("light");
        }else{
            regElements[i].classList.add("light");
        }
    }

    for(let item of followItems){
        if(item.classList.contains("light")){
            item.classList.remove("light");
        }else{
            item.classList.add("light");
        }
    }

    for(let item of overviewItems){
        if(item.classList.contains("light")){
            item.classList.remove("light");
        }else{
            item.classList.add("light");
        }
    }
}

