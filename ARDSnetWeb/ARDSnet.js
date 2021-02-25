printButton.style.visibility = 'hidden';


function calculateM() {

  let a = document.getElementById("inputHeight").value;
  let b = parseInt(a);
  let c = 50 + 0.905 * (b - 152.4);
  if (a === '') {
    alert("Please Enter Paitent's Height")
  }
  else if (a < 120 || a > 240) { alert("Make Sure To Enter Correct Height in cm") }
  else {
    document.querySelector("#fourMil").innerHTML = '  ' + (c * 4).toFixed(0) + '  ml';
    document.getElementById("fiveMil").innerHTML = '  ' + (c * 5).toFixed(0) + ' ml';
    document.getElementById("sixMil").innerHTML = '  ' + (c * 6).toFixed(0) + ' ml';
    document.getElementById("sevenMil").innerHTML = '   ' + (c * 7).toFixed(0) + ' ml';
    document.getElementById("eightMil").innerHTML = '   ' + (c * 8).toFixed(0) + ' ml';

    document.getElementById("inputHeight").disabled = true;

    calcButton.style.visibility = 'hidden';
    printButton.style.visibility = 'visible';

    gsap.from('.volumes, output', { opacity: 0, duration: 1.1, ease: 'elastic.out(1.5, 0.3)', stagger: 0.2 })
  }
}


function calculateF() {
  let d = document.getElementById("inputHeight").value;
  let e = parseInt(d);
  let f = 45.5 + 0.905 * (e - 152.4);
  if (d === '') {
    alert("Please Enter Paitent's Height")
  }
  else if (d < 120 || d > 240) { alert("Make Sure To Enter Correct Height in cm") }
  else {
    document.getElementById("fourMil").innerHTML = (f * 4).toFixed(0) + ' ml';
    document.getElementById("fiveMil").innerHTML = (f * 5).toFixed(0) + ' ml';
    document.getElementById("sixMil").innerHTML = (f * 6).toFixed(0) + ' ml';
    document.getElementById("sevenMil").innerHTML = (f * 7).toFixed(0) + ' ml';
    document.getElementById("eightMil").innerHTML = (f * 8).toFixed(0) + ' ml';

    document.getElementById("inputHeight").disabled = true;


    calcButton.style.visibility = 'hidden';
    printButton.style.visibility = 'visible';

    gsap.from('.volumes, output', { opacity: 0, duration: 1.1, ease: 'elastic.out(1.5, 0.3)', stagger: 0.2 })
  }
}

function doIt() {
  var order = "m";
  if (document.getElementById('radioMale').checked == true) {
    order = calculateM();
  } else if (document.getElementById('radioFemale').checked == true) {
    order = calculateF();

  }
}


function doItThree() {
  if (document.querySelector("#fourMil").innerHTML !== ' '); {
    document.querySelector("#fourMil").innerHTML = '___';
    document.getElementById("fiveMil").innerHTML = '___';
    document.getElementById("sixMil").innerHTML = '___';
    document.getElementById("sevenMil").innerHTML = '___';
    document.getElementById("eightMil").innerHTML = '___';

    document.getElementById("inputHeight").disabled = false;

    calcButton.style.visibility = 'visible';
    printButton.style.visibility = 'hidden';
  }
}

gsap.from('.volumes p, output', { opacity: 0, duration: 1.1, ease: 'Power2.easeInOut', stagger: 0.1 })

gsap.from('#title', { opacity: 0, duration: 1.3, y: -40, ease: 'elastic.out(1.5, 0.3)' })

//gsap.from('#fourMil', {opacity: 0, duration: 1.5, ease: 'Power2.easeInOut'})


