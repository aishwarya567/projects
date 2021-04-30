function display(val)
{
 document.getElementById("textval").value+=val
}

function result()
{
    
    let x = document.getElementById("textval").value
    
    let y = eval(x)
    console.log("evaluate");
        document.getElementById("textval").value = y
}
function clr()
{
 document.getElementById("textval").value = ""
}