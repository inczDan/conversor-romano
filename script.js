
const btnConverter = document.getElementById("btnConverter")

btnConverter.addEventListener("click", function() {
  const romano = document.getElementById("inputRomano").value
  const valorArabico = conversaoRomana(romano)
  document.getElementById("resultado").textContent = valorArabico
})

const inputRomano = document.getElementById("inputRomano")

inputRomano.addEventListener("input", function() {
  let valor = inputRomano.value;
  valor = valor.replace(/[^a-zA-Z]/g, '')
  inputRomano.value = valor.toUpperCase()
})



function conversaoRomana(romano) {
  const valores = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let arabico = 0;

  for (let i = 0; i < romano.length; i++) {
    const atual = valores[romano[i]]
    const proximo = valores[romano[i + 1]]

    if (proximo && atual < proximo) {
      arabico -= atual;
    } else {
      arabico += atual;
    }
  }

  return arabico;
}

