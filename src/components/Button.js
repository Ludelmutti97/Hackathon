import { Router, useRouter } from "next/router";

export default function Button({ text, border, color, path }) {
    const router = useRouter();

 
    return (
        <button
            className={`rounded-full w-64 h-9 text-base text-branco font-robotoRegular bg-loginButton
            } ${border && "border border-branco border-opacity-60"}`}
        >
            {text}
        </button>
    );
}
