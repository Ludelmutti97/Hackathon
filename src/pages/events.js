import EventCard from "@/components/EventCard";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { motion, LayoutGroup, AnimateSharedLayout } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";

const buttons = [
    { label: "Dia", value: "day" },
    { label: "Semana", value: "week" },
    { label: "Mês", value: "month" },
];

export default function Events(props) {
    const [gamesScheduled, setGamesScheduled] = useState([]);
    const [selected, setSelected] = useState("day");
    const [signed, setSigned] = useState(false);

    const fetchData = async () => {
        const res = await fetch(`/api/jogos/?date=${selected}`);
        const data = await res.json();
        setGamesScheduled(await data);
    };

    useEffect(() => {
        (async () => {
            await fetchData();
        })();
    }, [selected]);

    const signToGame = async (uid, gid) => {
        const res = await fetch(`/api/jogos/${gid}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ uid, gid }),
        });

        const data = await res.json();
        console.log(res.status);
        if (res.status === 201) {
            toast.success("Boa! Inscreveste-te no jogo!", {
                position: "bottom-center",
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else if (res.status === 401) {
            toast.error("Já estás inscrito neste jogo!", {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setSigned((prevState) => !prevState);
        }

        fetchData(selected);
    };

    const unsubscribePlayer = async (uid, gid) => {
        const res = await fetch(`/api/jogos/unsubscribe/${gid}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ uid, gid }),
        });

        const data = await res.json();
        console.log(res.status);
        if (res.status === 201) {
            toast.success(":(", {
                position: "bottom-center",
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        fetchData(selected);
    };

    return (
        <div className="bg-lightest-blue h-screen w-screen">
            <div className="flex justify-center p-8">
                <div
                    className="bg-primaryDarkerBlue w-[310px] h-[42
                    8px] rounded-full flex justify-center items-center font-robotoRegular text-contrastOffWhite py-2"
                >
                    <motion.div className="flex  bg-dark-blue rounded-full p-2 w-[290px] justify-center">
                        {buttons.map((el, i) => (
                            <MenuItem
                                text={el.label}
                                key={i}
                                selected={selected === el.value}
                                onClick={() => setSelected(el.value)}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className="flex flex-col ">
                <div className="flex flex-col items-center mb-24">
                    {gamesScheduled &&
                        gamesScheduled?.map((ele) => (
                            <div>
                                <EventCard
                                    key={ele._id}
                                    gameId={ele._id}
                                    fieldId={ele.locationId}
                                    numPlayer={ele.participants}
                                    participants={ele.playersId}
                                    schedule={ele.hours}
                                    date={ele.date}
                                    signToGame={(uid, gid) =>
                                        signToGame(uid, gid)
                                    }
                                    unsubscribe={(uid, gid) =>
                                        unsubscribePlayer(uid, gid)
                                    }
                                />
                            </div>
                        ))}
                </div>
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </div>
            <Navbar page={"games"} />
        </div>
    );
}

const MenuItem = ({ text, selected, onClick }) => (
    <motion.div
        className="rounded-full w-[108px] h-[40px] flex justify-center items-center"
        layout
        onClick={onClick}
        animate={{
            opacity: selected ? 1 : 0.3,
            backgroundColor: selected ? "#ff0000" : "transparent",
        }}
    >
        {text}
        {selected && <motion.div className="underline" layoutId="underline" />}
    </motion.div>
);
