import { Check } from 'lucide-react';
import React from 'react';

const FeaturesCard = ({feature}) => {
    return (
        <div>
            <li className='flex gap-1'><Check className="text-green-500 bg-green-100 p-1 rounded-full"></Check> {feature}</li>
        </div>
    );
};

export default FeaturesCard;