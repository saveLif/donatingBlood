import React, { useState } from 'react';

const BloodGroup = () => {
    
    const [selectedRadio, setSelectedRadios] = useState("");
    const radios = ["O-", "O+", "A+", "A-", "B+", "B-", "AB+", "AB-" ];



    return <div className="bloodgroup">
        
        
        <ul>
            {radios.map((radio) => {
                return (
                    <li key={radio}>
                        <input horizontal 

                            type="radio"
                            value={radio}
                            id={radio}
                            checked={radio == selectedRadio}
                            onChange={(e) => setSelectedRadios(e.target.value)}
                    />
                    <label htmlFor={radio} >{radio}</label>
                    </li>
                );
            })}

        </ul>


    </div>;
};

export default BloodGroup;