function calculateTip()
{
    var bill = Number(document.getElementById('bill').value);
    var tip = bill * .20;
    var totalBill = bill + tip;

    document.getElementById("tip").innerHTML= "$"+Number(tip).toFixed(2);
    document.getElementById("total").innerHTML= "$"+Number(totalBill).toFixed(2);
}
