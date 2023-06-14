import { useState } from "react";

export default function LoginForm(props) {
    const [state, setState] = useState({ password: "", name: "" });

    async function login() {
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(state),
        });

        if (res.status === 200) {
            const corpo = await res.json();
            localStorage.setItem("token", corpo.token);
        } else {
         
           
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
    };

    const handleChange = (value, field) => {
        setState((prevState) => ({ ...prevState, [field]: value }));
    };

    return (
        <form>
            <div className="flex flex-col">
            <input
                value={state.name}
                type="text"
                onChange={(e) => handleChange(e.target.value, "name")}
                placeholder="Nome"
                className="bg-transparent placeholder-contrastOffWhite w-64 border-b p-3 border-contrastOffWhite"
            ></input>
            <input
                value={state.password}
                onChange={(e) => handleChange(e.target.value, "password")}
                type="password"
                placeholder="Senha"
                className="bg-transparent placeholder-contrastOffWhite w-64 border-b border-contrastOffWhite p-3"
            ></input>
            </div>
        </form>
    );
}
