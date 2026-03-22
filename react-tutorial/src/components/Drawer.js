function Drawer() {
    return(
              <div className='overlay' style={{ display: 'none' }}>
        <div className="drawer">
          <h2 className='d-flex mb-30 justify-between'>Cart
            <img className='removeBtn  cu-p' src='/img/btn-remove.svg' alt='remove' />
          </h2>

          <div className="items">
            <div className="cartItem d-flex align-center">
              <div className="carItemImg " style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}></div>
              <div className='mr-20 flex'>
                <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 rub</b>
              </div>
              <img className='removeBtn' src='/img/btn-remove.svg' alt='remove' />
            </div>
            <div className="cartItem d-flex align-center">
              <div className="carItemImg " style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}></div>
              <div className='mr-20 flex'>
                <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 rub</b>
              </div>
              <img className='removeBtn' src='/img/btn-remove.svg' alt='remove' />
            </div>
            <div className="cartItem d-flex align-center">
              <div className="carItemImg " style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}></div>
              <div className='mr-20 flex'>
                <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 rub</b>
              </div>
              <img className='removeBtn' src='/img/btn-remove.svg' alt='remove' />
            </div>
          </div>
          <div className="cartTotalBlock">
            <ul>
              <li className='d-flex'>
                <span>Total:</span>
                <div></div>
                <b>21 498 rub. </b>
              </li>
              <li className='d-flex'>
                <span>Tax 5%:</span>
                <div></div>
                <b>1074 rub.</b>
              </li>
            </ul>
            <button className='greenButton'>Order <img src='/img/arrow.png' /></button>
          </div>
        </div>

      </div>
    )
}

export default Drawer;