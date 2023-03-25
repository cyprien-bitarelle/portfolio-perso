let array_extrait = [
  "./assets/extrait-code-1.png",
  "./assets/extrait-code-2.png",
  "./assets/extrait-code-3.png",
];
let extrait = document.getElementById("extrait-code");
// console.log(array_extrait);
const getRandomExtrait = async () => {
  for (let index = 0; index < array_extrait.length; index++) {
    let image = array_extrait[index];
    extrait.setAttribute("src", image);
    await sleep(5000);

    if (index == 2) {
      index = -1;
    }
  }
};

getRandomExtrait();
