import Navbar from "@/components/Navbar";
import { use, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ProgressBar from "@/components/ProgressBar";

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
            <div className="flex flex-col w-[60%] items-center text-contrastOffWhite pt-8  ">
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
                        {userInfo?.name.split(" ")[1]}, {userInfo?.age}{" "}
                        {userInfo?.nationality}
                    </span>
                </div>
                <div className="space-y-3 mt-10 flex w-full flex-col items-center justify-center">
                    <ProgressBar value={2} />
                </div>
            </div>

            <Navbar page={"profile"} />
        </div>
    );
}
