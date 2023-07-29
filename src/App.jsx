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

const Container = styled.div`
  height: 100vh;
  padding:10;
  align-items: center;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {
  return (
   // <h1>HI</h1>
   <Container>
   {/* Registration Prompt Mujherjee*/}
   <Hero />
   {/* About Aryav*/}
   <About/>
   {/* Itenary MEET*/}
   <Itenary/>
   {/* Domains ARCHIE*/}
   <Domains/>
   {/* Sponsors Pankaj*/}
   <Spons/>
   {/* PS Prompt Sakshi*/}
   <Psprompt/>
   {/* Past Events Archives HARSH*/}
   <Past />
   {/* FAQs Sid*/}
   <Faq />
   <Works/>
 </Container>
);
}

export default App;
