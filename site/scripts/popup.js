$(function(){
var slider1 = document.getElementById("slider1");
var party = document.getElementById("partyval");
var slider2 = document.getElementById("slider2");
var chill = document.getElementById("chillval");
var slider3 = document.getElementById("slider3");
var study = document.getElementById("studyval");
var slider4 = document.getElementById("slider4");
var fresh = document.getElementById("freshval");
party.innerHTML = slider1.value;
chill.innerHTML = slider2.value;
study.innerHTML = slider3.value;
fresh.innerHTML = slider4.value;

slider1.oninput = function() {
  party.innerHTML = this.value;
}
slider2.oninput = function() {
    chill.innerHTML = this.value;
  }
slider3.oninput = function() {
    study.innerHTML = this.value;
  }
slider4.oninput = function() {
      fresh.innerHTML = this.value;
    }
    $('#savesongval').click(function(){
      console.log(fresh.innerHTML);
    });  

});
