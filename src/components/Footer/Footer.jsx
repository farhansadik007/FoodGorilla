import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-lime-300 text-base-content">
            <div>
                <img className='w-48' src='foodgorilla.png'/>
                <p className='text-3xl'>FoodGorilla<br />Your Personal Chef</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Foods</a>
                <a className="link link-hover">Reviews</a>
                <a className="link link-hover">Chefs</a>
                <a className="link link-hover">Affiliation</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
            </div>
        </footer>
    );
};

export default Footer;