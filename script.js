document.addEventListener("DOMContentLoaded", init);

function init() {
  let cities = ["Rostov-on-Don <br>LCD admiral", "Sochi <br>Thieves", "Rostov-on-Don <br>Patriotic"];
  let squares = ["81 m2","105 m2","93 m2"];
  let repair_time = ["3.5 months","4 months","3 months"];
  let images = ["/images/section2_image.png", "/images/section2_image2.png","/images/section2_image3.png"];
  let dots = document.querySelectorAll(".dot");
  
}

function initDots(length) {
  let mainElement = document.querySelector(".pagination_list");
  for (let i =0; i < length; i++) {
    let dot = `<span class="dot ${i ===0 ? "active_dot" : ""}" data-index="${i}"></span>`;
    mainElement.innerHTML += dot;
  }
  mainElement.querySelectorAll(".dot").forEach(dot => {
    dot.addEventListener('click', () => {
      changeSelection(this.dataset.index)
    })
  } )
}