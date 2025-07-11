import React from 'react';
import './onepage.css';

const OnePage = ({ title, description, image }) => {
    return (
        <div className="onepage-section">
            <div className="onepage-image-container">
                <img src={image} alt={title} className="onepage-image" />
            </div>
            <div className="onepage-content">
                <h2 className="onepage-title">{title}</h2>
                <p className="onepage-description">{description}</p>
            </div>
        </div>
    );
}

export default OnePage;