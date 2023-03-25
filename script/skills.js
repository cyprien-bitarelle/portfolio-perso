//Au bout de combien de pixel on débute lance la fonction. Je le mets à 200 pour pas quelle se lance aux premiers scroll de l'utilisateur.
const scrollOffset = 200;
//On récupère l'id compétences pour pouvoir afficher par rapport à lui.
const sectionCompetence = document.querySelector("#competences");

//Fonction qui permet de vérifier si l'element est en vue de l'utilisateur.
const elementEnVue = (el, offset) => {
  //Rècupère la distance entre le haut de la fenetre et le haut de ma section compétences.
  const elementTop = el.getBoundingClientRect().top;
  //Rècupère la distance entre le haut de la fenetre et le bas de ma section compétences.
  const elementBot = el.getBoundingClientRect().bottom;
  //On vérifie que elementTop <= à la hauteur de la fenetre. Si c'est le cas cela veut dire que l'élement se trouve actuellement affiché sur la fenetre. On vérifie aussi que le bas de la section est toujours affiché.
  return (
    elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) - offset &&
    elementBot >= 0
  );
};

//Fonction qui genère l'animation des barres de compétences.
const animationCompetences = () => {
  //On récupère les pourcentages affichés sur l'écran dans un tableau.
  let pourcentages = [...document.querySelectorAll(".pourcentage")];
  //On récupère les barres de compétences qui vont se remplir au fur et à mesure dans un tableau.
  let containers = [...document.querySelectorAll(".progress")];

  //On crée une boucle de la taille du nombre de compétences et on vérifie pour chaque tour de boucle la valeur qu'il y a dans le tableau pourcentages à cet indice.
  for (let index = 0; index < containers.length; index++) {
    //Selon les valeurs de pourcentages on ajoute une classe à la barre qui correspond.
    switch (pourcentages[index].innerHTML) {
      case "60%":
        containers[index].classList.add("scaled60");
        break;
      case "50%":
        containers[index].classList.add("scaled50");
        break;
      case "75%":
        containers[index].classList.add("scaled75");
        break;
    }
  }
};

//Fonction qui genère l'animation des skills.
const animationSoftSkills = async () => {
  //On récupère les skills dans un tableau.
  let skills = [...document.querySelectorAll(".soft-skills")];
  //On crée une boucle de la taille des skills.
  for (let index = 0; index < skills.length; index++) {
    //A chaque tour de boucle on ajoute la classe translated à l'indice actuel.
    skills[index].classList.add("translated");
    //sleep est une fonction créée dans le fichier loading_page.js et qui permet d'attendre le temps qu'elle prend en paramètre à chaque tour de boucle. Cela permet ici que tout les skills ne s'affichent pas en meme temps.
    await sleep(500);
  }
};

//Fonction qui retire les skills.
const removeSoftSkills = () => {
  //On récupère les skills dans un tableau.
  let skills = [...document.querySelectorAll(".soft-skills")];
  //On crée une boucle de la taille des skills.
  for (let index = 0; index < skills.length; index++) {
    //On retire la classe translated à chaque skills.
    skills[index].classList.remove("translated");
  }
};

//Fonction qui appelle la fonction qui génère l'animation en fonction de la réponse que renvoie la fonction qui permet de vérifier si l'element est en vue.
const animationScroll = () => {
  if (elementEnVue(sectionCompetence, scrollOffset)) {
    animationCompetences();
    animationSoftSkills();
  } else {
    removeSoftSkills();
  }
};

//Fonction qui permet d'éviter de lancer animationScroll trop souvent si l'utilisateur scroll beaucoup. Cela permet de soulager le DOM.
let throttleTimer = false;
const throttle = (callback, time) => {
  //don't run the function while throttle timer is true
  if (throttleTimer) return;
  //On regle la variable à true pour que la fonction ne se lance pas.
  throttleTimer = true;
  setTimeout(() => {
    //Appelle la fonction callback, ici animationScroll et on regle throttleTimer à false après le temps indiqué dans la fonction throttle.
    callback();
    throttleTimer = false;
  }, time);
};

window.addEventListener("scroll", () => {
  throttle(animationScroll, 250);
});

//On récupère toutes les bulles dans un tableau.
let bulles = [...document.querySelectorAll(".bulle")];

//On ajoute la class "scale-bulle" qui fait grandir la bulle.
const animationBulles = (bulle) => {
  bulle.classList.add("scale-bulle");
};

//On retire la class "scale-bulle" qui fait grandir la bulle.
const removeAnimationBulles = (bulle) => {
  bulle.classList.remove("scale-bulle");
};

//On ajoute des eventListener pour chaque bulle du tableau.
bulles.forEach((element) => {
  //A chaque fois qu'une souris est dessus on lance la fonction animationBulles.
  element.addEventListener("mouseover", () => {
    animationBulles(element);
  });
  //A chaque fois que la souris se retire on lance la fonction removeAnimationsBulles.
  element.addEventListener("mouseout", () => {
    removeAnimationBulles(element);
  });
});
