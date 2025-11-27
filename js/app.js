// Arquivo JS inicial: js/app.js
// Observação: para conectar ao Supabase, crie um arquivo separado com as chaves (não comite chaves secretas).
// Exemplo (não comite direto): const SUPABASE_URL = 'https://...'; const SUPABASE_ANON_KEY = '...';

document.addEventListener('DOMContentLoaded', () => {
  const btnLogin = document.getElementById('btn-login');
  const authSection = document.getElementById('auth');
  const servicesList = document.getElementById('services-list');
  const btnSignin = document.getElementById('btn-signin');
  const btnSignup = document.getElementById('btn-signup');

  btnLogin.addEventListener('click', () => {
    authSection.hidden = !authSection.hidden;
    authSection.scrollIntoView({behavior:'smooth'});
  });

  // Handlers de exemplo (substituir por chamadas ao backend/Supabase)
  btnSignup.addEventListener('click', async () => {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    if (!email || !password) return alert('Preencha email e senha');
    // TODO: integrar com Supabase auth.signUp({email,password})
    alert(`Cadastro simulado para ${email}`);
  });

  btnSignin.addEventListener('click', async () => {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    if (!email || !password) return alert('Preencha email e senha');
    // TODO: integrar com Supabase auth.signIn({email,password})
    alert(`Login simulado para ${email}`);
  });

  // Carregamento de serviços de exemplo (substituir por fetch do banco)
  const sampleServices = [
    {id:1,title:'Eletricista - Instalação',desc:'Instalação e reparos elétricos básicos',price:'R$80'},
    {id:2,title:'Encanador - Vazamento',desc:'Conserto de vazamentos e manutenção',price:'R$120'},
    {id:3,title:'Jardineiro - Manutenção',desc:'Poda e limpeza de jardins',price:'R$60'}
  ];

  function renderServices(list){
    servicesList.innerHTML = '';
    list.forEach(s => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${s.title}</strong><div>${s.desc}</div><small>${s.price}</small>`;
      servicesList.appendChild(li);
    });
  }

  renderServices(sampleServices);
});