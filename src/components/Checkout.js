import React from "react";
import "../css/Checkout.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                <div>
                    <h2 className="checkout__title">Your shopping basket</h2>

                    {basket.map((b) => (
                        <CheckoutProduct
                            id={b.id}
                            image={b.image}
                            title={b.title}
                            price={b.price}
                            rating={b.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
