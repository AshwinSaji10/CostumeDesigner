import React from "react";

const CustomButton = ({ title, handleClick }) => {
    return (
        <button className="px-2 py-2 rounded-md outline-double" onClick={handleClick}>
            {title}
        </button>
    );
};

export default CustomButton;
