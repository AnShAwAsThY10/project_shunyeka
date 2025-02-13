import { useReactFlow } from '@xyflow/react';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { initialNodes } from '../App';

const PaymentProviders = [
    { code: "St", name: "Stripe" },
    { code: "Gp", name: "Google Pay" },
    { code: "Ap", name: "Apple Pay" },
    { code: "Pp", name: "Paypal" },
    { code: "Am", name: "Amazon Pay" },
    { code: "Pt", name: "Paytm" }
];

export default function PaymentProviderSelect() {
    const { setNodes } = useReactFlow(initialNodes);
    const [selectedProvider, setSelectedProvider] = useState();

    const onProviderClick = ({ name, code }) => {
        const location = Math.random() * 500;
        const id = uuidv4();
        setNodes((prevNodes) => [
            ...prevNodes,
            {
                id: id,
                data: { name, code , id:id},
                type: "paymentProvider",
                position: { x: location, y: location }
            }
        ]);
        console.log(initialNodes);
    };

    const handleChange = (event) => {
        const selectedIndex = parseInt(event.target.value, 10);
        setSelectedProvider(event.target.value); // Store the selected value in state
        if (selectedIndex >= 0 && selectedIndex < PaymentProviders.length) {
            onProviderClick(PaymentProviders[selectedIndex]);
        }
    };

    return (
        <>
            <p>Select a Payment Provider</p>
            <select
                className="menu-list"
                onChange={handleChange}
                value={selectedProvider} // Set the selected value to maintain state
            >
                <option value="" disabled>
                    -- Select a Payment Provider --
                </option>
                {PaymentProviders.map((provider, index) => (
                    <option key={provider.code} value={index}>
                        {provider.name}
                    </option>
                ))}
            </select>
        </>
    );
}
