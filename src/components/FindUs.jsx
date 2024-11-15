import React from 'react';
import { FaFacebook, FaTwitter, FaInstagramSquare } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-semibold mb-3'>Find Us on</h2>
            <div className="join join-vertical flex *:bg-base-100">
                <button className="btn join-item justify-start"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item justify-start"><FaTwitter></FaTwitter> Twitter</button>
                <button className="btn join-item justify-start"><FaInstagramSquare /> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;