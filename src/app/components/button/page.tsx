import React from 'react';

interface ButtonProps {
    value: string;
}

const Button: React.FC<ButtonProps> = ({ value }) => {
    value === 'Login' ? '' : 'px-2 py-2 rounded-lg text-white '
    return (
        <button className={`
        px-2 py-2  text-white bg-[#4CAF4F] ${value === 'Login' ? 'text-black bg-transparent' :value === 'SignUp' ?'rounded-lg' :'px-10 py-3 rounded-md'}
        `}>
            {value}
        </button>
    );
};

export default Button;

