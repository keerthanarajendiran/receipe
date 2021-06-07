var receipes;
var index;

window.onload = () =>{
    receipes=JSON.parse(localStorage.getItem("recipes"));
    index = localStorage.getItem("editindex");
    document.getElementById("add-res").value =receipes[index].title;
    document.getElementById("add-recipe-step").value =receipes[index].description;
}

function editValue(){
    receipes[index].title=document.getElementById("add-res").value;
    receipes[index].description=document.getElementById("add-recipe-step").value;
    if(receipes[index].title == "") 
    {      
        alert("Please Provide recipeName!");
        return false;       
    } 
    if(receipes[index].description== "") 
    {      
        alert("Please Provide recipesteps!");
        return false;       
    }
    localStorage.setItem("recipes", JSON.stringify(receipes))
    window.location.href="index.html";
}
function deleteValue(){
    receipes.splice(receipes[index],1);
    localStorage.setItem("recipes", JSON.stringify(receipes));
    window.location.href="index.html";
}