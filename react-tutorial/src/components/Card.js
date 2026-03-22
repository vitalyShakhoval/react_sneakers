function Card() {
    return (
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
    )
}
export default Card;
