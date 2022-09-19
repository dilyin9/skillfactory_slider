document.addEventListener("DOMContentLoaded", init);
let currentIndex = 0;
let tabText = ["Rostov-on-Don, LCD admiral", "Sochi Thieves", "Rostov-on-Don Patriotic"];
let cities = ["Rostov-on-Don <br>LCD admiral", "Sochi <br>Thieves", "Rostov-on-Don <br>Patriotic"];
let squares = ["81 m2","105 m2","93 m2"];
let repair_time = ["3.5 months","4 months","3 months"];
let images = ["/images/section2_image.png", "/images/section2_image2.png","/images/section2_image3.png"];


function init() {
  let dots = document.querySelectorAll(".dot");
  initDots(images.length);
  initTabs(images.length, tabText);
  initText();
  initImage();
  initArrows();
}

function initDots(length) {
  let mainElement = document.querySelector(".pagination_list");
  for (let i =0; i < length; i++) {
    let dot = `<span class="dot${i ===0 ? " active_dot" : ""}" data-index="${i}"></span>`;
    mainElement.innerHTML += dot;
  }
  mainElement.querySelectorAll(".dot").forEach(dot => {
    dot.addEventListener('click', function() {
      changeDotSelection(this.dataset.index)
    })
  } )
}
function initTabs(length,names) {
  let mainElement = document.querySelector(".section2_menu");
  for (let i = 0; i < length; i++) {
    let sectionItem = `<li class="section2_menu_item"><a class="section2_menu_item_link ${i===0 ? "tab-selected": ""}" data-index=${i}>${names[i]}</a></li>`
    mainElement.innerHTML +=sectionItem;
  }
  mainElement.querySelectorAll(".section2_menu_item_link").forEach(tabElement => {
    tabElement.addEventListener('click', function(){
      changeTabSelection(this.dataset.index);
    })
  })
}
function initText() {
  let firstBlock = document.querySelector(".cityText");
  let secondBlock = document.querySelector(".apartmentText");
  let thirdBlock = document.querySelector(".repairTime");
  let fourthBlock = document.querySelector(".repairCost");
  let firstBlock_text = `<p class="section2_block_text">${cities[0]}</p>`
  let secondBlock_text = `<p class="section2_block_text">${squares[0]}</p>`
  let thirdBlock_text = `<p class="section2_block_text">${repair_time[0]}</p>`
  let fourthBlock_text = `<p class="section2_block_text">Upon request</p>`
  firstBlock.insertAdjacentHTML("beforeend", firstBlock_text);
  secondBlock.insertAdjacentHTML("beforeend", secondBlock_text);
  thirdBlock.insertAdjacentHTML("beforeend", thirdBlock_text);
  fourthBlock.insertAdjacentHTML("beforeend", fourthBlock_text);
}

function initImage(){
  let imageBlock = document.querySelector(".section2_image");
  imageBlock.style["background-image"] = `url("${images[0]}")`;
}
function initArrows() {
  let mainElement = document.querySelector(".section2_pagination")
  mainElement.querySelector(".left_arrow_button").addEventListener('click', () => {
    leftArrowClicked(currentIndex,images.length);
  })
  mainElement.querySelector(".right_arrow_button").addEventListener('click', () =>  {
    rightArrowClicked(currentIndex, images.length);
  })
  
}
function changeImage(index){
  let imageBlock = document.querySelector(".section2_image");
  imageBlock.style["background-image"] = `url("${images[index]}")`;
}


function changeDotSelection(index) {
  let mainElement = document.querySelector(".pagination_list");
  try {
    let selectedItem = mainElement.querySelector(".active_dot");
    if (selectedItem.dataset.index !== index) {
      mainElement.querySelector(".active_dot").classList.remove("active_dot");
      mainElement.querySelector(`[data-index='${index}']`).classList.add("active_dot");
      changeImage(index)
      changeTabSelection(index)
      changeText(index)
      currentIndex = index;
      console.log(currentIndex);
      return
    }
  }
  catch(e) {
    return e
  }
}

function changeCurrentIndex(index) {
  currentIndex = index;
}

function changeTabSelection(index) {
  let mainElement = document.querySelector(".section2_menu");
  try {
    let selectedItem = mainElement.querySelector(".tab-selected");
    if (selectedItem.dataset.index !== index) {
      mainElement.querySelector(".tab-selected").classList.remove("tab-selected");
      mainElement.querySelector(`[data-index='${index}']`).classList.add("tab-selected");
      changeImage(index);
      changeDotSelection(index)
      changeText(index)
      currentIndex = index;
      return
    }
  }
  catch(e) {
    return e
  }
}
function changeText(index) {
  let firstBlock = document.querySelector(".cityText");
  firstBlock.querySelector(".section2_block_text").innerHTML = cities[index];
  let secondBlock = document.querySelector(".apartmentText");
  secondBlock.querySelector(".section2_block_text").innerHTML = squares[index];
  let thirdBlock = document.querySelector(".repairTime");
  thirdBlock.querySelector(".section2_block_text").innerHTML = repair_time[index];
}

function leftArrowClicked(index, length) {
  if (index === 0 ) {
      changeCurrentIndex(length - 1)
      changeImage(currentIndex);
      changeDotSelection(currentIndex)
      changeText(currentIndex)
  }
  else {
    changeCurrentIndex(index -1)
    changeImage(currentIndex);
    changeDotSelection(currentIndex);
    changeText(currentIndex);
  }
  return
}
function rightArrowClicked(index,length) {
  if (index === (length-1)) {
    changeCurrentIndex(0)
    changeImage(currentIndex);
    changeDotSelection(currentIndex)
    changeText(currentIndex)
  }
  else {
    changeCurrentIndex(index + 1)
    changeImage(currentIndex);
    changeDotSelection(currentIndex)
    changeText(currentIndex)
  }
  return
}

