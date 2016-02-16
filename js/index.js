var barCode, a, b, controlSum, error;
function formChanged() {
  barCode=a=b=controlSum=error=" ";
  barCode = document.getElementsByName("barcode")[0].value;
  a = barCode.split("");
  b = (2*a[11]+3*a[10]+4*a[9]+5*a[8]+6*a[7]+7*a[6]+2*a[5]+3*a[4]+4*a[3]+5*a[2]+6*a[1]+7*a[0])%11;

  if (barCode==NaN) {
    error = "Введіть цифрове значення";
  } else if (a.length != 12) {
    error = "Введіть 12 цифр";
    barCode = "";
  } else if (b==0) {
    controlSum = 5;
  } else if (b==1) {
    controlSum = 0;
  } else {
    controlSum = 11 - b;
  }

  if (!controlSum) {
    document.getElementById("error").innerHTML=error;
  } else {
    document.getElementById("error").innerHTML=error;
    document.getElementById("controlSum").innerHTML=controlSum;
    document.getElementById("barcode").innerHTML= ''+barCode+controlSum;
    console.log(controlSum)
  }
}