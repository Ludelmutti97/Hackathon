import React from "react";

const ProgressBar = ({ value }) => {
    const levels = 10;
    const max = 10;
    const filledLevels = Math.ceil((value / max) * levels);
    const emptyLevels = levels - filledLevels;

    const filledLevelWidth = `${(100 / levels) * filledLevels}%`;
    const emptyLevelWidth = `${(100 / levels) * emptyLevels}%`;

    return (
        <div className="w-full rounded-full flex items-center h-2">
            {[...Array(filledLevels)].map((_, index) => (
                <div
                    className="filled-level z-20 bg-primary-orange h-2"
                    
                    key={index}
                ></div>
            ))}

            {[...Array(emptyLevels)].map((_, index) => (
                <div
                    className="empty-level bg-dark-blue h-2"
                    style={{ width: emptyLevelWidth }}
                    key={index}
                ></div>
            ))}
        </div>
    );
};

export default ProgressBar;
