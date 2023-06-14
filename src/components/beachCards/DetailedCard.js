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
        handleInfo("date", new Date(date?.$d).valueOf());
        handleInfo("locationId", cardId);
    };

    return (
        <>
            <div>
                <Datepicker
                    updateDate={(newValue) => handleDateAndHours(newValue)}
                />
            </div>

            <section className="text-contrastOffWhite font-robotoThin px-3 py-6">
                <p>{description}</p>
            </section>

            <div className="flex justify-center items-end py-4">
                <button
                    onClick={postGame}
                    className="bg-dark-blue rounded-3xl w-48 h-8 text-contrastOffWhite  font-robotoRegular"
                >
                    Marcar evento
                </button>
            </div>
        </>
    );
}
