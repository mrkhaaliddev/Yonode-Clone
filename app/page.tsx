// import Image from "next/image";
import Clients from "./components/Clients";
import GetStarted from "./components/GetStarted";
import Works from "./components/Works";

export default function Home() {
  return (
    <div>
      <GetStarted />
      <Works />
      <Clients />
    </div>
  );
}
