import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Card.css';

function Card({ id, dashboardName, isFavourite, handleToggleFavorite }) {
  const handleFavouriteClick = () => {
    handleToggleFavorite(id);
  };

  return (
    <div className="card" key={id}>
      <div className="card-content">
        <div className="card-header">
          <FontAwesomeIcon icon={faStar} className="star-icon" />
          <span className="dashboard-name">{dashboardName}</span>
          <span
            className={isFavourite ? 'favorite-icon active' : 'favorite-icon'}
            onClick={handleFavouriteClick}
          ></span>
        </div>
      </div>
    </div>
  );
}

export default Card;