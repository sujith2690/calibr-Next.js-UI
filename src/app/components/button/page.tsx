import React from 'react';

interface ButtonProps {
    value: string;
}

const Button: React.FC<ButtonProps> = ({ value }) => {
    value === 'Login' ? '' : 'px-2 py-2 rounded-lg text-white '
    return (
        <button
            className='px-5 py-2 text-white bg-[#4CAF4F] rounded-sm text-sm'>
            {value}
        </button>
    );
};

export default Button;

