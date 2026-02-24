import logo from './logo.svg';

function App() {
  return (
    <div className="wrapper clear">
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
        <h1 className='mb-40'>All Sneakers</h1>
        <div className='d-flex'>
          <div className='card'>
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
