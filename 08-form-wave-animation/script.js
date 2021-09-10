const form = document.querySelector(".form");
const inputs = document.querySelectorAll("input");
const emails = document.querySelectorAll(".email");
form.addEventListener("click", function (e) {
  const input = e.target.closest("input");
  if (!input) return;
  if (input.id === "email") {
    console.log("yes", email);
    let count = 1;
    const setInt = setInterval(addUp, 20);
    function addUp() {
      document.getElementById(`email-${count}`).classList.add("up");
      console.log("hi");
      count++;
      if (count === emails.length + 1) {
        clearInterval(setInt);
      }
    }
  }
});
