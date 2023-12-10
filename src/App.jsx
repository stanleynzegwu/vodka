import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Experience from "./canvas/Experience";
import { Navbar, Section_four, Section_one, Section_three, Section_two } from "./components";
import { useLayoutEffect, useRef } from "react";

function App() {
  const vodkaVariant_pickerRef = useRef();
  useLayoutEffect(() => {
    vodkaVariant_pickerRef.current = document.getElementsByClassName("vodkaVariant_picker");
  }, []);

  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    new ScrollTrigger({});
    // component About.tsx
    tl.to(vodkaVariant_pickerRef.current, {
      bottom: -70,
      scrollTrigger: {
        trigger: ".section_two",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    });
  }, []);

  return (
    <div className="main">
      <div className="h-screen w-full fixed top-0 z-10 hidden lg:block">
        <Experience />
      </div>
      <Navbar />
      <Section_one />
      <Section_two />
      <Section_three />
      <Section_four />
    </div>
  );
}

export default App;
