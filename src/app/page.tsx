// this is my homepage lai de
import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/NavBar"
import Link from 'next/link'


import Login from "../pages/auth/login"


export default function Home() {
  return (
    <main>
      {/* <Login></Login> */}

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="auth/login">Login</Link>
        </li>
      </ul>
    </main>
  );
}
