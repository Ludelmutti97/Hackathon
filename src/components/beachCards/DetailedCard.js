import Datepicker from "./Datepicker";

export default function DetailedCard({
    cardId,
    description,
    postGame,
    handleInfo,
    lat,
    long,
}) {
    const handleDateAndHours = (date) => {
        handleInfo("date", new Date(moment(date?.$d).format("YYYY-MM-DD")));
        handleInfo("hours", moment(date?.$d).format("HH:mm"));
        handleInfo("locationId", cardId);
    };

    return (
        <>
            {/*    <div className="flex justify-center">
                <Box sx={{ width: 300 }}>
                    <Slider
                        aria-label="Always visible"
                        defaultValue={1}
                        onChange={(e) =>
                            handleInfo("participants", e.target.value)
                        }
                        step={1}
                        marks={options}
                        valueLabelDisplay="off"
                        min={1}
                        max={10}
                        sx={{
                            "& .css-yafthl-MuiSlider-markLabel": {
                                color: "#f4f4f9",
                            },
                            "& .css-1eoe787-MuiSlider-markLabel": {
                                color: "#0C8CE9",
                            },
                        }}
                    />
                </Box>
            </div> */}

            <div>
                <Datepicker
                    updateDate={(newValue) => handleDateAndHours(newValue)}
                />
            </div>

            <section className="text-contrastOffWhite font-robotoThin px-3 py-6">
                {/* <h5 className="font-bold pb-3">Sobre</h5>  ACHO QUE NÃO HA NECESSIDADE DE DIZER "SOBRE". TIP DA MARIA SENSUAL */}
                <p>{description}</p>
            </section>

            <div className="flex justify-center items-end py-4">
                <button
                    onClick={postGame}
                    className="bg-primaryBlue rounded-3xl w-48 h-8 text-contrastOffWhite  font-robotoRegular"
                >
                    Marcar Jogo
                </button>
            </div>
        </>
    );
}
