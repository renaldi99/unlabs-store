import { addClass, removeClass } from "./utils-class";

const sliders = document.getElementsByClassName("slider");

for (let index = 0; index < sliders.length; index++) {
  const slider = sliders[index];

  const items = slider.querySelectorAll(".slider .item");
  const preview = slider.querySelector("div > .preview");

  for (let index = 0; index < items.length; index++) {
    const itemTigger = items[index];

    itemTigger.addEventListener("click", function () {
      const dataImg = this.attributes["data-img"].value; //put optional chaining

      for (
        let eachItemTrigger = 0;
        eachItemTrigger < items.length;
        eachItemTrigger++
      ) {
        const triggerNeedToRemoved = items[eachItemTrigger];

        removeClass(triggerNeedToRemoved, "selected");
      }

      addClass(itemTigger, "selected");

      preview.querySelector("img").setAttribute("src", dataImg);
    });
  }
}
