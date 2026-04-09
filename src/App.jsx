import { useState } from 'react';
import './App.css';

function App() {
  const [abaAtiva, setAbaAtiva] = useState('produtos');
  const [lista, setLista] = useState([
    { id: 10, nome: 'Caderno', preco: 34, icon: '📓' },
    { id: 11, nome: 'Caneta à tinta', preco: 67, icon: '🖋' },
    { id: 12, nome: 'Mochila escolar', preco: 255, icon: '🎒' }
  ]);

  const trocarAba = (tipo) => {
    setAbaAtiva(tipo);
    
    if (tipo === 'produtos') {
      setLista([
        { id: 10, nome: 'Caderno', preco: 34, icon: '📓' },
        { id: 11, nome: 'Caneta à tinta', preco: 67, icon: '🖋' },
        { id: 12, nome: 'Mochila escolar', preco: 255, icon: '🎒' }
      ]);
    } else {
      setLista([
        { id: 50, nome: 'CUPOM PROMO10', preco: '10% OFF', icon: '🎟️' },
        { id: 51, nome: 'FRETE GRATIS', preco: 'Acima de R$139', icon: '🚚' },
        { id: 52, nome: 'CASHBACK ', preco: 'R$ 3 de volta', icon: '💸' }
      ]);
    }
  };

  return (
    <div className="layout">
      <nav className="navbar">
        <h2 className="brand">Kalunga</h2>
        <div className="menu">
          <button 
            className={abaAtiva === 'produtos' ? 'active' : ''} 
            onClick={() => trocarAba('produtos')}
          >
            Produtos
          </button>
          <button 
            className={abaAtiva === 'cupons' ? 'active' : ''} 
            onClick={() => trocarAba('cupons')}
          >
            Cupons
          </button>
        </div>
      </nav>

      <div className="main-content">
        <header className="page-header">
          <h3>{abaAtiva === 'produtos' ? 'Grandes Ofertas' : 'Meus Cupons'}</h3>
          <p>Confira as melhores oportunidades para sua região</p>
          <p>gugu nos da nota, vc é maneiro 🧑🐱‍🏍</p>
        </header>

        <section className="grid-produtos">
          {lista.map(item => (
            <div key={item.id} className="item-card">
              <div className="item-img">{item.icon}</div>
              <div className="item-info">
                <h4>{item.nome}</h4>
                <span className="item-price">
                  {typeof item.preco === 'number' ? `R$ ${item.preco}` : item.preco}
                </span>
                <button className="btn-action">
                  {abaAtiva === 'produtos' ? 'Comprar' : 'Ativar'}
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;