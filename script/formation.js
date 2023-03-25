//Recupération des années et de l'encart description pour pouvoir changer l'encart à chaque changement d'années.
let years = [...document.querySelectorAll(".annees")];
let description = document.getElementById("description_mission");

//Création d'un tableau de description de chaque année.
let descriptions = {
  annee2015: `<h3>Université Montpellier 2</h3>
    <p>Septembre 2015 - Juin 2016</p>
    <p>Licence 1 pluri-sciences </p>
    <p>Algorithmie. HTML/CSS. Programmation javascript. Notion de C++. </p>`,
  annee2020: `<h3>McDonald's Arles</h3>
    <p>Mai 2020</p>
    <p>Fondamentaux du Leadership 1</p>
    <p>Responsable de formation. Responsable du personnel et de la clientèle. Gestion des plannings.</p>`,
  annee2021: `<h3>McDonald's Arles</h3>
    <p>Avril 2021</p>
    <p>Fondamentaux du Leadership 2</p>
    <p>Responsable de formation. Responsable du personnel et de la clientèle. Gestion des plannings.</p>`,
  annee2022: `<h3>CNAM - Résurgences</h3>
    <p>Mai 2021 - Août 2022</p>
    <p>Formation intégrateur / développeur web</p>
    <p>Création d'un site internet à destination des assistants. Architecture MVC. Création de la base
        de données.</p>`,
  annee2023: `<h3>Open IT Nimes - Aésio Mutuelle</h3>
      <p>Septembre 2022 - Juillet 2024</p>
      <p>BTS SIO Option SISR en alternance</p>
      <p>Technicien informatique de proximité. Gestion du parc informatique. Support auprès des utilisateurs.</p>`,
};

//L'encart description récupère par défaut la description de l'année 2023. La classe "annee-actuelle" est aussi ajouté de base sur 2023 en HTML.
description.innerHTML = descriptions.annee2023;

//La fonction boucle sur le tableau year et retire la classe qui change la couleur sur tous les boutons. Si l'id en paramètre de la fonction est égal à l'id de l'année que la boucle survole alors on y rajoute la classe de changement de couleur car cela signifie que c'est sur ce bouton que l'on vient de cliquer.
const switchCss = (id) => {
  years.forEach((year) => {
    year.classList.remove("annee-actuelle");
    if (year.id === id) {
      year.classList.add("annee-actuelle");
    }
  });
};

//On récupère l'id de la case cliquée. En fonction de cet id on associe la valeur du tableau descriptions correspondante. InnerHTML permet d'envoyer au DOM le HTML associé dans le tableau descriptions.
const switchYear = (e) => {
  let idYear = e.target.id;
  switch (idYear) {
    case "2023":
      description.innerHTML = descriptions.annee2023;
      break;
    case "2022":
      description.innerHTML = descriptions.annee2022;
      break;
    case "2021":
      description.innerHTML = descriptions.annee2021;
      break;
    case "2020":
      description.innerHTML = descriptions.annee2020;
      break;
    case "2015":
      description.innerHTML = descriptions.annee2015;
      break;
  }
  //On lance la fonction switchCss ensuite afin de changer le style et changé la couleur du bouton sur lequel on vient de cliquer.
  switchCss(idYear);
};

//Listener sur chaque année récupérée préalablement. Au click on lance la fonction switchYear.
years.forEach((year) => {
  year.addEventListener("click", switchYear);
});
