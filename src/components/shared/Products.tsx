interface Props {
    image: string;
    title: string;
    description: string;
    price: number;
}

export const Products = (props: Props) => {
    return( 
        <div className="wrapper">
        <div className="products-section-item">
            <img className="products-section-item__thumb">{props.image}</img> 
            <h3 className="products-section-item__title">{props.title}</h3>
        <div className="products-section-item__content">
        <div className="products-section-item__headings">
            <p className="products-section-item__description">{props.description}</p>
            <h2 className="products-section-item__price">{props.price}</h2>
        </div>
        </div>
        </div>
        </div>
    )
    
        
}