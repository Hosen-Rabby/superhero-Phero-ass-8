import React from 'react';

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserPlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedin, faDribbble } from '@fortawesome/free-brands-svg-icons'

import './Book.css'

const Book = (props) => {

    const {img, name, author, price, star, starCount} = props.book;

    const userIcon = <FontAwesomeIcon icon={faUserPlus} />
    const twitterIcon = <FontAwesomeIcon icon={faTwitter} />
    const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />
    const dribbbleIcon = <FontAwesomeIcon icon={faDribbble} />

    return (
        <div className = 'bookItem'>
            <div className = 'item'>
                <img src = {img} alt ='Author Picture'/>
                <h4>Name : {author}</h4>
                <h5>Best Book: {name}</h5>
                <p>Avg. Book price: ${price}</p>
                <p>Rate: {star}</p>
                <p>Total sell: {starCount}</p>
                <button onClick = {() => props.addToCart(props.book)}>{userIcon}  Select</button>
                <div className = 'icons'>
                    <i>{twitterIcon}</i>
                    <i>{linkedinIcon}</i>
                    <i>{dribbbleIcon}</i>
                </div>
            </div>
        </div>

    );
};

export default Book;