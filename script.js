console.log('Script Connected!');






if (document.getElementById('tipPercent') != null) {
   console.log('null');
}
else {
    str = null;
}


document.getElementById("calcBtn").addEventListener("click", function(){
  console.log('button pressed!');

  let tipPercent = document.getElementById('tipPercent').value ;
  let peopleAmount = document.getElementById('peopleAmount').value; 
  let totalAmount = document.getElementById('totalAmount').value; 
 
  var taxDollar = ((tipPercent *.01) * totalAmount);
  var taxTotal = parseInt(totalAmount) + parseInt(taxDollar);
  var finalTotal= parseInt(taxTotal)/ parseInt(peopleAmount);
  var splitTax= parseInt(taxDollar) / parseInt(peopleAmount);

if(finalTotal){
  document.getElementById('totalCost').textContent = ' Evenly Split Bill' + ' $ ' + finalTotal.toFixed(2);
  document.getElementById('totalTip').textContent = 'Total Tip: ' + ' $ ' +  taxDollar.toFixed(2);
  document.getElementById('splitTax').textContent = 'Just Split Tax: ' + ' $ ' +  splitTax.toFixed(2);
  console.log(splitTax);
}



});




