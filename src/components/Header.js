import React from "react";
import "../css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function Header() {
    const [{ basket, user }, dipatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            signOut(auth);
        }
    };
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="amazon logo"
                />
            </Link>

            <div className="header__search">
                <input
                    className="header__searchInput"
                    type="text"
                    id=""
                    name=""
                    placeholder=""
                />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link onClick={handleAuthentication} to={!user && "/login"}>
                    <div className="header__option">
                        <span className="header_optionLineOne">
                            Hello {user ? `${user.email}` : "Guest"}
                        </span>
                        <span className="header_optionLineTwo">
                            {user ? "Sign Out" : "Sign In"}
                        </span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">&Orders</span>
                </div>
                <div className="header__option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasket />
                        <span className="header_optionLineTwo header__basketcount">
                            {basket.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
