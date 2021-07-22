import React from 'react'

const FloatingMenu = ({ guests, setGuests, setShowFloat, checkGuest }) => {

   const handleClose = () => {
      setShowFloat(prev => !prev);
   }

   const handleDelete = () => {
      const deleteGuest = guests.filter(guest => guest.isChecked !== true);
      setGuests(deleteGuest);
   }

   return (
      <div className="floating-container">
         <div>
            <button className="btn btn-close" onClick={handleClose}>
               <img src="close.svg" alt="close" />
            </button>
         </div>
         <div>
            <h3>{checkGuest.length} Table Selected</h3>
         </div>
         <div>
            <button className="btn btn-primary">
               <img src="assign.svg" alt="assign" /> Assign Category
            </button>
         </div>
         <div>
            <button className="btn btn-secondary" onClick={handleDelete}>
               <img src="delete.svg" alt="delete" /> Delete Table
            </button>
         </div>
      </div>
   )
}

export default FloatingMenu
