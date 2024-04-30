import Head from "next/head";
import Image from "next/image";
import { Inter, Barlow } from "next/font/google";
import Lenis from "@studio-freight/lenis"
import Layout from "@/layout"
import cn from "clsx"
import s from "./home.module.scss"
import AceOff from "@/components/AceOff";
import Title from "@/components/Title"
import Header from "@/components/Header";
import CustNavbar from "@/components/CustNavbar";
import Why from "@/components/Why";
import CardFront from "@/components/CardFront";
import Stats from "@/components/Stats";
import Introduction from "@/components/Introduction";

const inter = Inter({ subsets: ["latin"] });
//             <h2 className={cn("h3", s.radSlogan, inter.className)}>Defeating the education gap</h2>
export default function Home() {
  return (
    <>
      <Layout>
        <div className={cn(s.container, inter.className)}>
            <CustNavbar/>
            <Header/>
            <Stats/>
            <Introduction/>
            <Why/>
        </div>
      </Layout>
    </>
  );
}

//sustainability!!!!