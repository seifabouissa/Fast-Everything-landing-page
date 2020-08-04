import React from 'react';

const Navbar = () => {
    return(
    <>
    <div className="pattern"></div>
    <div className="nav">
        <div className="logo">
            <ion-icon name="infinite"></ion-icon>
        </div>

        <div className="menu">
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Fourms</li>
                <li>Contact</li>
            </ul>
        </div>

        <div className="cart">
            <ion-icon name="cart"></ion-icon>
        </div>
    </div>
    </>
    )
}
export default Navbar;