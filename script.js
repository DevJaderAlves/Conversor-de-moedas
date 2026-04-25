
const btn = document.querySelector(".main-button");
const moedaOrigem = document.querySelector("#moeda-origem");
const moedaDestino = document.querySelector("#moeda-destino");
const valorInput = document.querySelector("#valor");
const containerResultado = document.querySelector("#container-resultado");

const moedas = {
    BRL: {
        nome: "Real",
        simbolo: "R$",
        bandeira: "./assets/brasil.png"
    },
    USD: {
        nome: "Dólar Americano",
        simbolo: "US$",
        bandeira: "./assets/usa.png"
    },
    EUR: {
        nome: "Euro",
        simbolo: "€",
        bandeira: "./assets/euro.png"
    }
};

// Exemplo de taxas fixas só para teste
const taxas = {
    "BRL-USD": 0.20,
    "USD-BRL": 5.00,
    "BRL-EUR": 0.18,
    "EUR-BRL": 5.50,
    "USD-EUR": 0.90,
    "EUR-USD": 1.10
};

btn.addEventListener("click", () => {
    const origem = moedaOrigem.value;
    const destino = moedaDestino.value;
    const valor = parseFloat(valorInput.value);

    if (!origem || !destino || isNaN(valor)) {
        containerResultado.innerHTML = `
      <p class="erro">Preencha todos os campos corretamente!</p>
    `;
        return;
    }

    if (origem === destino) {
        containerResultado.innerHTML = `
      <p class="erro">Escolha moedas diferentes para converter.</p>
    `;
        return;
    }

    const chave = `${origem}-${destino}`;
    const taxa = taxas[chave];
    const convertido = valor * taxa;

    const moedaDe = moedas[origem];
    const moedaPara = moedas[destino];

    containerResultado.innerHTML = `
    <div class="band-header">
      <img class="img-band" src="${moedaDe.bandeira}" alt="${moedaDe.nome}">
      <p>${moedaDe.nome}</p>

      <img class="vector" src="./assets/arrow.png" alt="seta">

      <img class="img-band" src="${moedaPara.bandeira}" alt="${moedaPara.nome}">
      <p>${moedaPara.nome}</p>

      <strong class="valor-convertido">
        ${moedaPara.simbolo} ${convertido.toFixed(2)}
      </strong>
    </div>
  `;
});


