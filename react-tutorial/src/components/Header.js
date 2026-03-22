function Header(){
    return(
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
    )
}

export default Header;