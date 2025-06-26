import { useReactFlow } from '@xyflow/react';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const PaymentCountries = [
    { countryCode: "JP", country: "Japan", currency: "¥" , cRate : 144 },
    { countryCode: "CN", country: "China", currency: "¥", cRate : 7.17 },
    { countryCode: "GB", country: "England", currency: "£",  cRate : 0.73 },
    { countryCode: "US", country: "United States", currency: "$" ,cRate : 1.0},
    { countryCode: "IN", country: "India", currency: "₹" ,cRate : 85.67},
    { countryCode: "RS", country: "Russia", currency: "₽", cRate : 78.78 }
];

export default function PaymentCountrySelect() {
    const { setNodes } = useReactFlow();
    const [selectedCountry, setSelectedCountry] = useState(""); // State for selected country

    const onCountryClick = ({ country, countryCode, currency }) => {
        const location = Math.random() * 500;
        const id = uuidv4();
        setNodes((prevNodes) => [
            ...prevNodes,
            {
                id: id,
                data: { country, countryCode, currency, id:id },
                type: "paymentcountry",
                position: { x: location, y: location }
            }
        ]);
    };

    const handleChange = (event) => {
        const selectedIndex = parseInt(event.target.value, 10);
        setSelectedCountry(event.target.value); // Store the selected value in state
        if (selectedIndex >= 0 && selectedIndex < PaymentCountries.length) {
            onCountryClick(PaymentCountries[selectedIndex]);
        }
    };

    return (
        <>
            <p>Select a Payment Country</p>
            <select
                className="menu-list"
                onChange={handleChange}
                value={selectedCountry}>
            
                <option value="" disabled>
                    -- Select a Payment Country --
                </option>
                {PaymentCountries.map((country, index) => (
                    <option key={country.countryCode} value={index}>
                        {country.country}
                    </option>
                ))}
            </select>
        </>
    );
}
