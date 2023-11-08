const changeColor = async () => {
   const res = await chrome.storage.local.get(["listOfClass_forDarkTheme"]);

   if (window.location.toString().indexOf("www.anilibria.tv") != -1)
      document.querySelector("html").setAttribute("data-theme", "dark");

   if (window.location.toString().indexOf("ru.wikipedia.org") != -1) {
      let tables = document.querySelector("table");
      let figurs = document.querySelectorAll("figcaption");
      if (tables[0])
         tables.forEach((table) => (table.style.backgroundColor = "#606060"));
      if (figurs[0])
         figurs.forEach((figur) => (figur.style.backgroundColor = "#606060"));
   }

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
