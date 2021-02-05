/*=========prior slider script with value=======*/

var prior_slider = document.getElementById("priorSlider");
var priorselector = document.getElementById("priorselector");
var prior_selectValue = document.getElementById("prior_selectValue");

prior_selectValue.innerHTML =  prior_slider.value + "%";
    
prior_slider.oninput =  function(){
  prior_selectValue.innerHTML = this.value + "%"; /*so the input value will be equal on selectValue which will be displayed*/
  priorselector.style.left = this.value + "%";
  } 
/*this script is for the movement of selector button*/

/*pa slider script with value*/
var pa_slider = document.getElementById("pa_slider");
var pa_selector = document.getElementById("pa_selector");
var pa_selectValue = document.getElementById("pa_selectValue");

pa_selectValue.innerHTML = pa_slider.value + "%";

pa_slider.oninput = function(){
  pa_selectValue.innerHTML = this.value + "%";
        pa_selector.style.left = this.value + "%";
  }
/*pb slider script with value*/
var pb_slider = document.getElementById("pb_slider");
var pb_selector = document.getElementById("pb_selector");
var pb_selectValue = document.getElementById("pb_selectValue");

  pb_selectValue.innerHTML = pb_slider.value + "%";

  pb_slider.oninput = function(){
    pb_selectValue.innerHTML = this.value + "%";
    pb_selector.style.left = this.value + "%";
  }

var loading = document.getElementById("loading"); 

function result(){
  loading.style.visibility = "visible";
  setTimeout(bayesFormula, 2000);

  function bayesFormula(){
    loading.remove();
    x = document.getElementById("priorSlider").value; //Prior_slider
    z = document.getElementById("pa_slider").value; //PA_slider
    y = document.getElementById("pb_slider").value; //PB_Slider
    
   document.getElementById("posterior").innerHTML =  parseInt(x*y / ((x*y)  + z * (100-x))*100) + "% Romantically Interested"; 
  }
}







