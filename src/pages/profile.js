import Navbar from "@/components/Navbar";
import { use, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Profile(props) {
    const userId = "6479ec3f1de2044d9892aaba";
    const [userInfo, setUserInfo] = useState();
    const router = useRouter();

    const fetchData = async (uid) => {
        const res = await fetch(`/api/users/${uid}`);
        const data = await res.json();
        setUserInfo(data);
    };

    useEffect(() => {
        fetchData(userId);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center overflow-hidden pt-3">
            <div className="flex flex-col items-center text-contrastOffWhite pt-8  ">
                <div className=" rounded-full w-[144px] h-[144px] border-b border-r border-primaryBlue flex intems-center justify-center  text-center ">
                    <Image
                        width={150}
                        height={132}
                        src={userInfo?.img}
                        className="rounded-full"
                    />
                </div>

                <div className=" text-2xl pt-5">
                    <span className="block text-center font-robotoBold">
                        {userInfo?.name.split(" ")[0]}
                    </span>
                    <span className="font-robotoBold ">
                        {userInfo?.name.split(" ")[1]} {userInfo?.age}{" "}
                        {userInfo?.nationality}
                    </span>
                </div>
                <div className="space-y-3 mt-10 flex flex-col items-center justify-center">
                    <div className="flex flex-col gap-3 text-center pb-5 ">
                        <div class="w-full flex items-center relative rounded-full h-2.5 bg-dark-blue">
                            <div className="absolute  bg-blue-600 h-2.5 rounded-full w-[50%]"></div>
                            <div className=" w-full flex items-center justify-around z-20">
                                <div className="rounded-full h-4 w-4 bg-dark-blue"></div>
                                <div className="rounded-full h-4 w-4 bg-dark-blue"></div>
                                <div className="rounded-full h-4 w-4 bg-dark-blue"></div>
                                <div className="rounded-full h-4 w-4 bg-dark-blue"></div>
                                <div className="rounded-full h-4 w-4 bg-dark-blue"></div>
                            </div>
                        </div>

                        <div
                            onClick={() => router.push("/login")}
                            className="text-contrastOffWhite  w-72 h-12 flex items-center justify-center rounded-full bg-primaryDarkerBlue text-center font-robotoRegular "
                        >
                            <span>Logout</span>
                        </div>
                    </div>
                    <div className="h-[1px]  w-48 border-t opacity-50 "></div>
                    <div className="space-y-4 pt-4 text-xs flex items-center justify-center ">
                        <div className="text-contrastOffWhite  flex flex-col items-center justify-center gap-2   ">
                            <Link href={"/aboutus"}>
                                <span className="opacity-50">Sobre Nós</span>
                            </Link>
                            <Link href={"/terms"}>
                                <span className="opacity-50">
                                    Termos e Condições
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Navbar page={"profile"} />
        </div>
    );
}
