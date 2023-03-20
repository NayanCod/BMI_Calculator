console.log("Hello world")
// bmi = weight/(height*height)


check.addEventListener('click',()=>{
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const check = document.getElementById('check');
    const feedback = document.getElementById('feedback-main');
    const finalBmi = document.getElementById('bmi-value');
    let bmi = (weight*10000)/(height*height);
    finalBmi.innerText = bmi.toFixed(2);
    if(finalBmi.innerText < 18.5){
        feedback.innerText = "Underweight";
        finalBmi.style.border = "5px solid #caff00";
        feedback.style.color = "#caff00";
        finalBmi.style.color = "#caff00";
    }
    else if(finalBmi.innerText >= 18.5 && finalBmi.innerText < 24.9){
        feedback.innerText = "Healthy";
        finalBmi.style.border = "5px solid lime";
        feedback.style.color = "lime";
        finalBmi.style.color = "lime";
    }
    else if(finalBmi.innerText >= 25.0 && finalBmi.innerText < 29.9){
        feedback.innerText = "Overweight";
        finalBmi.style.border = "5px solid #e20404e6";
        feedback.style.color = "#e20404e6";
        finalBmi.style.color = "#e20404e6";
    }
    else if(finalBmi.innerText >= 30.0 ){
        feedback.innerText = "Obense";
        finalBmi.style.border = "5px solid #92d1ff";
        feedback.style.color = "#92d1ff";
        finalBmi.style.color = "#92d1ff";
    }
    console.log(finalBmi.innerText);
})

