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
import Features from "@/components/Features";
import { useLenis } from "@studio-freight/react-lenis";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });
//             <h2 className={cn("h3", s.radSlogan, inter.className)}>Defeating the education gap</h2>
export default function Home() {
  
  const lenis = useLenis()
  const introRef = useRef()

    const learnMoreFunc = () => {
        console.log(introRef.current)
        lenis.scrollTo(introRef.current, {
          offset: 0, // Offset from the top (in pixels)
          duration: 1.5, // Duration of the scroll animation (in seconds)
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
        });
    }

  return (
    <>
      <Layout>
        <div className={cn(s.container, inter.className)}>
            <Header scrollFunc={learnMoreFunc} />
            <Stats/>
            <Introduction inputRef={introRef} />
            <Why/>
            <Features/>
        </div>
      </Layout>
    </>
  );
}

//sustainability!!!!