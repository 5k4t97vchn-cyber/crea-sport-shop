import { ShoppingBag, ShieldCheck, Truck, Star, Search, Menu, Heart } from 'lucide-react'

const products = [
  {
    name: 'Pack Training Essentiel',
    category: 'Sport',
    price: '29,90 €',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
    badge: 'Best-seller'
  },
  {
    name: 'T-shirt Performance',
    category: 'Textile',
    price: '19,90 €',
    image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=80',
    badge: 'Nouveau'
  },
  {
    name: 'Accessoires Fitness',
    category: 'Accessoires',
    price: '14,90 €',
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80',
    badge: 'Prix doux'
  },
  {
    name: 'Sac Sport Polyvalent',
    category: 'Équipement',
    price: '34,90 €',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80',
    badge: 'Pratique'
  }
]

function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="logo">
          <div className="logoIcon"><ShoppingBag size={22} /></div>
          <span>Créa&Sport</span>
        </div>

        <nav className="nav">
          <a href="#produits">Produits</a>
          <a href="#avantages">Avantages</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="menuBtn" aria-label="Menu">
          <Menu size={22} />
        </button>
      </header>

      <main>
        <section className="hero">
          <div className="heroText">
            <p className="eyebrow">Boutique sport • textile • accessoires</p>
            <h1>Des articles utiles, stylés et accessibles pour bouger mieux.</h1>
            <p className="heroDescription">
              Créa&Sport sélectionne des produits simples, efficaces et abordables pour le sport,
              le quotidien et les loisirs.
            </p>

            <div className="heroActions">
              <a className="primaryBtn" href="#produits">Voir la boutique</a>
              <a className="secondaryBtn" href="#contact">Nous contacter</a>
            </div>
          </div>

          <div className="heroCard">
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80"
              alt="Articles de sport"
            />
            <div className="floatingCard">
              <Star size={18} fill="currentColor" />
              <span>Sélection qualité</span>
            </div>
          </div>
        </section>

        <section id="avantages" className="features">
          <div className="feature">
            <ShieldCheck />
            <h3>Paiement sécurisé</h3>
            <p>Une boutique propre, claire et prête pour évoluer.</p>
          </div>
          <div className="feature">
            <Truck />
            <h3>Livraison simple</h3>
            <p>Une structure pensée pour ajouter facilement tes produits.</p>
          </div>
          <div className="feature">
            <Heart />
            <h3>Design moderne</h3>
            <p>Un rendu professionnel, responsive et compatible Vercel.</p>
          </div>
        </section>

        <section id="produits" className="section">
          <div className="sectionHeader">
            <div>
              <p className="eyebrow">Nos produits</p>
              <h2>Sélection du moment</h2>
            </div>
            <div className="searchBox">
              <Search size={18} />
              <span>Sport, textile, accessoires…</span>
            </div>
          </div>

          <div className="grid">
            {products.map((product) => (
              <article className="product" key={product.name}>
                <div className="productImage">
                  <img src={product.image} alt={product.name} />
                  <span>{product.badge}</span>
                </div>
                <div className="productInfo">
                  <p>{product.category}</p>
                  <h3>{product.name}</h3>
                  <div className="productBottom">
                    <strong>{product.price}</strong>
                    <button>Ajouter</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="cta">
          <h2>Créa&Sport est prêt à être déployé.</h2>
          <p>
            Ce code est volontairement propre et simple : aucune route compliquée, aucun backend,
            aucun réglage bizarre. La page d’accueil fonctionne sur “/”.
          </p>
          <a className="primaryBtn" href="mailto:contact@crea-sport.fr">Contact</a>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Créa&Sport</span>
        <span>Boutique en ligne</span>
      </footer>
    </div>
  )
}

export default App
