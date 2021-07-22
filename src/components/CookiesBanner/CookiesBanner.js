import React, { useState } from 'react'

const CookiesBanner = () => {
   const [hide, setHide] = useState("cookies-container")

   const handleOk = () => {
      document.cookie = "CookieBy=Nova; max-age=" + 60;

      if (document.cookie) {
         setHide("cookies-container-hide")
      }

   };

   return (
      <div className={hide}>
         <img src="info.svg" alt="info" />
         <h4>This website uses cookies</h4>
         <button className="btn" onClick={handleOk}>OK</button>
      </div>
   )
}

export default CookiesBanner
