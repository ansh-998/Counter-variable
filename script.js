let count = 0;

const countElement = document.getElementById("count");
const errorElement = document.getElementById("error");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const clearBtn = document.getElementById("clear");

clearBtn.style.display = "none";

incrementBtn.addEventListener("click", function () {
  count++;
  countElement.innerText = count;
  errorElement.innerText = "";

  if (count > 0) {
    clearBtn.style.display = "inline-block";
  }
});

decrementBtn.addEventListener("click", function () {

  if (count === 0) {
    errorElement.innerText = "Error : Cannot go below 0";
    return;
  }

  count--;
  countElement.innerText = count;
  errorElement.innerText = "";

  if (count === 0) {
    clearBtn.style.display = "none";
  }
});

clearBtn.addEventListener("click", function () {
  count = 0;
  countElement.innerText = count;
  clearBtn.style.display = "none";
  errorElement.innerText = "";
});