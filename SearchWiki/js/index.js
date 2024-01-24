/* Variable : */
let url = "https://en.wikipedia.org/w/api.php";
let search = document.getElementById("search");
const resultSearch = document.getElementById("resultSearch");

/* écouteur d'évenement a l'appuie d'une touche sur le clavier */
search.addEventListener("keyup", () => {
  if (search.value === "") return;
  const valueSearch = search.value;
  const params = {
    action: "opensearch",
    search: valueSearch,
    limite: "10",
    namespace: "*",
    format: "json",
  };

  url = url + "?origin=*";
  Object.keys(params).forEach(function (key) {
    url += "&" + key + "=" + params[key];
  });

  fetchApi(url);
});

/* function pour aller chercher les donnée d'api */
const fetchApi = (route) => {
  fetch(`${route}`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      let id = 0;
      let resNameArray = [];
      let resLinkArray = [];
      /* On s'electionne tous les button */
      const selectAllA = document.querySelectorAll("a");
      /* on fais une boucle pour ensuite les supprimer  */
      selectAllA.forEach((element) => element.remove());
      /* le response a 4 tab donc on prend celui avec les result
      et on fait une boucle pour que tous les donner dedans soit dans
      celui qu'on a juste au dessus */
      response[1].forEach((item) => {
        resNameArray.push(item);
      });
      /* on boucle le tableau qu'on vient de remplir pour ensuite creer
      un element lui mettre le texte et un id */
      resNameArray.forEach((res) => {
        const a = document.createElement("a");
        id++;
        a.innerHTML = res;
        a.id = id;
        resultSearch.appendChild(a);
      });
      /* je prend cette fois ci la response api avec les lien 
      et je les mets dans un tableau vierge au dessus  */
      response[3].forEach((item) => {
        resLinkArray.push(item);
      });
      /* boucle for pour inserer les lien dans les balise */
      for (i = 1; i < resLinkArray.length + 1; i++) {
        const hrefA = document.getElementById(`${i}`);
        console.log("a", hrefA);
        hrefA.href = resLinkArray[i - 1];
      }
    });
};
