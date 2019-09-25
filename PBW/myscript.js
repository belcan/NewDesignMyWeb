function calculateM() {
    let a = document.getElementById("number").value;
    let b = parseInt(a);

    if (a < 0 || a > 230) {
        document.getElementById("calcpbm").innerHTML = "Ha-ha, very funny";
        document.getElementById("weight").innerHTML = "<img src= 'funnymusk.jpg'>";
    } else if (a >= 152) {
        let c = 50 + 0.905 * (b - 152.4)
        document.getElementById("calcpbm").innerHTML = "PBW for Male Patient";
        document.getElementById("weight").innerHTML = c.toFixed(0) + ' kg';
    } else if (a < 1 && a >= 0) {
        document.getElementById("calcpbm").innerHTML = "Please enter height in cm";
        document.getElementById("weight").innerHTML = "";
    } else if (a >= 1 && a < 152) {
        document.getElementById("calcpbm").innerHTML = "C'mon, enter real height!";
        document.getElementById("weight").innerHTML = "";
    }
}

function calculateF() {
    let a = document.getElementById("number").value;
    let b = parseInt(a);

    if (a < 0 || a > 230) {
        document.getElementById("calcpbm").innerHTML = "Ha-ha, very funny";
        document.getElementById("weight").innerHTML = "<img src= 'funnymusk.jpg'>";
    } else if (a >= 152) {
        let d = 45.5 + 0.905 * (b - 152.4)
        document.getElementById("calcpbm").innerHTML = "PBW for Female Patient";
        document.getElementById("weight").innerHTML = d.toFixed(0) + ' kg';
    } else if (a < 1 && a >= 0) {
        document.getElementById("calcpbm").innerHTML = "Please enter height in cm";
        document.getElementById("weight").innerHTML = "";
    } else if (a >= 1 && a < 152) {
        document.getElementById("calcpbm").innerHTML = "C'mon, enter real height!";
        document.getElementById("weight").innerHTML = "";
    }
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
