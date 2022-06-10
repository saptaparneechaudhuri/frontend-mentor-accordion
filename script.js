// document.querySelectorAll(".accordion-item").forEach((item) => {
//   item.addEventListener("click", (event) => {
//     item.classList.toggle("open");

//   });
// });

document.querySelectorAll(".accordion-button").forEach((item) => {
  item.addEventListener("click", (event) => {
    let panel = item.nextElementSibling;
    if (panel.style.maxHeight) {
      //   console.log("here in if");
      panel.style.maxHeight = null;

      item.classList.remove("open");
    } else {
      //   console.log("here in else");
      let active = document.querySelectorAll(" .accordion-button.open");
      //   console.log(active);
      for (let j = 0; j < active.length; j++) {
        active[j].classList.remove("open");

        // active[j].after.style.transform = rotate("180deg");
        // console.log("open removed");
        active[j].nextElementSibling.style.maxHeight = null;
      }
      //   if (item.classList.contains("open")) {
      //     let accBodyHeight = panel.clientHeight;
      //     accBodyHeight = "50px";
      //     panel.style.maxHeight = accBodyHeight;
      //     //   console.log(item.nextElementSibling);
      //   } else {
      //     panel.style.maxHeight = "0";
      //   }
      item.classList.toggle("open");
      panel.style.maxHeight = "50px";
    }
  });
});
