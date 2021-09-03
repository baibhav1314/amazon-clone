import React from "react";
import "../css/Product.css";
import { useStateValue } from "../StateProvider";

function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    console.log("this is basket" + basket.length);

    const addToBasket = () => {
        //dispatch the item to the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                image: image,
                title: title,
                price: price,
                rating: rating,
            },
        });
    };
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <div className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </div>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
            </div>
            <img className="product__image" src={image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    );
}

export default Product;
