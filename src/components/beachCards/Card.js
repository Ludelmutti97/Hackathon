import Image from "next/image";
import { motion } from "framer-motion";
import { use, useEffect, useState } from "react";
import DetailedCard from "./DetailedCard";

import Location from "../Location";


export default function Card({
  image,
  dificulty,
  name,
  location,
  cardId,
  description,
  postGame,
  handleInfo,
}) {


    const tagColor = {
        Fácil: "verde",
        Médio: "amarelo",
        Difícil: "vermelho",
    };
    console.log(tagColor[dificulty]);
    const [open, setOpen] = useState(false);
    const hostId = "6479ec3f1de2044d9892aaba";


  useEffect(() => {
    handleInfo("hostId", hostId);
  }, []);



    return (
        <>
            <motion.div
                animate={{
                    height: open ? "fit-content" : "fit-content",
                }}
                className="w-[175px] p-1 bg-card-color border-solid border border-opacity-10 flex flex-col rounded-lg items-center  my-4"
            >
                <div className="relative w-full h-[125px]">
                    <Image
                        onClick={() => setOpen((prevState) => !prevState)}
                        src={image}
                        width={300}
                        height={0}
                        alt="Fotografia praias"
                    />

                    <div
                        className={`absolute w-[70px] h-[20px] bg-${tagColor[dificulty]} bottom-0 left-3 rounded-md`}
                    >
                        <p className="text-center text-sm text-branco font-robotoRegular">
                            {dificulty}
                        </p>
                    </div>
                </div>

                <div className="flex w-full p-3 justify-between z-10">
                    <div className="">
                        <h2 className="text-navBar  text-m font-robotoBold">
                            {name}
                        </h2>

                        <span className="flex items-center text-navBar font-robotoRegular text-sm">
                            <Location />
                            {location}
                        </span>
                    </div>
                </div>

                {open && (
                    <motion.div
                        initial={{ opacity: 0, translateY: 10, zIndex: 0 }}
                        animate={{
                            opacity: open ? 1 : 0,
                            translateY: open ? 0 : 40,
                            zIndex: 20,
                        }}
                        transition={{ duration: 0.4 }}
                        className="text-contrastOffWhite relative"
                    >
                        <DetailedCard
                            cardId={cardId}
                            handleInfo={(field, value) =>
                                handleInfo(field, value)
                            }
                            description={description}
                            postGame={postGame}
                        />
                    </motion.div>
                )}
            </motion.div>
        </>
    );

}
