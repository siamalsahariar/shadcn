import Fooeter from "@/components/Fooeter";
import Header from "@/components/Header";
import Register from "@/components/Register";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Register />
      <Fooeter />
    </>
  );
}
