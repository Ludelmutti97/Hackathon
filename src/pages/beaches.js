import Card from "@/components/beachCards/Card";
import React, { useState } from "react";

export default function Beaches() {
    const [confirmation, setConfirmation] = useState(false);
    const [beaches, setBeaches] = useState([
        {
            name: "Praia de Matosinhos",
            location: "Matosinhos",
            dificulty: "Fácil",
            address: "Av. Gen. Norton de Matos, 4450-208 Matosinhos",
            events: [],
            img: "/../public/images/matosinhos.png",
            description:
                "Vasta extensão de praia de areia com zonas para praticar surf, nadar e apanhar banhos de sol, além de vista para o pôr do sol.",
        },
    ]);
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

    // const fetchData = async () => {
    //     const res = await fetch("api/beaches/");
    //     const data = await res.json();
    //     return await data;
    // };

    // /*     GETS DATA FROM FIELDS */

    // useEffect(() => {
    //     (async () => {
    //         const beaches = await fetchData();
    //         setBeaches(fields);
    //     })();
    // }, []);

    // const postGame = async () => {
    //     const res = await fetch("/api/jogos/", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(dataToSend),
    //     });

    //     const data = await res.json();

    //     const status = res.status;
    //     if (status === 201) {
    //         toast.success("Evento!", {
    //             position: "bottom-center",
    //             autoClose: 1500,
    //             hideProgressBar: true,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "light",
    //         });
    //     } else if (status === 401) {
    //         toast.error(data.msg, {
    //             position: "bottom-center",
    //             autoClose: 3000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "light",
    //         });
    //     }
    // };

    return (
        <div className="flex flex-col items-center">
            <ul className="mb-24 z-30">
                {beaches?.map((ele) => (
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
                            // postGame={postGame}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
