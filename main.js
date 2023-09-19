function Create(){
    return {
    name:"task",
    date:0,
    time:0,
    status:"none",
    priority:0,
    display:function(){
        return '<td>Task_Name :'+this.name+'</td><td>Date :'+this.date+'</td><td>Time :'+this.time+'</td><td>Status :'+this.status+'</td><td>priority :'+this.priority+'</td>';
    },
    ToggleStatus:function(status)
    {
      this.status=status;
    }
    }
}
let task=Create();
let store=new Array();
task.name="Java Assignment";
task.due_date=20;
task.time=30;
task.status="completed";
task.priority=2;

store.push(task);

function AddTask(task){
    store.push(task);
}
function displayAll()
{
   let temp = store.map(e=>e.display());
   return temp;
}
function displayTitles()
{
   let temp = store.map(e=>e.name);
   return temp;
}
function AddTaskDetails(name,date,time,status,priority){
    let temp = Create();
    temp.name=name;
    temp.date=date;
    temp.status=status;
    temp.time=time
    temp.priority=priority;
    AddTask(temp);
    prioritySort();
}
function removeTaskByTitle(title){
    let index=store.findIndex(x=>x.title==title);
    console.log(index);
    store.splice(index,1);
}
function RemoveFirstTask()
{
    if(store.shift()==undefined)
    {
        alert("The list is Empty");
    }
    else
    {
    store.shift();
    alert("The Element is removed at First Successfully");
    }
}
function RemoveLastTask(){
    if(store.pop()==undefined)
    {
        alert("The list is Empty");
    }
    else
    {
    store.shift();
    alert("The Element is removed at Last Successfully");
    }
}
// function getTaskbyDue_date(date){
//      let temp = store.filter(x=>x.due_date==date);
//      return temp.map(x=>x.display());
// }
// function getTaskbyname(name){
//     let temp = store.filter(x=>x.name==name);
//     return temp.map(x=>x.display());
// }
// function getTaskbystatus(status1){
//     let temp = store.filter(x=>x.status=status1);
//     return temp.map(x=>x.display());
// }
function prioritySort()
{
    store=store.sort((a,b)=>parseInt(a.priority)-parseInt(b.priority));
    console.log(store);
}
function generate(){
const currentDate = new Date();
const name = document.getElementById("task").value;
const priority = document.getElementById("priority").value;
const time = document.getElementById("deadline").value;
const date=currentDate;
const status = document.getElementById("Status").value;
    if (date === ""||time <= 0) {
        alert("Please select an correct time in minute for the deadline.")
        return;
    }
    let min=time*60*1000;
    setTimeout(()=>{alert("Time is over for this work "+name+" !Work faster Boss!");removeTaskByTitle(name);},min);
    AddTaskDetails(name,date,time,status,priority);
}
function generateTable(){  
    let title=displayAll();
    mytable.innerHTML="";
    for(var i=0;i<title.length;i++)
    {
        mytable.innerHTML += "<td>"+title[i]+"</td>";
    }
}
function RemovebyTitle()
{
    let name=document.getElementById("task-r").value;
    removeTaskByTitle(name);
}
function toggle() {
    let  name = document.getElementById("name").value;
    let  status  = document.getElementById("Status-op").value;
    let value=store.map(x=>
        {if(x.name==name)
            {
                x.ToggleStatus(status);
                console.log(x);
            }
        });
}
