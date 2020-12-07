const humb=document.querySelector(".hurmbuger")
const navLinks=document.querySelector("nav");

userInput=document.getElementById("value");

const kiloBtn=document.querySelector(".kilograms");
const poundBtn=document.querySelector(".pounds");
const outputDiv=document.querySelector(".output");
const kiloPound=2.2046;

const paragraph1=document.createElement("p");
outputDiv.appendChild(paragraph1);

const paragraph=document.createElement("p");
paragraph.textContent="The result is:";
const span=document.createElement("span");

humb.addEventListener("click",() => {
    navLinks.classList.toggle("nav_links_open")
})

kiloBtn.addEventListener("click",() => {
  const result=   userInput.value/kiloPound;
  paragraph1.textContent="Converting from Pounds to Kilograms";
    outputDiv.appendChild(paragraph);
    span.textContent=result;
    paragraph.appendChild(span);

})

poundBtn.addEventListener("click",() => {
   const result= +userInput.value*kiloPound;
   paragraph1.textContent="Converting from kilograms to Pounds";
   outputDiv.appendChild(paragraph);
   
   span.textContent=result;
   paragraph.appendChild(span)
})

