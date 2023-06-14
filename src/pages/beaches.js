import Card from "@/components/beachCards/Card";
import React, { useEffect, useState } from "react";

export default function Beaches() {
    const [confirmation, setConfirmation] = useState(false);
    const [beachesAvailable, setBeachesAvailable] = useState();
    const [dataToSend, setDataToSend] = useState({
        date: "",
        locationId: "",
        participants: "",
    });

    const handleStateChange = (field, value) => {
        setDataToSend((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const fetchData = async () => {
        const res = await fetch("api/beaches/");
        const data = await res.json();
        console.log(data)
        return data;
    };

    /*     GETS DATA FROM FIELDS */

    useEffect(() => {
        (async () => {
            const beaches = await fetchData();
            setBeachesAvailable(beaches);
        })();
    }, []);

    const postGame = async () => {
        const res = await fetch("/api/games/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataToSend),
        });

        const data = await res.json();

        const status = res.status;
        if (status === 201) {
            toast.success("Evento!", {
                position: "bottom-center",
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else if (status === 401) {
            toast.error(data.msg, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    return (
        <div className="flex flex-col items-center">
            <ul className="mb-24 z-30">
                {beachesAvailable?.map((ele) => (
                    <li key={ele._id}>
                        <Card
                            cardId={ele._id}
                            image={ele.img}
                            dificulty={ele.dificulty}
                            name={ele.name}
                            location={ele.location}
                            address={ele.address}
                            description={ele.description}
                            handleInfo={(field, value) =>
                                handleStateChange(field, value)
                            }
                            postGame={postGame}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
