import React from 'react';

interface ButtonProps {
    value: string;
}

const Button: React.FC<ButtonProps> = ({ value }) => {
    return (
        <button className={value === 'Login' ? 'px-2 py-2 ' : 'px-2 py-2 rounded-lg text-white bg-[#4CAF4F]'}>
            {value}
        </button>
    );
};

export default Button;

