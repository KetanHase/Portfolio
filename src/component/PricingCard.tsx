import React  from 'react';
import "./PricingCard.css";
import { Link } from 'react-router-dom';


const PricingCard: React.FC = () => {
    return (
        <div  className='pricing'>
            <div className='pricingm-card-container'>
                <div className='pricing-card'>
                    <h3>-- Basic --</h3>
                    <span className='bar'></span>
                    <p className='btc'>$100</p>
                    <p>- 3 Days -</p>
                    <p>- 3 pages -</p>
                    <p>- Featured -</p>
                    <p>-Responsive design</p>
                    <Link to="/contact" className='btn'>
                    PURCHASE NOW
                    </Link>
                </div>
                <div className='pricing-card'>
                    <h3>-- Premium --</h3>
                    <span className='bar'></span>
                    <p className='btc'>$200</p>
                    <p>- 5 Days -</p>
                    <p>- 3 pages -</p>
                    <p>- Featured -</p>
                    <p>-Responsive design</p>
                    <Link to="/contact" className='btn'>
                    PURCHASE NOW
                    </Link>
                </div>
                <div className='pricing-card'>
                    <h3>-- Buisness --</h3>
                    <span className='bar'></span>
                    <p className='btc'>$300</p>
                    <p>- 6 Days -</p>
                    <p>- 3 pages -</p>
                    <p>- Featured -</p>
                    <p>-Responsive design</p>
                    <Link to="/contact" className='btn'>
                    PURCHASE NOW
                    </Link>
                </div>

            </div>
            
        </div>
    );
};

export default PricingCard;
