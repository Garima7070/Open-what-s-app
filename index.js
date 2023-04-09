const number = document.getElementById("mobile-number");

const error_msg = document.getElementById("error-message");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  error_msg.style.display = "none";
  if (number.value.length === 10) {
    window.open(`https://wa.me/${number.value}`);
    number.value = null;
  } else {
    number.value = null;
    error_msg.style.display = "block";
  }
});
