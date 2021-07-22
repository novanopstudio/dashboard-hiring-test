import React from 'react'

const NoInternetModal = ({ setMode }) => {
   return (
      <div className="offline-container">
         <div className="offline-modal-wrapper">
            <button className="btn btn-close" onClick={() => setMode('online')}>X</button>
            <img src="offline.png" alt="No Connection" />
            <h1>No internet connection</h1>
            <p>Seems like you're not connected to the internet!</p>
            <p>Check your connection and refresh the page.</p>
         </div>
      </div>
   )
}

export default NoInternetModal
