'use client';

import Nav from "./navbar/Nav";
import CommPage from "./community/Community";
import Main from "../app/main/Main";
import GalaxyBackground from "./Galaxy/Galaxy";   
import 'animate.css';
import Economy from "./economy/Economy"
import Inter from "./Interchain/Inter"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
   
      <Nav />
      <Main />
      <CommPage />
      <Inter  />
      < Economy />
    </div>
  );
}
