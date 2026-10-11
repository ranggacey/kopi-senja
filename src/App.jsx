import { useState, useEffect } from 'react'

const MENU = [
  { name: 'Es Kopi Susu Senja', desc: 'Signature kami — espresso double shot, susu segar, dan gula aren asli.', price: 'Rp 22rb', tag: 'Best Seller' },
  { name: 'Kopi Tubruk Klasik', desc: 'Robusta Temanggung diseduh tradisional, pekat dan berkarakter.', price: 'Rp 15rb', tag: null },
  { name: 'Caffe Latte', desc: 'Espresso lembut dengan susu steamed yang creamy dan latte art.', price: 'Rp 25rb', tag: null },
  { name: 'Cappuccino', desc: 'Perpaduan seimbang espresso, susu, dan foam tebal yang ringan.', price: 'Rp 25rb', tag: null },
  { name: 'V60 Manual Brew', desc: 'Arabika Gayo diseduh perlahan, fruity dan clean di setiap tegukan.', price: 'Rp 28rb', tag: 'Baru' },
  { name: 'Matcha Latte', desc: 'Matcha premium Kyoto dengan susu oat, manisnya pas.', price: 'Rp 27rb', tag: null },
]

const FEATURES = [
  { icon: 'bean', title: 'Biji Pilihan Petani Lokal', desc: 'Arabika Gayo dan Robusta Temanggung yang disangrai fresh setiap minggu.' },
  { icon: 'cup', title: 'Barista Bersertifikat', desc: 'Tim kami dilatih khusus untuk menjaga konsistensi rasa di setiap cangkir.' },
  { icon: 'sofa', title: 'Tempat Super Cozy', desc: 'WiFi kencang, colokan di tiap meja, dan playlist yang bikin betah.' },
]

const TESTIS = [
  { name: 'Nadia Prameswari', role: 'Mahasiswa Undip', text: 'Es kopi susunya juara banget, gula arennya berasa premium. Tempatnya juga enak buat nugas berjam-jam.' },
  { name: 'Bagas Aditya', role: 'Freelancer', text: 'Udah coba banyak coffee shop di Semarang, Kopi Senja salah satu yang paling konsisten rasanya.' },
  { name: 'Sinta Maharani', role: 'Food Blogger', text: 'V60-nya clean banget, fruity notes-nya keluar. Baristanya juga ramah dan knowledgeable.' },
]

const GALLERY = [
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop',
]

function Icon({ name }) {
  const paths = {
    bean: <path d="M12 2C7 2 3 7 3 12s4 10 9 10c4 0 6-3 6-7 0-2-1-3-2-4s-1-3 0-5c-1-2-2-4-4-4z" />,
    cup: <path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8zm13 1h2a2 2 0 0 1 0 4h-2M7 4c0 1 2 1 2 3m4-3c0 1 2 1 2 3" />,
    sofa: <path d="M5 11V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3m-16 0a2 2 0 1 0-4 0v3h20v-3a2 2 0 1 0-4 0M3 14v4m18-4v4" />,
    star: <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />,
    clock: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-13v5l3 2" />,
    pin: <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />,
    arrow: <path d="M5 12h14m-6-6l6 6-6 6" />,
    check: <path d="M4 12l5 5L20 6" />,
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  )
}

export default function App() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="site">
      <nav className="nav">
        <div className="container nav-inner">
          <a className="logo" href="#"><span className="logo-mark"><Icon name="bean" /></span>Kopi Senja</a>
          <div className={`nav-links ${open ? 'show' : ''}`}>
            <a href="#menu" onClick={() => setOpen(false)}>Menu</a>
            <a href="#tentang" onClick={() => setOpen(false)}>Tentang</a>
            <a href="#testimoni" onClick={() => setOpen(false)}>Testimoni</a>
            <a href="#kunjungi" onClick={() => setOpen(false)}>Kunjungi</a>
          </div>
          <div className="nav-cta">
            <a href="#kunjungi" className="btn btn-primary">Pesan Sekarang</a>
            <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow reveal">Kedai Kopi — Semarang</p>
            <h1 className="reveal">Ngopi Santai,<br /><em>Rasa Istimewa.</em></h1>
            <p className="lead reveal">Biji pilihan petani lokal Nusantara, disangrai fresh dan diseduh dengan cinta. Tempat paling pas buat kerja, nugas, atau sekadar melepas penat.</p>
            <div className="hero-actions reveal">
              <a href="#menu" className="btn btn-primary">Lihat Menu <Icon name="arrow" /></a>
              <a href="#tentang" className="btn btn-ghost">Cerita Kami</a>
            </div>
            <div className="hero-stats reveal">
              <div><strong>4.9</strong><span>Rating Google</span></div>
              <div><strong>25+</strong><span>Varian Menu</span></div>
              <div><strong>12rb+</strong><span>Cangkir Terjual</span></div>
            </div>
          </div>
          <div className="hero-visual reveal">
            <div className="arch">
              <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop" alt="Latte art Kopi Senja" />
            </div>
            <div className="float-card fc1">
              <span className="fc-icon"><Icon name="check" /></span>
              <div><strong>100% Arabika</strong><span>Biji pilihan Gayo</span></div>
            </div>
            <div className="float-card fc2">
              <span className="stars"><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /></span>
              <div><strong>2.400+ ulasan</strong><span>Pelanggan puas</span></div>
            </div>
          </div>
        </div>
      </header>

      <div className="marquee"><div className="marquee-track">
        {Array(2).fill('ARABIKA GAYO ✦ ROBUSTA TEMANGGUNG ✦ MANUAL BREW ✦ FRESH ROASTED ✦ ').map((t, i) => <span key={i}>{t}</span>)}
      </div></div>

      <section id="menu" className="section">
        <div className="container">
          <p className="eyebrow reveal">Menu Andalan</p>
          <h2 className="reveal">Diseduh dengan <em>Ketelitian</em></h2>
          <p className="section-sub reveal">Setiap cangkir dibuat dari biji yang disangrai maksimal 7 hari sebelum disajikan.</p>
          <div className="menu-grid">
            {MENU.map((m, i) => (
              <article key={i} className="menu-card reveal">
                {m.tag && <span className="tag">{m.tag}</span>}
                <h3>{m.name}</h3>
                <p>{m.desc}</p>
                <div className="menu-foot"><span className="price">{m.price}</span><button className="btn btn-small">+ Tambah</button></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery">
        <div className="gallery-track">
          {[...GALLERY, ...GALLERY].map((src, i) => (
            <img key={i} src={src} alt="Suasana Kopi Senja" loading="lazy" />
          ))}
        </div>
      </section>

      <section id="tentang" className="section alt">
        <div className="container">
          <p className="eyebrow reveal">Kenapa Kopi Senja</p>
          <h2 className="reveal">Bukan Sekadar <em>Kedai Kopi</em></h2>
          <div className="feat-grid">
            {FEATURES.map((f, i) => (
              <article key={i} className="feat-card reveal">
                <span className="feat-icon"><Icon name={f.icon} /></span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimoni" className="section">
        <div className="container">
          <p className="eyebrow reveal">Kata Mereka</p>
          <h2 className="reveal">Cerita dari <em>Pelanggan</em></h2>
          <div className="testi-grid">
            {TESTIS.map((t, i) => (
              <article key={i} className="testi-card reveal">
                <span className="stars"><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /></span>
                <p>"{t.text}"</p>
                <div className="testi-user"><span className="avatar">{t.name[0]}</span><div><strong>{t.name}</strong><span>{t.role}</span></div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kunjungi" className="visit">
        <div className="container visit-grid">
          <div className="reveal">
            <p className="eyebrow light">Kunjungi Kami</p>
            <h2>Mampir, Yuk.<br />Kopinya <em>Udah Nunggu.</em></h2>
            <div className="visit-info">
              <div><span><Icon name="pin" /></span><div><strong>Jl. Pahlawan No. 88, Semarang</strong><span>Sebelah Taman Indonesia Kaya</span></div></div>
              <div><span><Icon name="clock" /></span><div><strong>Senin – Minggu</strong><span>08.00 – 23.00 WIB</span></div></div>
            </div>
            <a href="#" className="btn btn-light">Lihat di Google Maps <Icon name="arrow" /></a>
          </div>
          <div className="visit-photo reveal">
            <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop" alt="Interior Kopi Senja" />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div><a className="logo" href="#"><span className="logo-mark"><Icon name="bean" /></span>Kopi Senja</a><p>Diseduh dengan cinta di Semarang sejak 2019.</p></div>
          <div><h4>Jelajah</h4><a href="#menu">Menu</a><a href="#tentang">Tentang</a><a href="#testimoni">Testimoni</a></div>
          <div><h4>Kontak</h4><a href="#">Instagram</a><a href="#">TikTok</a><a href="#">WhatsApp</a></div>
          <div><h4>Jam Buka</h4><p>Senin – Minggu<br />08.00 – 23.00 WIB</p></div>
        </div>
        <div className="container footer-bottom"><p>© 2026 Kopi Senja. Seluruh hak cipta dilindungi.</p></div>
      </footer>
    </div>
  )
}
