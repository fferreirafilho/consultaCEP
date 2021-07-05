const btn = document.querySelector(".btn");
let inputCep;
btn.addEventListener("click", pesquisar);

function pesquisar(event) {
  event.preventDefault();
  limparDados();
  inputCep = document.querySelector("#cep1");
  if (
    (!inputCep.value == "" || !inputCep.value == null) &&
    !isNaN(inputCep.value)
  ) {
    let cep = fetch(`https://viacep.com.br/ws/${inputCep.value}/json`);
    cep
      .then((response) => response.json())
      .then((response) => {
        mostrarDados(response);
      })
      .catch(() => {
        alert("Favor informar um cep Valido");
      });
  }
}

function mostrarDados(response) {
  response = JSON.stringify(response);
  if (response.lastIndexOf("erro") !== -1) {
    document.querySelector("#cep2").value = "-";
    document.querySelector("#logradouro").value = "-";
    document.querySelector("#complemento").value = "-";
    document.querySelector("#bairro").value = "-";
    document.querySelector("#localidade").value = "-";
    document.querySelector("#uf").value = "-";
  } else {

    response = JSON.parse(response);
    document.querySelector("#cep2").value = response.cep;
    document.querySelector("#logradouro").value = response.logradouro;
    document.querySelector("#complemento").value = response.complemento;
    document.querySelector("#bairro").value = response.bairro;
    document.querySelector("#localidade").value = response.localidade;
    document.querySelector("#uf").value = response.uf;
  }
}

function limparDados() {
  document.querySelector("#cep2").value = "";
  document.querySelector("#logradouro").value = "";
  document.querySelector("#complemento").value = "";
  document.querySelector("#bairro").value = "";
  document.querySelector("#localidade").value = "";
  document.querySelector("#uf").value = "";
}