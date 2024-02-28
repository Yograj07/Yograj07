const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const hiddenp = document.getElementById("hiddenP");

 function addTask()
{
    if(inputBox.value==='')
    {
        hiddenP.style.display = 'block';
        console.log('user input filed is empty');
        
    }
    else 
    {
        hiddenP.style.display = 'none';
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
       
    }
    inputBox.value="";
    saveData();
}
inputBox.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) { // Enter key
        addTask();
        saveData();
    }
});

listContainer.addEventListener("click" , function(e){

if(e.target.tagName==="LI")
{
    e.target.classList.toggle("checked");
    saveData();
}
else if(e.target.tagName==="SPAN")
{
    e.target.parentElement.remove();
    saveData();
}

}),false;



function saveData()
{
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();