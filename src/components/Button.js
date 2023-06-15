import { Router, useRouter } from "next/router";

export default function Button({ text, border, color, path }) {
    const router = useRouter();

 
    return (
        <button
            className={`rounded-full w-64 h-9 text-base text-contrastOffWhite font-robotoRegular bg-${
                color ? color : "transparent"
            } ${border && "border border-contrastOffWhite border-opacity-60"}`}
        >
            {text}
        </button>
    );
}
