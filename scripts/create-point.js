function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]");
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json())
        .then(states => {
            for (state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        })
}

populateUFs();


function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("[name=state]")
    const ufValue = event.target.value
    const indexOfState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfState].text
    const idUF = event.target.value;
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idUF}/municipios`
    console.log(url)
    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true;
    fetch(url)
        .then(res => res.json())
        .then(bacon => {
            for (city of bacon) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }

            citySelect.disabled = false;
        })
}
document.querySelector("select[name=uf]")
    .addEventListener("change", getCities)

//itens de coleta
const itemsToCollect = document.querySelectorAll(".items-grid li");
for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem);
}

let selectedItems = []
const collectedItems = document.querySelector("input[name = items]")
function handleSelectedItem(event) {
    const itemLi = event.target;
    //Adicionar ou remover um classe js
    itemLi.classList.toggle("selected")//adiciona ou remove o elemento
    const itemId = itemLi.dataset.id;

    const alredySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId
        return itemFound;
    })

    if (alredySelected >= 0) {
        const filteredItens = selectedItems.filter(item => {
            const itemIsDiferent = item != itemId
            return itemIsDiferent;
        })

        selectedItems = filteredItens;
    } else
        selectedItems.push(itemId)

   collectedItems.value = selectedItems;
}
