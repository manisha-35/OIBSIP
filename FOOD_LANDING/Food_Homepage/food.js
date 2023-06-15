//**************************************** list-1 starts here *********************************************

const btn1 = document.querySelector("#lev7_b1");
const ans1 = document.querySelector("#lev7_div_ans1");
const svg1 = document.querySelector("#lev7_li1_svg1");
btn1.addEventListener('click',toggleDisplay_li1)

function toggleDisplay_li1() {
  if (ans1.style.display !== "none") {
    svg1.style.transform = "rotate(90deg)";
    ans1.style.display = "none";
  } 
  else {
    svg1.style.transform = "rotate(45deg)";
    ans1.style.display = "block";
  }
}


//**************************************** list-2 starts here *********************************************


const btn2 = document.querySelector("#lev7_b2");
const ans2 = document.querySelector("#lev7_div_ans2");
const svg2 = document.querySelector("#lev7_li2_svg2");
btn2.addEventListener('click',toggleDisplay_li2)

function toggleDisplay_li2() {
  if (ans2.style.display !== "none") {
    svg2.style.transform = "rotate(90deg)";
    ans2.style.display = "none";
  } 
  else {
    svg2.style.transform = "rotate(45deg)";
    ans2.style.display = "block";
  }
}


//**************************************** list-3 starts here *********************************************


const btn3 = document.querySelector("#lev7_b3");
const ans3 = document.querySelector("#lev7_div_ans3");
const svg3 = document.querySelector("#lev7_li3_svg3");
btn3.addEventListener('click',toggleDisplay_li3)

function toggleDisplay_li3() {
  if (ans3.style.display !== "none") {
    svg3.style.transform = "rotate(90deg)";
    ans3.style.display = "none";
  } 
  else {
    svg3.style.transform = "rotate(45deg)";
    ans3.style.display = "block";
  }
}


//**************************************** list-4 starts here *********************************************


const btn4 = document.querySelector("#lev7_b4");
const ans4 = document.querySelector("#lev7_div_ans4");
const svg4 = document.querySelector("#lev7_li4_svg4");
btn4.addEventListener('click',toggleDisplay_li4)

function toggleDisplay_li4() {
  if (ans4.style.display !== "none") {
    svg4.style.transform = "rotate(90deg)";
    ans4.style.display = "none";
  } 
  else {
    svg4.style.transform = "rotate(45deg)";
    ans4.style.display = "block";
  }
}

//**************************************** list-5 starts here *********************************************


const btn5 = document.querySelector("#lev7_b5");
const ans5 = document.querySelector("#lev7_div_ans5");
const svg5 = document.querySelector("#lev7_li5_svg5");
btn5.addEventListener('click',toggleDisplay_li5)

function toggleDisplay_li5() {
  if (ans5.style.display !== "none") {
    svg5.style.transform = "rotate(90deg)";
    ans5.style.display = "none";
  } 
  else {
    svg5.style.transform = "rotate(45deg)";
    ans5.style.display = "block";
  }
}


//**************************************** list-6 starts here *********************************************


const btn6 = document.querySelector("#lev7_b6");
const ans6 = document.querySelector("#lev7_div_ans6");
const svg6 = document.querySelector("#lev7_li6_svg6");
btn6.addEventListener('click',toggleDisplay_li6)

function toggleDisplay_li6() {
  if (ans6.style.display !== "none") {
    svg6.style.transform = "rotate(90deg)";
    ans6.style.display = "none";
  } 
  else {
    svg6.style.transform = "rotate(45deg)";
    ans6.style.display = "block";
  }
}

//**************************************** list-7 starts here *********************************************


const li7_input = document.querySelector("#inp_li7");
const li7_input_div = document.querySelector("#lev7_inp_div7");
li7_input.addEventListener('focus',activeInOut_li7);

function activeInOut_li7() {
  if ( li7_input_div.style.border !== "2px solid white"  && li7_input_div.style.border-radius !== "4px" ) {
    li7_input_div.style.border == "2px solid white";
    li7_input_div.style.border-radius == "5px";
  } 
  else {
    li7_input_div.style.border == "none";
    li7_input_div.style.border-radius == "none";
  }
}