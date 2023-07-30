import React, { Suspense } from "react";
import styled from "styled-components";
import * as THREE from "three";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Trail, OrbitControls, Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import "../landingpage.css"

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 98%;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

// const Left = styled.div`
//   flex: 2;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 20px;

//   @media only screen and (max-width: 768px) {
//     flex: 1;
//     align-items: center;
//   }
// `;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  position: relative; 
  z-index: 1; 

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
      font-size: 70px;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

  @media only screen and (max-width: 768px) {
  font-size: 55px;

    text-align: center;
  }

`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 190px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// const Right = styled.div`
//   flex: 3;
//   position: relative;
//   @media only screen and (max-width: 768px) {
//     flex: 1;
//     width: 100%;
//   }
// `;
const Right = styled.div`
  flex: 2;
  position: relative;
  z-index: 0; 
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;


// function ShootingStar() {
//   const ref = useRef();
//   useFrame((state) => {
//     const t = state.clock.getElapsedTime() * 2;
//     ref.current.position.set(
//       Math.sin(t) * 4,
//       Math.atan(t) * Math.cos(t / 2) * 2,
//       Math.cos(t) * 4
//     );
//   });
//   return (
//     <Trail
//       width={2}
//       length={8}
//       color={new THREE.Color(2, 1, 10)}
//       attenuation={(t) => t * t}
//     >
//       <mesh ref={ref}>
//         <sphereGeometry args={[0.25]} />
//         <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
//       </mesh>
//     </Trail>
//   );
// }

/*---------------------------------------ENTRY POINT -  MAIN FUNCTION-------------------------------- */


function Psprompt() {
  const problemsStats = [
    { id: 1, ps: "DUMMY1", desc: "des1" },
    { id: 2, ps: "DUMMY2", desc: "des2" },
    { id: 3, ps: "DUMMY3", desc: "des3" },
  ];
  return (
    <Section>
      <Container>
        <div className="landingpage">
          <div class="video-bg" >
            {/* <Right> */}
            {/* <Canvas camera={{ position: [0, 0, 15] }}>
              <color attach="background" args={["black"]} />
              <ambientLight intensity={1} />
              <ShootingStar />
              <Stars saturation={false} count={400} speed={0.5} />
              <OrbitControls />
              <EffectComposer>
                <Bloom mipmapBlur luminanceThreshold={1} />
              </EffectComposer>
            </Canvas> */}
            {/* </Right> */}
          </div>
          <div className="bg-overlay"></div>
          <div className="home-text">
            {/* <Left> */}
            <Title>Problem Statements</Title>
            <Subtitle>
              Coming Soon....
              {/*--------------- Optional-------------*/}


              {/* <ul>
              {problemsStats.map((prob) => (
                <div key={prob.id}>
                  <h3>{prob.ps}</h3>
                  <h5>{prob.desc}</h5>
                </div>
              ))}
            </ul> */}

            </Subtitle>

            {/* <Subtitle>
          <a href="https://drive.google.com/file/d/1lSdW5UhYHZCi1z-PHuAqA76jmLflb6Cc/view?usp=sharing" target="_blank">
          <Button>PROBLEM STATEMENTS</Button>
         </a> 
          </Subtitle> */}

            <Timer />
            {/* </Left> */}
          </div>
        </div>


      </Container>
    </Section>
  );
}

export default Psprompt;

/* -------------------------------------------TIMER FOR HACKATHON CODE-------------------------------*/

const Timer = () => {
  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  const deadline = "Sept, 15, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  React.useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="timer"
      role="timer"
      style={{
        backgroundColor: "purple",
        display: "inline-block",
        marginTop: "25px",
        padding: "10px",
        textAlign: "center",
        width: "400px",
        borderRadius: "20px"
      }}
    >
      <div
        className="col-4"
        style={{ width: "25%", float: "left", cursor: "pointer" }}
      >
        <div
          className="box"
          style={{
            borderRight: "1px solid rgba(255,255,255,0.2)",
            fontWeight: "300",
            padding: "10px",
          }}
        >
          <p id="day">{days < 10 ? "0" + days : days}</p>
          <span className="text">Days</span>
        </div>
      </div>
      <div
        className="col-4"
        style={{ width: "25%", float: "left", cursor: "pointer" }}
      >
        <div
          className="box"
          style={{
            borderRight: "1px solid rgba(255,255,255,0.2)",
            fontWeight: "300",
            padding: "10px",
          }}
        >
          <p id="hour">{hours < 10 ? "0" + hours : hours}</p>
          <span className="text">Hours</span>
        </div>
      </div>
      <div
        className="col-4"
        style={{ width: "25%", float: "left", cursor: "pointer" }}
      >
        <div
          className="box"
          style={{
            borderRight: "1px solid rgba(255,255,255,0.2)",
            fontWeight: "300",
            padding: "10px",
          }}
        >
          <p id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
          <span className="text">Minutes</span>
        </div>
      </div>
      <div
        className="col-4"
        style={{ width: "25%", float: "left", cursor: "pointer" }}
      >
        <div className="box" style={{ fontWeight: "300", padding: "10px" }}>
          <p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
          <span className="text">Seconds</span>
        </div>
      </div>
    </div>
  );
};
