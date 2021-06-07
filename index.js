var ranji;
var ul;
window.onload = () => {
    ranji=JSON.parse(localStorage.getItem("recipes"));
    for(var i=0; i<ranji.length; i++){
        var list=document.createElement("li");
        // var list =document.createElement("p")
        list.className="recipe-names";
        list.id=i;
        var list1=document.createElement("p");
        // list1.id=i;
        list1.className="recipe-stpes";
        ul=document.getElementById("ul");
        var text=document.createTextNode(ranji[i].title);
        var text1=document.createTextNode(ranji[i].description);
        list.appendChild(text);
        list1.appendChild(text1);
        // list.appendChild(list2);
        list.appendChild(list1);

        ul.appendChild(list);
        list.addEventListener("click",edititem)
    }
    if(ranji.length==0){
        document.getElementById("container-sec-title").style.display="block";
    }else{
        document.getElementById("container-sec-title").style.display="none";
    }
}
function myFunction(){   
    window.location.href="add.html";
}
function edititem(e){
    localStorage.setItem("editindex",e.target.id);
    window.location.href="edit.html";
}
const searchBar = document.getElementById("search");
searchBar.addEventListener('keyup',function(e){
    const searchValue = e.target.value.toLowerCase();
    console.log(searchValue)
    var child = ul.childNodes;
    console.log(child);
    for(var i=0; i<ranji.length; i++){
    var searchItem = ranji[i].title;
        console.log(searchItem);
        if(searchItem.toLowerCase().indexOf(searchValue) != -1){
            // searchItem.style.display ="block";
            console.log("correct");
            console.log(document.getElementById(i))
            document.getElementById(i).style.display='block';
            
        }else{
            // searchItem.style.display ="none";
            console.log("wrong");
            console.log(document.getElementById(i))
            document.getElementById(i).style.display='none';
        }
    }
});

