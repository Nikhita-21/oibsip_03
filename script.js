
let convert=() =>
{
     val=document.getElementById("degrees").value;
     types=document.querySelector("#type").value;
     r=document.getElementById("result");
    if(types == "Celsius")
    {
       let res=((9*val)/5)+32
       r.innerHTML =res.toFixed(4)+"F";
    }
    else
    {
       let resu=(5*(val-32))/9
       r.innerHTML =resu.toFixed(4)+"C";
    }
    
    
}