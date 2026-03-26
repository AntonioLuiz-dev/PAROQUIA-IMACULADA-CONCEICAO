/* ============================================================
   DADOS PADRÃO
   ============================================================ */

const DEFAULT_DATA = {
  social: { instagram:'https://www.instagram.com/imaculada_raiz?igsh=ZzJ5MDg2OW52eTBy', whatsapp:'https://wa.me/5521985635966?text=', facebook:'https://www.facebook.com/share/1FqEDycX3X/?mibextid=wwXIfr', youtube:'https://youtube.com/@nocoracaodaimaculada?si=o8SxC02dvp9MG6KN' },
  paroquia: {
    cidade: 'Raiz da Serra/ Inhomirim – MAGÉ – RJ, CEP: 25935-000',
    endereco: 'Estr. Automóvel Clube, Km 63',
    secretaria: 'Secretaria Paroquial: Igreja Santa Catarina - Rua Rogério Portella, 78, Fragoso – Magé – RJ, CEP: 25.935.192'
  },
  bispo: {
    name: 'Dom Joel Portella Amado',
    role: 'Bispo Diocesano de Petrópolis',
    img: './assets/D. JOEL PORTELLA AMADO.jpg',
    bio: 'Dom Joel Portella Amado é o Bispo Diocesano de Petrópolis. Conduz a Diocese com dedicação à evangelização, à pastoral social e ao cuidado com as comunidades de toda a região serrana do Rio de Janeiro. A Paróquia Imaculada Conceição de Raiz da Serra integra a Diocese sob sua liderança.'
  },
  comunidades: [
    {
      name: 'Comunidade Sagrado Coração de Jesus',
      sub: 'Rua Procópio da Matta, 200 – Vila Serrana – Fragoso',
      img: './assets/IGREJA SAGRADO CORAÇÃO DE JESUS.png',
      historia: 'A Comunidade Sagrado Coração de Jesus...',
      missas: [{ dia:'Sexta-feira', hora:'19h' }, { dia:'Domingo', hora:'9h' }]
    },
    {
      name: 'Comunidade Sant\u2019Ana',
      sub: 'Praça Montese, 11 – Pau Grande',
      img: './assets/IGREJA SANTANA.png',
      historia: 'A Comunidade Santana...',
      missas: [{ dia:'Quinta-feira', hora:'7h' }, { dia:'Domingo', hora:'7h' }]
    },
    {
      name: 'Comunidade Santa Catarina de Alexandria e São José Operário',
      sub: 'Rua Rogério Portela, 78 – Fragoso',
      img: './assets/IGREJA DE SANTA CATARINA E SAO JOSE OPERARIO.png',
      historia: 'A Comunidade Santa Catarina de Alexandria e São José Operário...',
      missas: [{ dia:'Seg a Sex', hora:'7h' }, { dia:'Domingo', hora:'7h e 19h' }]
    },
    {
      name: 'Comunidade Nossa Senhora de Fátima',
      sub: 'Rua Waldemar Lima Teixeira, lt 34, Qd. 58 – Limeira',
      img: './assets/IGREJA NOSSA SENHORA DE FATIMA.png',
      historia: 'A Comunidade Nossa Senhora de Fatima...',
      missas: [{ dia:'Domingo', hora:'11h' }]
    },
    {
      name: 'Comunidade São Jerônimo',
      sub: 'Rua A, Lt 22, Qdra 18, Loteamento Paraguai – Fragoso',
      img: './assets/IGREJA SÃO JERONIMO.png',
      historia: 'A Comunidade São Jeronimo...',
      missas: [{ dia:'Domingo', hora:'9h' }]
    },
    {
      name: 'Comunidade São Jorge',
      sub: 'Rua 21, lotes 21 e 22 – Fragoso',
      img: './assets/IGREJA SAO JORGE.png',
      historia: 'A Comunidade São Jorge...',
      missas: [{ dia:'Sábado', hora:'18h' }]
    },
    {
      name: 'Comunidade São Sebastião - Meio da Serra',
      sub: 'Estr. Velha de Petrópolis, s/n° – Meio da Serra',
      img: './assets/IGREJA SAO SEBATIAO MEIO DA SERRA.png',
      historia: 'A Comunidade São Sebastião do Meio da Serra...',
      missas: [{ dia:'Domingo', hora:'9h' }]
    },
    {
      name: 'Comunidade São Sebastião - Rua J',
      sub: 'Rua J, 584 – Fragoso',
      img: './assets/IGREJA SAO SEBATIAO RUA J.png',
      historia: 'A Comunidade São Sebastião da Rua J...',
      missas: [{ dia:'Quarta-feira', hora:'19h' }, { dia:'Sábado', hora:'19:30h' }]
    },
    {
      name: 'Comunidade São José',
      sub: 'Rua Valdir Cardoso, 4, Q 1 – Pau Grande',
      img: './assets/IGREJA SAO JOSE.png',
      historia: 'A Comunidade São José...',
      missas: [{ dia:'Sábado', hora:'17:30h' }]
    }
  ],
  padres: [
    {
      name: 'Pe. Marcelo de Castro Alvarenga',
      role: 'Adm. Paroquial',
      img: './assets/Pe. Marcelo de Castro Alvarenga.png',
      bio: 'Nascido a 01/05/1996, em Guarulhos - SP, Ordenado em 04/12/2021 em Magé - RJ, Administrador Paroquial de Nossa Senhora da Conceição – Raiz da Serra, Coordenador Diocesano da Catequese, Membro da Coordenação Diocesana de Pastoral.'
    },
    {
      name: 'Pe. Ronald Cankin Ma Lam',
      role: 'Vigário Paroquial',
      img: './assets/Pe. Ronald Cankin Ma Lam.jpg',
      bio: 'Nascido a 04/03/1991, em Guaiaquil - Equador, Ordenação Diaconal: 01/05/2024, na Paróquia N. Sra. do Rosário - Petrópolis, Ordenação Sacerdotal: 06/12/2025 – Catedral São Pedro de Alcântara – Petrópolis, Vigário Paroquial da Paróquia Nossa Senhora da Conceição – Raiz da Serra – Magé.'
    },
    {
      name: 'Pe. Antônio Teixeira Pinto',
      role: 'Padre Colaborador',
      img: './assets/Pe. Antônio Teixeira Pinto.jpg',
      bio: 'Nascido a 17/03/1933, em Porto - Portugal, Ordenado a 29/06/1978, em Petrópolis - RJ, Uso de Ordens.'
    }
  ],
  noticias: [
    { cat:'Liturgia', title:'Celebração da Festa da Imaculada Conceição reúne fiéis', date:'28 de fevereiro de 2026', img:'https://images.unsplash.com/photo-1519120885059-f8a5bfae6f7f?w=600&q=80' },
    { cat:'Comunidade', title:'Campanha da Fraternidade mobiliza voluntários na paróquia', date:'22 de fevereiro de 2026', img:'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80' },
    { cat:'Formação', title:'Retiro da Quaresma acontece nos dias 14 e 15 de março', date:'18 de fevereiro de 2026', img:'https://images.unsplash.com/photo-1545286796-4e9bca1a6a63?w=600&q=80' },
    { cat:'Juventude', title:'Grupo de jovens lança novo projeto de evangelização', date:'10 de fevereiro de 2026', img:'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=600&q=80' }
  ],
  videos: [
    { title:'Homilia - Domingo da Quaresma', img:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80', url:'#' },
    { title:'Missa de Cinzas - Ao vivo', img:'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600&q=80', url:'#' }
  ],
  missas: [
    { dia:'Seg - Sex', hora:'7h', comunidade:false },
    { dia:'Sábado', hora:'8h e 18h', comunidade:false },
    { dia:'Domingo', hora:'7h, 9h e 18h', comunidade:false },
    { dia:'Comunidade São José', hora:'Dom 10h', comunidade:true },
    { dia:'N. Sra. Aparecida', hora:'Dom 8h', comunidade:true }
  ],
  calendario: {},
  atendimento: {
    intro: 'O sacramento da Confissão (Reconciliação) está disponível regularmente na sede paroquial e nas comunidades. O padre está disponível para atendimento pastoral mediante agendamento ou nos horários abaixo.',
    horarios: [
      { dia:'Segunda a Sexta', hora:'Confissões: antes das missas\nAtendimento: 9h às 11h' },
      { dia:'Sábado', hora:'Confissões: 16h às 17h30\nAtendimento: mediante agendamento' },
      { dia:'Domingo', hora:'Confissões: 30 min antes de cada missa' },
      { dia:'Urgências', hora:'Doentes e casos urgentes: entre em contato pela secretaria' }
    ]
  },
  adoracao: {
    citacao: 'Ficar diante de Jesus Eucarístico é um dos gestos mais belos e fecundos da vida cristã. É um momento de encontro pessoal, de silêncio, de amor e de transformação interior.',
    intro: 'A Adoração ao Santíssimo Sacramento é um momento precioso de encontro com Jesus presente na Eucaristia. Venha em silêncio, ore, descanse no Senhor.',
    horarios: [
      { dia:'Terça-feira', hora:'19h às 20h' },
      { dia:'Primeira sexta-feira', hora:'Das 8h às 18h (ininterrupto)' },
      { dia:'Corpus Christi', hora:'Adoração solene após a missa' }
    ]
  },
  expediente: {
    intro: 'A secretaria está à disposição para agendamentos de batismos, casamentos, crismas, certidões e demais serviços pastorais. Atendemos presencialmente nos horários abaixo.',
    linhas: [
      { dia:'Segunda a Sexta', hora:'9h às 12h e 14h às 17h' },
      { dia:'Sábado', hora:'9h às 12h' },
      { dia:'Domingo e Feriados', hora:'Fechado' }
    ],
    obs: 'Para agendamentos de sacramentos (batismo, casamento, crisma), compareça pessoalmente ou entre em contato pelo WhatsApp da paróquia com pelo menos 60 dias de antecedência.'
  }
};

/* ============================================================
   CARREGA DADOS
   ============================================================ */

function loadData() {
  try {
    const saved = localStorage.getItem('paroquia_data');
    if (saved) {
      const parsed = JSON.parse(saved);
      return deepMerge(DEFAULT_DATA, parsed);
    }
  } catch (e) {}
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}

function deepMerge(base, override) {
  const result = JSON.parse(JSON.stringify(base));
  for (const key in override) {
    if (override[key] !== null && typeof override[key] === 'object' && !Array.isArray(override[key])) {
      result[key] = deepMerge(result[key] || {}, override[key]);
    } else {
      result[key] = override[key];
    }
  }
  return result;
}

const DATA = loadData();

/* ============================================================
   SOCIAL / FOOTER
   ============================================================ */

function applySocialLinks() {
  const s = DATA.social;
  const set = (id, href) => { const el = document.getElementById(id); if (el && href && href !== '#') el.href = href; };
  set('link-instagram', s.instagram);
  set('link-whatsapp', s.whatsapp);
  set('link-facebook', s.facebook);
  set('link-youtube', s.youtube);
}

function applyFooterInfo() {
  const p = DATA.paroquia;
  const setTxt = (id, val) => { const el = document.getElementById(id); if (el && val) el.textContent = val; };
  setTxt('footer-cidade', p.cidade);
  setTxt('footer-endereco', p.endereco);
  setTxt('footer-secretaria', p.secretaria);
}

/* ============================================================
   BISPO / PADRES
   ============================================================ */

function renderBispo() {
  const c = document.getElementById('bispo-container');
  if (!c) return;
  const b = DATA.bispo;
  c.innerHTML = `<div class="padre-item" onclick="openModal('bispo',0)" style="padding:14px 12px;">
    <div class="padre-avatar" style="width:64px;height:64px;"><img src="${b.img}" alt="${b.name}"></div>
    <div class="padre-info"><div class="padre-name">${b.name}</div><div class="padre-role">${b.role}</div></div>
  </div>`;
}

function renderPadres() {
  const list = document.getElementById('padres-list');
  if (!list) return;
  list.innerHTML = DATA.padres.map((p, i) => `
    <div class="padre-item" onclick="openModal('padre',${i})">
      <div class="padre-avatar"><img src="${p.img}" alt="${p.name}"></div>
      <div class="padre-info"><div class="padre-name">${p.name}</div><div class="padre-role">${p.role}</div></div>
    </div>`).join('');
}

/* ============================================================
   CAROUSEL
   ============================================================ */

const carouselState = { comunidades: 0 };

function renderComunidades() {
  const track = document.getElementById('track-comunidades');
  const dots = document.getElementById('dots-comunidades');
  if (!track || !dots) return;
  track.innerHTML = DATA.comunidades.map((c, i) => `
    <div class="carousel-item" onclick="openModal('comunidade',${i})">
      <img src="${c.img}" alt="${c.name}">
      <div class="item-label">${c.name}</div>
      <div class="item-sub">${c.sub}</div>
    </div>`).join('');
  dots.innerHTML = DATA.comunidades.map((_, i) =>
    `<div class="carousel-dot${i===0?' active':''}" onclick="goSlide('comunidades',${i})"></div>`
  ).join('');
  carouselState.comunidades = 0;
}

function updateCarousel(id) {
  const track = document.getElementById('track-' + id);
  if (!track) return;
  const total = id === 'comunidades' ? DATA.comunidades.length : 0;
  carouselState[id] = ((carouselState[id] % total) + total) % total;
  track.style.transform = 'translateX(-' + (carouselState[id] * 100) + '%)';
  document.querySelectorAll('#dots-' + id + ' .carousel-dot')
    .forEach((d, i) => d.classList.toggle('active', i === carouselState[id]));
}

function nextSlide(id) { carouselState[id]++; updateCarousel(id); }
function prevSlide(id) { carouselState[id]--; updateCarousel(id); }
function goSlide(id, i) { carouselState[id] = i; updateCarousel(id); }

setInterval(() => nextSlide('comunidades'), 5000);

/* ============================================================
   NOTÍCIAS / VÍDEOS / MISSAS
   ============================================================ */

function renderNoticias() {
  const grid = document.getElementById('news-grid');
  if (!grid) return;
  grid.innerHTML = DATA.noticias.map(n => `
    <div class="news-card">
      <img src="${n.img}" alt="${n.title}">
      <div class="news-card-body">
        <div class="news-card-cat">${n.cat}</div>
        <div class="news-card-title">${n.title}</div>
        <div class="news-card-date">${n.date}</div>
      </div>
    </div>`).join('');
}

function renderVideos() {
  const grid = document.getElementById('video-grid');
  if (!grid) return;
  grid.innerHTML = DATA.videos.map(v => `
    <div class="video-thumb" onclick="window.open('${v.url}','_blank')">
      <img src="${v.img}" alt="${v.title}">
      <div class="play-btn">&#9654;</div>
      <div class="video-label">${v.title}</div>
    </div>`).join('');
}

function renderMissas() {
  const c = document.getElementById('missas-container');
  if (!c) return;
  let html = ''; let firstCom = true;
  DATA.missas.forEach(m => {
    if (m.comunidade && firstCom) {
      html += `<div style="border-top:2px solid var(--gold-pale);margin-top:6px;padding-top:4px;"></div>`;
      firstCom = false;
    }
    html += `<div class="missa-row">
      <span class="${m.comunidade?'missa-comunidade-label':'missa-day'}">${m.dia}</span>
      <span class="missa-hours">${m.hora}</span>
    </div>`;
  });
  c.innerHTML = html;
}

/* ============================================================
   SEÇÕES DINÂMICAS (Atendimento, Adoração, Expediente)
   ============================================================ */

function renderAtendimento() {
  const el = document.getElementById('sec-atendimento-body');
  if (!el) return;
  const d = DATA.atendimento || {};
  const horariosHtml = (d.horarios || []).map(h => `
    <div class="horario-card">
      <div class="horario-card-dia">${h.dia}</div>
      <div class="horario-card-hora">${h.hora.replace(/\n/g,'<br>')}</div>
    </div>`).join('');
  el.innerHTML = `<p>${d.intro || ''}</p><div class="horarios-grid">${horariosHtml}</div>`;
}

function renderAdoracao() {
  const el = document.getElementById('sec-adoracao-body');
  if (!el) return;
  const d = DATA.adoracao || {};
  const horariosHtml = (d.horarios || []).map(h => `
    <div class="horario-card">
      <div class="horario-card-dia">${h.dia}</div>
      <div class="horario-card-hora">${h.hora}</div>
    </div>`).join('');
  el.innerHTML = `
    <div class="adoracao-destaque">
      <div class="adoracao-icone">✝</div>
      <p>${d.citacao || ''}</p>
    </div>
    <p>${d.intro || ''}</p>
    <div class="horarios-grid">${horariosHtml}</div>`;
}

function renderExpediente() {
  const el = document.getElementById('sec-expediente-body');
  if (!el) return;
  const d = DATA.expediente || {};
  const linhasHtml = (d.linhas || []).map(l => `
    <div class="expediente-linha">
      <span class="expediente-dia">${l.dia}</span>
      <span class="expediente-hora">${l.hora}</span>
    </div>`).join('');
  el.innerHTML = `<p>${d.intro || ''}</p>${linhasHtml}
    ${d.obs ? `<div class="expediente-obs">${d.obs}</div>` : ''}`;
}

/* ============================================================
   CALENDÁRIO
   ============================================================ */

let calDate = new Date();

function getCalKey(year, month, day) {
  return year + '-' + String(month+1).padStart(2,'0') + '-' + String(day).padStart(2,'0');
}

function renderCalendar() {
  const grid = document.getElementById('cal-grid');
  const nameEl = document.getElementById('cal-month-name');
  if (!grid || !nameEl) return;
  const year = calDate.getFullYear(), month = calDate.getMonth();
  const today = new Date();
  const months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
  nameEl.textContent = months[month] + ' ' + year;
  grid.innerHTML = '';
  ['D','S','T','Q','Q','S','S'].forEach(d => {
    const h = document.createElement('div'); h.className = 'cal-header'; h.textContent = d; grid.appendChild(h);
  });
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month+1, 0).getDate();
  const daysInPrev = new Date(year, month, 0).getDate();
  for (let i = 0; i < firstDay; i++) {
    const el = document.createElement('div');
    el.className = 'cal-day other-month'; el.textContent = daysInPrev - firstDay + 1 + i; grid.appendChild(el);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const key = getCalKey(year, month, d);
    const evento = DATA.calendario[key];
    const el = document.createElement('div');
    let cls = 'cal-day';
    if (d === today.getDate() && month === today.getMonth() && year === today.getFullYear()) cls += ' today';
    if (evento) cls += ' has-event';
    el.className = cls; el.textContent = d;
    if (evento) {
      const evts = Array.isArray(evento) ? evento : [evento];
      el.title = evts[0].titulo || 'Evento';
      el.onclick = () => openCalEvent(key, d, month, year, evts[0]);
    }
    grid.appendChild(el);
  }
  const rem = 7 - ((firstDay + daysInMonth) % 7 || 7);
  for (let i = 1; i <= rem && rem < 7; i++) {
    const el = document.createElement('div'); el.className = 'cal-day other-month'; el.textContent = i; grid.appendChild(el);
  }
}

function changeMonth(dir) { calDate.setMonth(calDate.getMonth() + dir); renderCalendar(); }

function openCalEvent(key, day, month, year, evento) {
  const months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
  document.getElementById('cal-event-date').textContent = day + ' de ' + months[month] + ' de ' + year;
  document.getElementById('cal-event-title').textContent = evento.titulo || 'Evento';
  document.getElementById('cal-event-desc').textContent = evento.descricao || '';
  document.getElementById('cal-event-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCalEventOverlay(e) { if (e.target === document.getElementById('cal-event-overlay')) closeModal('cal-event-overlay'); }

/* ============================================================
   MODAIS
   ============================================================ */

function openModal(type, idx) {
  const overlay = document.getElementById('modal-overlay');
  const img = document.getElementById('modal-img');
  const body = document.getElementById('modal-body');
  if (type === 'comunidade') {
    const c = DATA.comunidades[idx];
    img.src = c.img; img.alt = c.name; img.style.display = 'block';
    const missasHtml = c.missas.map(m =>
      `<div class="missa-row"><span class="missa-day">${m.dia}</span><span class="missa-hours">${m.hora}</span></div>`
    ).join('');
    body.innerHTML = `<h2>${c.name}</h2><div class="modal-sub">${c.sub}</div><p>${c.historia}</p><h3>Horários de Missa</h3>${missasHtml}`;
  } else if (type === 'bispo') {
    const b = DATA.bispo;
    img.src = b.img; img.alt = b.name; img.style.display = 'block';
    body.innerHTML = `<h2>${b.name}</h2><div class="modal-sub">${b.role}</div><p>${b.bio}</p>`;
  } else if (type === 'padre') {
    const p = DATA.padres[idx];
    img.src = p.img; img.alt = p.name; img.style.display = 'block';
    body.innerHTML = `<h2>${p.name}</h2><div class="modal-sub">${p.role}</div><p>${p.bio}</p>`;
  }
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) { document.getElementById(id).classList.remove('open'); document.body.style.overflow = ''; }
function closeModalOverlay(e) { if (e.target === document.getElementById('modal-overlay')) closeModal('modal-overlay'); }

/* ============================================================
   CONTATO
   ============================================================ */

function openContactModal(e) {
  if (e) e.preventDefault();
  document.getElementById('contact-form-wrap').style.display = 'block';
  document.getElementById('contact-success').style.display = 'none';
  ['contact-nome','contact-email','contact-tel','contact-msg'].forEach(id => { document.getElementById(id).value = ''; });
  document.getElementById('contact-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeContactOverlay(e) { if (e.target === document.getElementById('contact-overlay')) closeModal('contact-overlay'); }

function enviarContato() {
  const nome = document.getElementById('contact-nome').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const tel = document.getElementById('contact-tel').value.trim();
  const msg = document.getElementById('contact-msg').value.trim();
  if (!nome || !email || !msg) { alert('Por favor preencha nome, e-mail e mensagem.'); return; }
  const contatos = JSON.parse(localStorage.getItem('paroquia_contatos') || '[]');
  contatos.push({ nome, email, tel, msg, data: new Date().toISOString() });
  localStorage.setItem('paroquia_contatos', JSON.stringify(contatos));
  document.getElementById('contact-form-wrap').style.display = 'none';
  document.getElementById('contact-success').style.display = 'block';
}

/* ============================================================
   ÁUDIO
   ============================================================ */

let audioMuted = false;

function initAudio() {
  const audio = document.getElementById('ave-maria');
  if (!audio) return;
  audio.volume = 0.35;
  audio.play().catch(() => {
    const unlock = () => {
      audio.play().catch(() => {});
      document.removeEventListener('click', unlock);
      document.removeEventListener('touchstart', unlock);
      document.removeEventListener('keydown', unlock);
    };
    document.addEventListener('click', unlock);
    document.addEventListener('touchstart', unlock);
    document.addEventListener('keydown', unlock);
  });
}

function toggleMute() {
  const audio = document.getElementById('ave-maria');
  if (!audio) return;
  audioMuted = !audioMuted;
  audio.muted = audioMuted;
  document.getElementById('mute-icon-on').style.display = audioMuted ? 'none' : 'block';
  document.getElementById('mute-icon-off').style.display = audioMuted ? 'block' : 'none';
  document.getElementById('mute-label').textContent = audioMuted ? 'Mudo' : 'Som';
  if (!audioMuted) audio.play().catch(() => {});
}

/* ============================================================
   NAVEGAÇÃO SUAVE
   ============================================================ */

function smoothScrollTo(targetY) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  const duration = 600;
  let startTime = null;

  function ease(t) {
    return t < 0.5 ? 2*t*t : -1+(4-2*t)*t;
  }

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + diff * ease(progress));
    if (elapsed < duration) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

function navScroll(e, id) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (!el) return;
  const navH = document.querySelector('nav')?.offsetHeight || 60;
  const top = el.getBoundingClientRect().top + window.scrollY - navH;
  smoothScrollTo(top);
}

function scrollToTop(e) {
  e.preventDefault();
  smoothScrollTo(0);
}

/* ============================================================
   INICIALIZAÇÃO
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  applySocialLinks();
  applyFooterInfo();
  renderBispo();
  renderPadres();
  renderComunidades();
  renderNoticias();
  renderVideos();
  renderMissas();
  renderCalendar();
  renderAtendimento();
  renderAdoracao();
  renderExpediente();
  initAudio();
});
