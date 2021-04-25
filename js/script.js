setTimeout(function () {
  document.querySelector(".openinglogo").style.width = "18%";
  document.querySelector(".openinglogo").style.opacity = 0;
  setTimeout(function () {
    document.querySelector(".opening").style.opacity = 0;
    setTimeout(function () {
      document.querySelector(".opening").style.display = "none";
    }, 1000);
  }, 1000);
}, 1000);

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".uheader").style.top = "0px";
    document.querySelector(".uheader").style.height = "50px";
    document.querySelector(".uheader").style.zIndex = "15";

    document.querySelector(".lheader").style.top = "50px";
    document.querySelector(".lheader").style.height = "100px";

    document.querySelector(".menus").style.height = "100px";

    document.querySelector(".singleline").style.opacity = "0";
    setTimeout(function () {
      document.querySelector(".singleline").style.display = "none";
      document.querySelector(".doubleline").style.display = "block";
    }, 300);
    setTimeout(function () {
      document.querySelector(".doubleline").style.opacity = "1";
    }, 500);

    var links = document.querySelectorAll(".links");
    for (var i = 0; i < links.length; i++) {
      links[i].style.margin = "32px 0px 0px";
    }
  } else {
    document.querySelector(".uheader").style.top = "-51px";
    // document.querySelector(".uheader").style.height = "0px";

    document.querySelector(".lheader").style.height = "70px";
    document.querySelector(".lheader").style.top = "0px";

    document.querySelector(".lheader").style.top = "0px";

    document.querySelector(".menus").style.height = "50px";

    document.querySelector(".doubleline").style.opacity = "0";
    setTimeout(function () {
      document.querySelector(".doubleline").style.display = "none";
      document.querySelector(".singleline").style.display = "block";
    }, 300);
    setTimeout(function () {
      document.querySelector(".singleline").style.opacity = "1";
    }, 500);

    var links = document.querySelectorAll(".links");
    for (var i = 0; i < links.length; i++) {
      links[i].style.margin = "17px 0px 0px";
    }
  }
  prevScrollpos = currentScrollPos;
};

let width = window.innerWidth;
(function topButtons() {
  if (window.innerWidth <= 480) {
    // document.querySelector(
    //   ".address"
    // ).innerHTML = `<ion-icon class="hicons" name="location-outline"></ion-icon>
    // locate us`;
    document.getElementById("topBtns").innerHTML = `
    <a
                class="address"
                href="https://www.google.com/maps/place/Niraamaya+Ayurveda/@13.0205494,77.6838033,15z/data=!4m5!3m4!1s0x0:0x9ca3f712d147f090!8m2!3d13.0205494!4d77.6838033"
                target="_blank"
              >
                <ion-icon class="hicons" name="location-outline"></ion-icon>
                Locate Us
              </a>

              <a class="phone" href="tel:+919459453936">
                <ion-icon class="hicons" name="call-outline"></ion-icon>
                Call Us
              </a>
    `;
    document.getElementById("topBtns").style.textTransform = "uppercase";
    document.querySelector(".homehead").innerHTML = `
    <h1 class="brown">Give your <br> loving family an</h1>
    <h1 class="orange">Ayurvedic <br> Protection</h1>
    `;
  }
})();
