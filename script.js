const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let porcentajeInicial = document.getElementById("porcentaje").value;
  let valorProducto = document.getElementById("valorproducto").value;
  handleGanancia(porcentajeInicial, valorProducto);
});

//funcion de la calculadora
const handleGanancia = (porcentaje, valor) => {
  porcentajeInicial = Number(porcentaje);
  valorProducto = Number(valor);

  const primerPaso = 100 - porcentajeInicial;

  let valorParcialProducto = (valorProducto * primerPaso) / 100;
  let valorFinalProducto = valorProducto + valorParcialProducto;

  if (porcentajeInicial === 0 || valorFinalProducto === 0) {
    resultado.innerHTML = "Introduce los valores correspondientes.";
  } else {
    resultado.innerHTML = `$ ${valorFinalProducto}`;
  }
};
