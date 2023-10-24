const changeColor = async () => {
   const res = await chrome.storage.local.get(["listOfClass_forDarkTheme"]);

   if (window.location.toString().indexOf("www.anilibria.tv") != -1)
      document.querySelector("html").setAttribute("data-theme", "dark");

   window.location.toString();

   for (let link in res.listOfClass_forDarkTheme) {
      if (!link) return;

      if (window.location.toString().split("/")[2] == link)
         for (let className in res.listOfClass_forDarkTheme[link]) {
            const element = document.querySelectorAll("." + className);

            if (element[0]) {
               for (item of element) {
                  let color = res.listOfClass_forDarkTheme[link][className];
                  item.style.backgroundColor = color;
                  item.style.color = "white";
               }
            }
         }
   }
};

document.addEventListener("click", changeColor);
