printButton.style.visibility='hidden';


function calculateM() {    
    
   let a = document.getElementById("inputHeight").value;
   let b = parseInt(a);    
   let c = 50 + 0.905 * (b - 152.4);
   
        document.querySelector("#fourMil").innerHTML = '  ' + (c * 4).toFixed(0) + '  ml';
        document.getElementById("fiveMil").innerHTML = '  ' +  (c * 5).toFixed(0) + ' ml';
        document.getElementById("sixMil").innerHTML = '  ' +  (c * 6).toFixed(0) + ' ml';
        document.getElementById("sevenMil").innerHTML = '   ' +  (c * 7).toFixed(0) + ' ml';
        document.getElementById("eightMil").innerHTML = '   ' +  (c * 8).toFixed(0) + ' ml'; 
        
        calcButton.style.visibility='hidden';
        printButton.style.visibility='visible';
    }



function calculateF() {
    let d = document.getElementById("inputHeight").value;
    let e = parseInt(d);    
    let f = 45.5 + 0.905 * (e - 152.4);        
        
        document.getElementById("fourMil").innerHTML = (f * 4).toFixed(0) + ' ml';
        document.getElementById("fiveMil").innerHTML = (f * 5).toFixed(0) + ' ml';
        document.getElementById("sixMil").innerHTML = (f * 6).toFixed(0) + ' ml';
        document.getElementById("sevenMil").innerHTML = (f * 7).toFixed(0) + ' ml';
        document.getElementById("eightMil").innerHTML = (f * 8).toFixed(0) + ' ml';

         
        calcButton.style.visibility='hidden';
        printButton.style.visibility='visible';
    }
    

    function doIt() {
        var order = "m";
        if (document.getElementById('radioMale').checked == true) {
          order = calculateM();
        } else if (document.getElementById('radioFemale').checked == true) {
          order = calculateF();
           
      }
    }

gsap.from('.volumes p, output', {opacity: 0, duration: 1.1, ease: 'Power2.easeInOut', stagger: 0.1})

gsap.from('#title', {opacity: 0, duration: 1.3, y: -40, ease: 'elastic.out(1.5, 0.3)'})

//gsap.from('#fourMil', {opacity: 0, duration: 1.5, ease: 'Power2.easeInOut'})


