var opscreen=document.getElementById("opscreen")
function display(num)
{
    opscreen.value=opscreen.value+num
}
function calculate()
{
    try{
        opscreen.value=eval(opscreen.value)

    }
    catch(err)
    {
        alert("invalid")
    }
    

}
function clear1()
{
    opscreen.value="";
}
function del()
{
    opscreen.value=opscreen.value.slice(0,-1);
}
