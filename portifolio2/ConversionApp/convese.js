 userInput=document.getElementById("value");

const degreesBtn=document.querySelector(".degrees");
const kelvinBtn=document.querySelector(".kelvin");
const outputDiv=document.querySelector(".output");
const degreeKelvin=273;

const paragraph1=document.createElement("p");
outputDiv.appendChild(paragraph1);

const paragraph=document.createElement("p");
paragraph.textContent="The result is:";
const span=document.createElement("span");



degreesBtn.addEventListener("click",() => {
  const result=   userInput.value-degreeKelvin;
  paragraph1.textContent="Converting from Kelvin to Degrees";
    outputDiv.appendChild(paragraph);
    span.textContent=result;
    paragraph.appendChild(span);

    if (userInput.value===""){
         
    }

})

kelvinBtn.addEventListener("click",() => {
   const result= +userInput.value+degreeKelvin;
   paragraph1.textContent="Converting from Degrees to Kelvin";
   outputDiv.appendChild(paragraph);
   
   span.textContent=result;
   paragraph.appendChild(span)

   if (userInput.value===""){
      
  }
})

