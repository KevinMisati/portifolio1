userInput=document.getElementById("value");

const degreesBtn=document.querySelector(".degrees");
const radiansBtn=document.querySelector(".radians");
const outputDiv=document.querySelector(".output");
const degreeRadians=22/(7*180);

const paragraph1=document.createElement("p");
outputDiv.appendChild(paragraph1);

const paragraph=document.createElement("p");
paragraph.textContent="The result is:";
const span=document.createElement("span");



degreesBtn.addEventListener("click",() => {
  const result=   userInput.value/degreeRadians;
  paragraph1.textContent="Converting from radians to Degrees";
    outputDiv.appendChild(paragraph);
    span.textContent=result;
    paragraph.appendChild(span);

})

radiansBtn.addEventListener("click",() => {
   const result= +userInput.value*degreeRadians;
   paragraph1.textContent="Converting from Degrees to radians";
   outputDiv.appendChild(paragraph);
   
   span.textContent=result;
   paragraph.appendChild(span)
})

