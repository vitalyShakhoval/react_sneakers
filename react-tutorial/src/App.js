import logo from './logo.svg';

function App() {
  return (
    <div className="wrapper clear">
      <div className='overlay'>
        <div className="drawer">
          <h2 className='mb-30'>Cart</h2>
          <div className="cartItem d-flex align-center mb-20">
            <div className="carItemImg " style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}></div>
            <div className='mr-20 flex'>
              <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 rub</b>
            </div>
            <img className='removeBtn' src='/img/btn-remove.svg' alt='remove' />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div className="carItemImg " style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}></div>
            <div className='mr-20 flex'>
              <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 rub</b>
            </div>
            <img className='removeBtn' src='/img/btn-remove.svg' alt='remove' />
          </div>
        </div>
      </div>
      <header className='d-flex justify-between align-center p-40'>
        <div className='d-flex align-center'>
          <img width={40} height={40} src='/img/logo.png' />
          <div>
            <h3 className='text-uppercase'>react sneakers</h3>
            <p>Shop of the best sneakers</p>
          </div>
        </div>
        <ul className='d-flex'>
          <li className='mr-30'>
            <img width={20} height={20} src='/img/cart.svg' />
            <span>1203 rub</span>
          </li>
          <li className='mr-30'>
            <img width={20} height={20} src='/img/favorite.svg' />
            <span>Favorites</span>
          </li>
          <li>
            <img width={20} height={20} src='/img/profile.svg' />
            <span>Profile</span>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className='d-flex align-center mb-40 justify-between'>
          <h1>All Sneakers</h1>
          <div className='search-block d-flex'>
            <img src="/img/search.svg" alt='Search' />
            <input placeholder='Search...' />
          </div>
        </div>
        <div className='d-flex'>
          <div className='card'>
            <div className='favorite'>
              <img src='/img/hearth-liked.svg' alt="unliked" />
            </div>
            <img width={133} height={112} src='/img/sneakers/1.jpg'></img>
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Cost:</span>
                <b>12 999 rub</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='/img/plus.svg'></img>
              </button>
            </div>
          </div>
          <div className='card'>
            <div className='favorite'>
              <img src='/img/hearth-unliked.svg' alt="unliked" />
            </div>
            <img width={133} height={112} src='/img/sneakers/2.jpg'></img>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Cost:</span>
                <b>8 499 rub</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='/img/plus.svg'></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
