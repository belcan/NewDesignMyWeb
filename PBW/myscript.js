function calculateM() {
    let a = document.getElementById("number").value;
    let b = parseInt(a);

    if (a < 0 || a > 230) {
        document.getElementById("calcpbm").innerHTML = "Ha-ha, very funny";
        document.getElementById("weight").innerHTML = "<img src= 'funnymusk.jpg'>";
    } else if (a >= 140) {
        let c = 50 + 0.905 * (b - 152.4)
        document.getElementById("calcpbm").innerHTML = "PBW for Male Patient";
        document.getElementById("weight").innerHTML = c.toFixed(0) + ' kg';
    } else if (a < 1 && a >= 0) {
        document.getElementById("calcpbm").innerHTML = "Please enter height in cm";
        document.getElementById("weight").innerHTML = "";
    } else if (a >= 1 && a < 140) {
        document.getElementById("calcpbm").innerHTML = "C'mon, enter real height!";
        document.getElementById("weight").innerHTML = "";
    }
    gsap.from('img', {opacity: 0, duration: 1.5, y: 30, ease: 'Power2.easeInOut'})
    gsap.from('#calcpbm', {opacity: 0, duration: 1.5, y: -10, ease: 'Power2.easeInOut'})
    gsap.from('#weight', {opacity: 0, duration: 1.5, y: 10, ease: 'Power2.easeInOut'})
}

function calculateF() {
    let a = document.getElementById("number").value;
    let b = parseInt(a);

    if (a < 0 || a > 230) {
        document.getElementById("calcpbm").innerHTML = "Ha-ha, very funny";
        document.getElementById("weight").innerHTML = "<img src= 'funnymusk.jpg'>";
    } else if (a >= 140) {
        let d = 45.5 + 0.905 * (b - 152.4)
        document.getElementById("calcpbm").innerHTML = "PBW for Female Patient";
        document.getElementById("weight").innerHTML = d.toFixed(0) + ' kg';
    } else if (a < 1 && a >= 0) {
        document.getElementById("calcpbm").innerHTML = "Please enter height in cm";
        document.getElementById("weight").innerHTML = "";
    } else if (a >= 1 && a < 140) {
        document.getElementById("calcpbm").innerHTML = "C'mon, enter real height!";
        document.getElementById("weight").innerHTML = "";
    }
    gsap.from('img', {opacity: 0, duration: 1.5, y: 30, ease: 'Power2.easeInOut'})
    gsap.from('#calcpbm', {opacity: 0, duration: 1.5, y: -10, ease: 'Power2.easeInOut'})
    gsap.from('#weight', {opacity: 0, duration: 1.5, y: 10, ease: 'Power2.easeInOut'})
}

function changecol(value) {
    let color = document.body.style.backgroundColor;
    switch (value) {
        case 'm':
            color = "#cbe8f7";
            break;
        case 'f':
            color = "#f0daec";
            break;

    }
    document.body.style.backgroundColor = color;
}
    
     gsap.from('.all', {opacity: 0, duration: 1.2, y: - 40, ease: 'Power2.easeInOut', stagger: 0.3})

    // gsap.from('#pthight', {opacity: 0, duration: 1.5, y: 30, ease: 'Power2.easeInOut'})

    // gsap.from('#malCol', {opacity: 0, duration: 1.5, y: - 50, ease: 'Power2.easeInOut'})

    // gsap.from('#femCol', {opacity: 0, duration: 1.5, y: 50, ease: 'Power2.easeInOut'})

     