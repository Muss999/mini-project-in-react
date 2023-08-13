import React from "react";
import "./style.css";
const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer__block_input">
                <div className="footer__form_input">
                    <input
                        className="footer__input"
                        type="text"
                        placeholder="Write..."
                    />
                    <button className="footer__btn">Send Message</button>
                </div>
            </div>

            <div className="footer__block_contacts">
                <ul className="footer__contact_list">
                    <li className="footer__contact_item">
                        <strong>My number: </strong> + (996) 765 125 447
                    </li>
                    <li className="footer__contact_item">
                        <strong>My email: </strong>muss_999@mail.ru
                    </li>
                    <li className="footer__contact_item">
                        <strong>My address: </strong>Tabyshalieva 29
                    </li>
                    <li className="footer__contact_item"></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
