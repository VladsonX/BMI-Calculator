function checkBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let BMI =  Math.round(weight / (Math.pow(height,2)));
    document.querySelector(".main__result-left").innerHTML = "";
    document.querySelector(".main__result-left").innerHTML = BMI;
    document.querySelector(".main__result-right").innerHTML = "";
    for (let i=0; i<=colorBMI.length-1; i++) {
        document.querySelector(".main__result-right").classList.remove(colorBMI[i]);
    }
    switch (true) {
        case (BMI <= 18):
            document.querySelector(".main__result-right").innerHTML = "Underweight";
            document.querySelector(".main__result-right").classList.add("underweight");
            break;
        case (BMI <= 24 && BMI > 18):
            document.querySelector(".main__result-right").innerHTML = "Healthy";
            document.querySelector(".main__result-right").classList.add("healthy");
            break;
        case (BMI <= 29 && BMI > 24):
            document.querySelector(".main__result-right").innerHTML = "Overweight";
            document.querySelector(".main__result-right").classList.add("overweight");
            break;
        case (BMI <= 39 && BMI > 29):
            document.querySelector(".main__result-right").innerHTML = "Obese";
            document.querySelector(".main__result-right").classList.add("obese");
            break;
        case (BMI > 39):
            document.querySelector(".main__result-right").innerHTML = "Extremely obese";
            document.querySelector(".main__result-right").classList.add("extremely_obese");
            break;
    }
}

let colorBMI = ["underweight", "healthy", "overweight", "obese", "extremely_obese"];

