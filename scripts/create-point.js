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