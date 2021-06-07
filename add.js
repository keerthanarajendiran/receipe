var recipes;
function toggleFunction(){
    var recipeName=document.getElementById("recipe-name").value;
    var recipesteps=document.getElementById("recipe-steps").value;

    if(recipeName == "") 
    {      
        alert("Please Provide recipeName!");
        return false;       
    } else if(recipesteps == "") 
    {      
        alert("Please Provide recipesteps!");
        return false;       
    } else {
        if( JSON.parse(localStorage.getItem("recipes")) ){
        recipes = JSON.parse(localStorage.getItem("recipes"));
        } else {
            recipes = [];
        }
        var recipe={
            title: recipeName,
            description:recipesteps,    
        };
        recipes.push(recipe);
        localStorage.setItem("recipes",JSON.stringify(recipes));
        window.location.href="index.html";
    }
}       
