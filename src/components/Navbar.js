import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ page }) {
  const [selected, setSelected] = useState("home");

  return (
    <nav className="flex justify-between">
      <div>
        <Link href="/">
          <Image
            src={"/../svg/appLogo.svg"}
            width={80}
            height={80}
            alt="Company Logo"
          />
        </Link>
      </div>
      <ul className="flex gap-5 items-center text-lightest-white  font-robotoRegular">
        <li>
          <Link
            className={`${
              selected === "home" ? "border-b-red-700" : "border-b-transparent"
            } transition ease-in-out W py-3 hover:border-b hover:border-b-lightest-blue hover:text-lightest-blue duration-200`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`${
              selected === "empresas"
                ? "border-b-red-700"
                : "border-b-transparent"
            } transition ease-in-out border-b border-b-transparent py-3 hover:border-b hover:border-b-lightest-blue hover:text-lightest-blue duration-200`}
            href="/empresas"
          >
            Empresas
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setSelected("aboutus")}
            className={`${
              selected === "aboutus"
                ? "border-b-red-700"
                : "border-b-transparent"
            } transition ease-in-out border-b border-b-transparent py-3 hover:border-b hover:border-b-lightest-blue  hover:text-lightest-blue duration-200`}
            href="/aboutus"
          >
            Sobre nós
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setSelected("contacts")}
            className={`${
              selected === "contacts"
                ? "border-b-red-700"
                : "border-b-transparent"
            } transition ease-in-out border-b border-b-transparent py-3 hover:border-b hover:border-b-lightest-blue  hover:text-lightest-blue duration-200`}
            href="/contacts"
          >
            Contactos
          </Link>
        </li>
      </ul>
    </nav>
  );
}
