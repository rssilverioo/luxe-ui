import * as React from 'react';

export interface IButtonProps {
  variant?: 'primary' | 'outlined' | 'text';
  label: string;
}


export const Button: React.FC<IButtonProps> = ({
  variant = 'primary',
  label
}) => {

  let buttonClass = 'py-2 px-4 rounded-md text-sm font-medium';

  if(variant === 'primary'){
    buttonClass += 'inline-flex text-white bg-[#1976D2] hover:bg-[#1B6AD2] shadow-md delay-50 transition'
  } else if (variant === 'outlined') {
    buttonClass += ' bg-transparent text-[#1976D2] border border-[#1976D2] hover:bg-[#1976D2]/10 hover:border-[#1B6AD2] shadow-md delay-50 transition';
  } else if (variant === 'text') {
    buttonClass += 'inline-flex text-[#1976D2] hover:bg-[#1976D2]/10 delay-50 transition'; 
  }
  return (
    <>
        <button className={buttonClass}>
          {label}
        </button>
    </>
  );
};
