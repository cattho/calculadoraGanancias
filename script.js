const FORM = document.getElementById("formulario");
const RESULT = document.getElementById("resultado");

FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  let initialPercentage = document.getElementById("porcentaje").value;
  let productValue = document.getElementById("valorproducto").value;
  handleGanancia(initialPercentage, productValue);
});

//funcion de la calculadora
const handleGanancia = (percetange, value) => {
  initialPercentage = Number(percetange);
  productValue = Number(value);

  const FIRSTSTEP = 100 - initialPercentage;

  let partialProductValue = (productValue * FIRSTSTEP) / 100;
  let finalProductValue = productValue + partialProductValue;

  if (initialPercentage === 0 || finalProductValue === 0) {
    RESULT.innerHTML = "Introduce los valores correspondientes.";
  } else {
    RESULT.innerHTML = `$ ${finalProductValue}`;
  }
};
