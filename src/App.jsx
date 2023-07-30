import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import About from "./components/additions/About";
import Past from "./components/additions/Past";
import Faq from "./components/additions/Faq";
import Spons from "./components/additions/Spons";
import Psprompt from "./components/additions/Psprompt";
import Domains from "./components/additions/Domains";
import Itenary from "./components/additions/Itenary";
import Landingpage from "./components/landingpage";
import React from "react";
import './components/landingpage.css'
import BgVideo from './components/media/bg.mp4'

const Container = styled.div`
  height: 100vh;
  padding: 10;
  align-items: center;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: black;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <>
      <div className="landingpage">
        <video src={BgVideo} autoPlay muted loop class="video-bg" />
        <div className="bg-overlay"></div>
        <div className="home-text">
          <Container>
            {/* Registration Prompt Mujherjee */}
            <Hero />
            {/* About Aryav */}
            <About />
            {/* Itenary MEET */}
            <Itenary />
            {/* Domains ARCHIE */}
            <Domains />
            {/* Sponsors Pankaj */}
            <Spons />
            {/* PS Prompt Sakshi */}
            <Psprompt />
            {/* Past Events Archives HARSH */}
            <Past />
            {/* FAQs Sid */}
            {/* <Faq /> */}
            {/* <Works /> */}
          </Container>
        </div>
      </div>

    </>
  );
}

export default App;
