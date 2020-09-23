// var typed = new Typed(".typed",{
//     strings: ["Don’t wish it were easier.","Wish you were better."],
//     typeSpeed: 50,
//     loop:true,
//     startDelay:300,
//     showCursor:false })
// 
var x = 0;
var textEffect = "Don’t wish it were easier. Wish you were better.";
var container = document.getElementById('typing-effect');

function animate() {
  if (x < textEffect.length) {
    container.innerHTML += textEffect.charAt(x);
    x++;
    setTimeout(animate, 80);

  }
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

