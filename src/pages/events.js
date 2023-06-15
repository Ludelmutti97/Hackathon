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
    const [eventsScheduled, setEventsScheduled] = useState([]);
    const [selected, setSelected] = useState("day");
    const [signed, setSigned] = useState(false);

    const fetchData = async () => {
        const res = await fetch(`/api/surf/?date=${selected}`);
        const data = await res.json();
        setEventsScheduled(await data);
    };

    useEffect(() => {
        (async () => {
            await fetchData();
        })();
    }, [selected]);

    const signToEvent = async (uid, eid) => {
        const res = await fetch(`/api/surf/${eid}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ uid, eid }),
        });

        const data = await res.json();
        console.log(res.status);
        if (res.status === 201) {
            toast.success("Prepara a prancha!", {
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

    const unsubscribePlayer = async (uid, eid) => {
        const res = await fetch(`/api/surf/unsubscribe/${eid}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ uid, eid }),
        });

        const data = await res.json();
        console.log(res.status);
        if (res.status === 200) {
            toast.error("Inscrição cancelada :(", {
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
        <div className="h-screen w-screen">
            <div className="flex justify-center p-8">
                <div
                    className="bg-primaryDarkerBlue w-[310px] h-[42
                    8px] rounded-full flex justify-center items-center font-robotoRegular  py-2"
                >
                    <motion.div className="flex  bg-card-color rounded-full p-2 w-[290px] justify-center">
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
                    {eventsScheduled &&
                        eventsScheduled?.map((ele) => (
                            <div>
                                <EventCard
                                    key={ele._id}
                                    eventId={ele._id}
                                    beachId={ele.locationId}
                                    numPlayer={ele.participants}
                                    participants={ele.playersId}
                                    schedule={ele.hours}
                                    date={ele.date}
                                    signToEvent={(uid, gid) =>
                                        signToEvent(uid, gid)
                                    }
                                    unsubscribe={(uid, eid) =>
                                        unsubscribePlayer(uid, eid)
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
            <Navbar page={"events"} />
        </div>
    );
}

const MenuItem = ({ text, selected, onClick }) => (
    <motion.div
        className="rounded-full w-[108px] h-[40px] flex justify-center text-card-color items-center"
        layout
        onClick={onClick}
        animate={{
            opacity: selected ? 1 : 0.3,
            backgroundColor: selected ? "#D56A43" : "transparent",
            color: selected ? "rgba(232, 243, 214, 0.8)" : "#D56A43"
        }}
    >
        {text}
        {selected && <motion.div className="underline" layoutId="underline" />}
    </motion.div>
);
