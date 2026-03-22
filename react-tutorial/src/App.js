import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className='d-flex align-center mb-40 justify-between'>
          <h1>All Sneakers</h1>
          <div className='search-block d-flex'>
            <img src="/img/search.svg" alt='Search' />
            <input placeholder='Search...' />
          </div>
        </div>
        <div className='d-flex'>

          <Card />
          <Card />
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
