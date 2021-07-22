import React, { useState, useEffect } from 'react';

import FloatingMenu from '../FloatingMenu/FloatingMenu';

const tableData = [
   {
      id: 1,
      name: "Table 01",
      category: "Category 01",
      availability: "Available",
      arrival: "Arrived",
   },
   {
      id: 2,
      name: "Table 02",
      category: "Category 02",
      availability: "FULL",
      arrival: "Hasn't Arrived",
   },
   {
      id: 3,
      name: "Table 03",
      category: "Category 03",
      availability: "Available",
      arrival: "Arrived",
   },
   {
      id: 4,
      name: "Table 04",
      category: "Category 04",
      availability: "FULL",
      arrival: "Arrived",
   },
]

const TableSection = () => {
   const [guests, setGuests] = useState([]);
   const [showFloat, setShowFloat] = useState(false);
   const [checkGuest, setCheckGuest] = useState([]);

   useEffect(() => {
      setGuests(tableData);
   }, []);

   const handleChange = (e) => {
      const { name, checked } = e.target;
      let tempGuest = [];

      if (name === "selectAll") {
         tempGuest = guests.map(g => {
            return { ...g, isChecked: checked };
         });

         setGuests(tempGuest);
      } else {
         tempGuest = guests.map(g => g.name === name ? { ...g, isChecked: checked } : g);

         setGuests(tempGuest);
      }
   }

   const handleCheckGuest = () => {
      let tempChecked = guests.filter(tc => tc.isChecked === true);
      // console.log(tempChecked);
      if (tempChecked.length > 0) {
         setShowFloat(true)
      } else {
         setShowFloat(false);
      }
      return tempChecked;
   }

   useEffect(() => {
      setCheckGuest(handleCheckGuest());
   }, [guests]);

   return (
      <div className="table-container">
         <table className="table-title">
            <thead>
               <tr>
                  <th>
                     <span className="custom-checkbox">
                        <input
                           type="checkbox"
                           name="selectAll"
                           checked={guests.filter((g) => g?.isChecked !== true).length < 1}
                           onChange={handleChange}
                        />
                        <label></label>
                     </span>
                  </th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Availability</th>
                  <th>Arrival</th>
               </tr>
            </thead>
            <tbody>
               {guests.map(td => (
                  <tr key={td.id}>
                     <td>
                        <span className="custom-checkbox">
                           <input
                              type="checkbox"
                              name={td.name}
                              checked={td?.isChecked || false}
                              onChange={handleChange} />
                           <label></label>
                        </span>
                     </td>
                     <td>{td.name}</td>
                     <td>{td.category}</td>
                     <td>{td.availability}</td>
                     <td>{td.arrival}</td>
                  </tr>
               ))}
            </tbody>
         </table>
         {showFloat && <FloatingMenu guests={guests} setGuests={setGuests} setShowFloat={setShowFloat} checkGuest={checkGuest} />}
      </div>
   )
}

export default TableSection
