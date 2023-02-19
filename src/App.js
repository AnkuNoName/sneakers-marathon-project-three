function App() {
  return (
    <div className="wrapper">
      <header className='header'>
        <div className='header__inner'>
          <div className='header__inner-logo'>
            <img className="header-logo" alt="" src="/img/header-logo.png" />
            <div className="header__logo-text">
              <h3>
                REACT SNEAKERS
              </h3>
              <p>
                Магазин лучших кроссовок
              </p>
            </div>
          </div>
          <div className='header__inner-right'>
            <ul className="header__inner-list">
              <li>
                <img className="header-logo" alt="" src="/img/cart.svg" />
                <span>1205 грн.</span>
              </li>
              <li>
                <img className="header-logo" alt="" src="/img/user.svg" />
              </li>
            </ul>
          </div>
        </div>    
      </header>
      <main className="main">
        <container className="container">
          <div className="main__inner">
            <div className="main__inner-slider">
              <img className="main__inner-logo" alt="" src="/img/main-slider-1.jpg" />
            </div>

            <div className="main__inner-content">
              <h3 className="main__inner-title">
                Все кроссовки
              </h3>
            </div>

          </div>
        </container>
      </main>      
    </div>
  );
}

export default App;
