const btn = document.querySelector('#btn-mobile');
const menu = document.querySelector('#menuMobile');

btn.addEventListener('click', ()=>{
  menu.classList.toggle('hidden');
})
/*Animação sections e cards*/

const elements = document.querySelectorAll(".efeito");
const observer =  new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

elements.forEach(el => observer.observe(el));

/*Cardapio*/
const cardapio = [
  {
    nome: 'Pizza',
    descricao: 'Molho de tomate, queijo e calabresa',
    preco: 'R$ 45,00',
    imagem: './img/salgados.jpg'
  },
   {
    nome: 'Doces',
    descricao: 'Chocolate branco, mel e baunilha',
    preco: 'R$ 45,00',
    imagem: './img/doces.jpg'
  },
   {
    nome: 'Mocca',
    descricao: 'Café, leite e creme',
    preco: 'R$ 45,00',
    imagem: './img/caffes.jpg'
  },
   {
    nome: 'Pizza',
    descricao: 'Molho de tomate, queijo e calabresa',
    preco: 'R$ 45,00',
    imagem: './img/salgados.jpg'
  },
  {
    nome: 'Doces',
    descricao: 'Chocolate branco, mel e baunilha',
    preco: 'R$ 45,00',
    imagem: './img/doces.jpg'
  },
  {
    nome: 'Mocca',
    descricao: 'Café, leite e creme',
    preco: 'R$ 45,00',
    imagem: './img/caffes.jpg'
  },
]

const cardContainer = document.querySelector('.container-cardap')

cardapio.forEach(item =>{
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <img src="${item.imagem}" alt="${item.nome}">
    <h3> ${item.nome} </h3>
    <p> ${item.descricao} </p>
    <p class="price"> ${item.preco} </p>
  `;

  cardContainer.appendChild(card);
})




/*Validar form*/
const form = document.querySelector(".form");

form.addEventListener("submit", function (e){
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const email = document.getElementById('email').value.trim();
  const erro = document.querySelector('.error');
  const errorEmail = document.querySelector('.errorEmail');

  if(nome === ''|| telefone === '' || email === ''){
    erro.innerText = 'Por favor, preencha todos os campos.'
  }
  else if (!email.includes('@') || !email.includes('.')){
    errorEmail.innerText = 'Digite um email válido.'
  }
  else {
    erro.innerText = 'Mensagem enviada.'
    form.reset();

  }
})


