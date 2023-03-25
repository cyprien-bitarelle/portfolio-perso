function showMore() {
    let showMoreOrLess = document.getElementById("show-more").innerText;
    let nextP = document.createElement('p');
    nextP.textContent = ` Vous pourrez aussi trouver en plus de mes projets un récapitulatif des compétences que j'ai pu développer ainsi que la veille technologique que j'ai réalisé tout au long de mon cursus. Bonne visite !`
    nextP.id = 'suite_presentation';
    let firstP = document.getElementById('paragraphe_presentation');
    if (showMoreOrLess == "voir plus") {
        document.getElementById('show-more').innerHTML = showMoreOrLess.replace("plus", "moins");
        firstP.insertAdjacentElement("afterend", nextP);
    } else {
        document.getElementById('show-more').innerHTML = showMoreOrLess.replace("moins", "plus");
        document.getElementById("suite_presentation").remove();
    }
}