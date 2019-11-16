 window.onload= resetbutton.style.display = "none";
 function calculate() {
      var a = document.getElementById("pplato").value;
      var b = document.getElementById("pesoninsp").value;
      var c = document.getElementById("peep").value;
      var d = document.getElementById("pesonexp").value;
      var e = document.getElementById("ptpinsp").innerHTML = (a - (b * 1.36)).toFixed(1);
      var f = document.getElementById("ptpexp").innerHTML = (c - (d * 1.36)).toFixed(1);
      var g = document.getElementById("deltap").innerHTML = (e - f).toFixed(1);   
      resetbutton.style.display = "block";

    }

    function resetform() {
      document.getElementById("myform").reset()

      document.getElementById("ptpinsp").innerHTML = ''
      document.getElementById("ptpexp").innerHTML = ''
      document.getElementById("deltap").innerHTML = ''    
      resetbutton.style.display = "none";
    }

    gsap.from('.name', {opacity: 0, duration: 1.3, y: -40, ease: 'elastic.out(1.5, 0.3)'})

    gsap.from('input', {opacity: 0, duration: 1.3, y: 120, ease: 'Power2.easeInOut', stagger: 0.5})