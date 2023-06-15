import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import waves from "#/svg/waves.svg"
import board from "#/svg/board.svg"
import user from "#/svg/user.svg";


export default function Navbar({ page }) {
  const [selected, setSelected] = useState("profile");
  const handleClick = () => {
    setSelected((prevState) => page);
  };

  useEffect(() => {
    handleClick();
  }, [selected]);

  
  return (
    <nav className="fixed bottom-0 z-50 w-full">
      <div className="flex justify-around py-4 w-full bg-dark-blue items-center">
        <Link href="/beaches">
          <div onClick={handleClick}>
            <Image
              src={waves}
              width={32}
              height={32}
              alt="follow"
            />
          </div>
        </Link>

        <Link href="/events">
          <div onClick={handleClick}>
            <Image
              src={board}
              width={32}
              height={32}
              alt="follow"
            />
          </div>
        </Link>
        <Link href="/profile">
          <div onClick={handleClick}>
            <Image
              src={user}
              width={32}
              height={32}
              alt="follow"
            />
          </div>
        </Link>
      </div>
    </nav>
  );
}
