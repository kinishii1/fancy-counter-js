const titulo = document.querySelector('h1');
const contador = document.querySelector('.counter');
const botaoReset = document.querySelector('.counter__reset-button');
const botaoSubtrair = document.querySelector('.minus');
const botaoAdicionar = document.querySelector('.plus');

botaoAdicionar.addEventListener('click', () => {
  try {
    titulo.innerText = 'Fancy counter'
    const curVal = contador.innerText
    const newVal = +curVal + 1
    if (curVal >= 5) throw new Error('Numero limite de 5')
    contador.innerText = newVal
  } catch (error) {
    titulo.innerText = error.message
  }
})

botaoSubtrair.addEventListener('click', () => {

  titulo.innerText = 'Fancy counter'
  const curVal = contador.innerText
  const newVal = +curVal - 1
  if (curVal == 0) return
  contador.innerText = newVal

})

botaoReset.addEventListener('click', () => {
  titulo.innerText = 'Fancy counter';
  contador.innerText = 1

})


