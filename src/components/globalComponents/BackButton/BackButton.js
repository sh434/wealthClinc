import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import URL from '../../../assets/constants/url';
import './BackButton.css';

const BackButton = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const goBack = () => {
        navigate(-1);
    };


    const isHomePage = location.pathname === URL.HOME;

    if (isHomePage) {
        return null; 
    }

    return (
        <div className="back-button-container">
            <button className="back-button" onClick={goBack}>
                <span>Go Back</span>
            </button>
        </div>
    );
};

export default BackButton;
