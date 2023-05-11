/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let isItMetric = true;
let classConvertHeading = document.querySelector(".convert-heading");
let classConvertText = document.querySelector(".convert-text");
let classBtnConvert = document.querySelector(".btn-convert");
let classBtnChange = document.querySelector(".btn-change");
let classLengthCaption = document.querySelector(".length-caption");
let classLengthText = document.querySelector(".length-text");
let classVolumeCaption = document.querySelector(".volume-caption");
let classVolumeText = document.querySelector(".volume-text");
let classMassCaption = document.querySelector(".mass-caption");
let classMassText = document.querySelector(".mass-text");

classBtnChange.addEventListener("click", function(){
    classConvertText.value = "";
    classLengthText.textContent = "";
    classVolumeText.textContent = "";
    classMassText.textContent = "";
    classConvertText.style.border = "2px solid #ffffff";
    if (isItMetric){
        classBtnChange.textContent = "Metric";
        isItMetric = false
        classConvertHeading.textContent = "Imperial/Metric Unit Conversion";
        classLengthCaption.textContent = "Length (Feet/Meter)";
        classVolumeCaption.textContent = "Volume (Gallons/Liters)";
        classMassCaption.textContent = "Mass (Pounds/Kilograms)";
    }
    else{
        classBtnChange.textContent = "Imperial";
        isItMetric = true;
        classConvertHeading.textContent = "Metric/Imperial Unit Conversion";
        classLengthCaption.textContent = "Length (Meter/Feet)";
        classVolumeCaption.textContent = "Volume (Liters/Gallons)";
        classMassCaption.textContent = "Mass (Kilograms/Pounds)";
    }
})

classBtnConvert.addEventListener("click", function(){
    let numValue = parseInt(classConvertText.value)
    if (classConvertText.value==="" || isNaN(numValue)){
        classConvertText.style.border = "4px solid red";
        return
    } 
    else{
        classConvertText.style.border = "2px solid #ffffff";
    }
    if (isItMetric){
        classLengthText.textContent = `${numValue} meters = ${(numValue * 3.281).toFixed(3)} feet`;
        classVolumeText.textContent = `${numValue} liters = ${(numValue * 0.264).toFixed(3)} gallons`;
        classMassText.textContent =  `${numValue} kilograms = ${(numValue * 2.204).toFixed(3)} pounds`;
    } else{
        classLengthText.textContent = `${numValue} feet = ${(numValue * 0.3048).toFixed(3)} meters`;
        classVolumeText.textContent = `${numValue} gallons = ${(numValue * 3.78541178).toFixed(3)} liters`;
        classMassText.textContent =  `${numValue} pounds = ${(numValue * 0.45359237).toFixed(3)} kilograms`;
    
    }
})