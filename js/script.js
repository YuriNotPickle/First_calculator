let screenValue = document.getElementById("value");
let nmbBtns = document.querySelectorAll(".nmb-btn");
let mathBtns = document.querySelectorAll(".math-btn");

let equalsBtn = document.getElementById("btn-equals");
let clearBtn = document.getElementById("btn-clear");
let dotBtn = document.getElementById("btn-dot");
let memory = 0;
screenValue.innerHTML = "0";

//набор цифр
  nmbBtns.forEach(function (btn) {
    // Вешаем событие клик
    btn.addEventListener("click", function () {
      if (screenValue.innerHTML == "0") {
        screenValue.innerHTML = this.innerHTML;
      } else {
        screenValue.innerHTML += this.innerHTML;
      }
    });
  });

dotBtn.addEventListener("click", function () {
   screenValue.innerHTML += this.innerHTML;
  /*if (!screenValue.innerHTML.includes(".")) {
    screenValue.innerHTML += this.innerHTML;
  }*/
});

clearBtn.addEventListener("click", function () {
  screenValue.innerHTML = "0";
});

equalsBtn.addEventListener("click", function() {
   let result = screenValue.innerHTML;
   result = eval(screenValue.innerHTML);
   screenValue.innerHTML = result;
})

