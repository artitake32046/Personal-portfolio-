


  AOS.init();


const modal1 = document.getElementById('projectDetailsModal1');
const modal2 = document.getElementById('projectDetailsModal2');
const modal3 = document.getElementById('projectDetailsModal3');

const btn1 = document.getElementById('projectDetailsBtn1');
const btn2 = document.getElementById('projectDetailsBtn2');
const btn3 = document.getElementById('projectDetailsBtn3');


const close1 = document.getElementById('closeModal1');
const close2 = document.getElementById('closeModal2');
const close3 = document.getElementById('closeModal3');


btn1.onclick = function() {
    modal1.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
}
btn3.onclick = function() {
    modal3.style.display = "block";
}


close1.onclick = function() {
    modal1.style.display = "none";
}
close2.onclick = function() {
    modal2.style.display = "none";
}
close3.onclick = function() {
    modal3.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}