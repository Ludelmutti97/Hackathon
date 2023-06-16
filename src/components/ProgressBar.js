import React from "react";
import Image from "next/image";
import prenda from "#/svg/prenda.svg";
const ProgressBar = ({ value }) => {
    const levels = 10;
    const max = 10;
    const filledLevels = Math.ceil((value / max) * levels);
    const emptyLevels = levels - filledLevels;

    const filledLevelWidth = `${(100 / levels) * filledLevels}%`;
    const emptyLevelWidth = `${(100 / levels) * emptyLevels}%`;

    return (
        <>
<<<<<<< HEAD
            <h3 className="font-robotoRegular">O Meu Progresso</h3>
            <div className="w-full h-2 flex items-center gap-2 ">
                
                <div className="w-full rounded-full flex items-center h-2 ">
=======

            <div className="w-full h-2 flex items-center gap-2">

                <div className="w-full rounded-full flex items-center h-2">

>>>>>>> 057a63084f9c2e4c3677dd51aea98bdd05c01bd5
                    {[...Array(filledLevels)].map((_, index) => (
                        <div
                            className="filled-level z-10 bg-navBar h-2"
                            style={{ width: filledLevelWidth }}
                            key={index}
                        ></div>
                    ))}

                    {[...Array(emptyLevels)].map((_, index) => (
                        <div
                            className="empty-level h-2 bg-branco "
                            style={{ width: emptyLevelWidth }}
                            key={index}
                        ></div>
                    ))}
                </div>
            <div className="justify-center">
            <Image
              src={prenda}
              width={20}
              height={25}

              alt="follow"
            />
          </div>
            </div>
        </>
    );
};

export default ProgressBar;