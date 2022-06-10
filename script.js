// document.querySelectorAll(".accordion-item").forEach((item) => {
//   item.addEventListener("click", (event) => {
//     item.classList.toggle("open");

//   });
// });

document.querySelectorAll(".accordion-button").forEach((item) => {
  item.addEventListener("click", (event) => {
    var panel = item.nextElementSibling;
    if (panel.style.maxHeight) {
      console.log(panel.style.maxHeight);
      panel.style.maxHeight = null;
    } else {
      console.log("here in else");
      let active = document.querySelectorAll(" .accordion-button.open");

      for (let j = 0; j < active.length; j++) {
        console.log(active[j].nextElementSibling);
        active[j].classList.remove("open");
        // removes the open class and sets the height of the body to 0
        active[j].nextElementSibling.style.maxHeight = null;
      }
      item.classList.toggle("open");
      panel.style.maxHeight = "50px";
    }
  });
});
