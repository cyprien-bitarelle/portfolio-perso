//Fonction d'écriture et d'effacement du span.
async function init() {
  const text = document.querySelector("#type-text");
  //Permet d'attendre 5s avant la première itération.
  await sleep(5000);
  //Boucle infinie.
  while (true) {
    await text.delete("CYPRIEN");
    await sleep(2000);
    await text.type("CYPRIEN");
    await sleep(2000);
  }
}

class TypeAsync extends HTMLSpanElement {
  //
  get typeInterval() {
    const randomMs = 200 * Math.random();
    return randomMs < 100 ? 200 : randomMs;
  }

  async type(text) {
    for (let character of text) {
      this.innerText += character;
      await sleep(this.typeInterval);
    }
  }

  async delete(text) {
    for (let character of text) {
      this.innerText = this.innerText.slice(0, this.innerText.length - 1);
      await sleep(this.typeInterval);
    }
  }
}

customElements.define("type-async", TypeAsync, { extends: "span" });

init();
