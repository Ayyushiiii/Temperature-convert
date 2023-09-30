console.log("hello")
const celsius = document.querySelector("#celsius")
const degree = document.querySelector("#degree")
const convertBtn = document.querySelector("#convert")
const tempType = document.querySelector("#tempType")
const time = document.querySelector("#time")


window .addEventListener("load",()=>{
    degree.value="";
    celsius.innerHTML ="";
})

convertBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    convertToCelsius()

   
    convertBtn.innerHTML= '<span><i class="fa fa-spinner fa-spin"></i> CONVERTING...</span>'
    setTimeout(()=>{
        convertBtn.innerHTML= '<span>CONVERT<span>'
    },1000)
})

function convertToCelsius(){
    let inputVal = degree.value;

     setTimeout(()=>{
        if(tempType.value == "fahrenheit"){
            const fahToCel = (inputVal-32)*5/9;
            celsius.innerHTML = `${fahToCel.toFixed(3)} &deg C`
        }
        else if(tempType.value == "kelvin"){
            const kelToCel = inputVal-273.15;
            celsius.innerHTML = `${kelToCel.toFixed(3)} &deg C`
        }
    }, 1000)
}


    