import './product-card.styles.scss';
import Button from '../button/button.component';

const ProductCard = ({id,name,price, imageUrl})=>{
    return(
        <div className='product-card-container' key={id}>
            <img src={imageUrl} alt={name} />
            <div className='footer'>   
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted'>ADD TO CART</Button>
        </div>
    )
}
export default ProductCard;