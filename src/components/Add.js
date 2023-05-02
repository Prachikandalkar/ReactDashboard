import React, { useState } from 'react';
import './Add.css';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons';


function FloatingPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [dashboardType, setDashboardType] = useState('');
  const [dashboardGroup, setDashboardGroup] = useState('');
  const [dashboardName, setDashboardName] = useState('');
  const [dashboardId, setDashboardId] = useState('');
  const [roleId, setRoleId] = useState('');

  const [cards, setCards] = useState([]);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  function handleDashboardTypeChange(event) {
    setDashboardType(event.target.value);
  }

  function handleDashboardGroupChange(event) {
    setDashboardGroup(event.target.value);
  }

  function handleDashboardNameChange(event) {
    setDashboardName(event.target.value);
  }

  function handleDashboardIdChange(event) {
    setDashboardId(event.target.value);
  }

  function handleRoleIdChange(event) {
    setRoleId(event.target.value);
  }

  function handleSave() {
    const newCard = {
      id: cards.length + 1,
      dashboardType,
      dashboardGroup,
      dashboardName,
      dashboardId,
      roleId,
      isFavourite: false
    };

    setCards([...cards, newCard]);

    handleClose();
  }
  const handleToggleFavorite = (id) => {
    const updatedCards = cards.map((card) =>
      card.id === id ? { ...card, isFavourite: !card.isFavourite } : card
    );
    setCards(updatedCards);
  };
  

  return (
    <div>
      {/* <button onClick={handleOpen}>Open Floating Page</button> */}
      <button onClick={handleOpen} className="add-button"> <FontAwesomeIcon icon={faPlus} />  <a> Add</a> </button>

      {isOpen &&
        <div className="floating-page">
          <button className="close-button" onClick={handleClose}>X</button>
          <label>
            Dashboard Type:
            <select value={dashboardType} onChange={handleDashboardTypeChange}>
              <option value="">Select</option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
            </select>
          </label>

          <label>
            Dashboard Group:
            <select value={dashboardGroup} onChange={handleDashboardGroupChange}>
              <option value="">Select</option>
              <option value="Test Demo">Test Demo</option>
              <option value="Page Builder Demo">Page Builder Demo</option>
              <option value="Metabase">Metabase</option>
            </select>
          </label>

          <label>
            Dashboard Name:
            <select value={dashboardName} onChange={handleDashboardNameChange}>
              <option value="">Select</option>
              <option value="Dashboard">Dashboard 1</option>
              <option value="Dashboard ">Dashboard 2</option>
              <option value="Dashboard">Dashboard 3</option>
              <option value="Dashboard">Dashboard 4</option>
            </select>
          </label>
          <label>
            Dashboard ID:
            <select value={dashboardId} onChange={handleDashboardIdChange}>
              <option value="">Select</option>
              <option value="id1">1</option>
              <option value="id2">2</option>
              <option value="id3">3</option>
              <option value="id4">4</option>
            </select>
          </label>
          <label>
            Role ID:
            <select value={roleId} onChange={handleRoleIdChange}>
              <option value="">Select</option>
              <option value="role1">Role ID 1 </option>
              <option value="role2">Role ID 2</option>
              <option value="role3">Role ID 3</option>
              <option value="role4">Role ID 4</option>
            </select>
            </label>
            <button onClick={handleClose}>Cancel</button>
            <button onClick={handleSave}>Save</button>
      </div>
   }
   
    {cards.map((card) => (
        <div className="card" key={card.id}>
        <FontAwesomeIcon icon={faStar} className="star-icon" />
        <div className="card-content">
        <div className="card-header">
        
        <span className="dashboard-name">{card.dashboardName}</span>
        <span
        className={card.isFavourite ? "favorite-icon active" : "favorite-icon"}
        onClick={() => handleToggleFavorite(card.id)}
        >
        
        </span>
        </div>
<div className="dashboard-group">{card.dashboardGroup}</div>
</div>
</div>
))}
</div>
);
}

export default FloatingPage;