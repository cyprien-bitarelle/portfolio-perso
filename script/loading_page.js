//Fonction sleep qui permet d'attendre en fonction du time donné.
const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

//On attends 2 secondes de plus après le chargement pour lancer la fonction resolution qui permet de retirer la roue de chargement.
const afficherPage = async () => {
  await sleep(2000);
  resolution();
};

//Fonction resolution qui retire la roue.
const resolution = async () => {
  //On récupère ici l'élement qui s'affiche lorsque la page charge.
  let loading = document.getElementById("loading");
  //On retire l'opacité de l'élément. Il y a une propriété transition en css qui permet que l'élément se retire en faisant un fondu plutot qu'il disparaisse d'un coup.
  loading.style.opacity = "0";
  //On attend 2 secondes car sinon le changement de style plus bas est appliqué directement.
  await sleep(2000);
  //On retire totalement l'affichage de l'élément de chargement. Si on omet la ligne du haut, le fondu voulu avec opacity ne se fait pas car le code est executé trop rapidement.
  loading.style.display = "none";
};

//Listener qui attend que la fenetre soit chargé pour afficher la page.
window.addEventListener("load", afficherPage());
