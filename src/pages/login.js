import Button from "@/components/Button";
import LoginForm from "@/components/LoginForm";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "/@/../public/images/Logo.png";
import Image from "next/image";
export default function Login(props) {
    return (
        <div className="bg-login-bg w-screen  bg-cover bg-no-repeat bg-center h-screen">
            <div className="h-screen w-full flex flex-col items-center ">
                <div className="text-contrastOffWhite mt-24 p-10">
                    <Image justify-center width={150} height={150} src={logo} />
                </div>
                <section className="text-center mt-6">
                    <div className="m-14">
                        <LoginForm />
                    </div>

                    <div className="flex flex-col items-center gap-8">
                        <Link href={`/profile`}>
                            <Button
                                color={"primary-orange"}
                                text={"Log In"}
                                border={true}
                            />
                        </Link>
                        <Link href={`/`}>
                            <Button text={"Sign Up"} color={"primary-orange"} />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
