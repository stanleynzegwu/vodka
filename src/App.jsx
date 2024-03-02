import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Experience from "./canvas/Experience";
import {
  Footer,
  Navbar,
  Section_four,
  Section_one,
  Section_three,
  Section_two,
} from "./components";
import { Suspense, useLayoutEffect, useRef } from "react";

function App() {
  const vodkaVariant_pickerRef = useRef();
  useLayoutEffect(() => {
    vodkaVariant_pickerRef.current = document.getElementsByClassName("vodkaVariant_picker");
  }, []);

  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    new ScrollTrigger({});
    tl.to(vodkaVariant_pickerRef.current, {
      bottom: -110,
      scrollTrigger: {
        trigger: "#section_one",
        start: "top top",
        end: "center center",
        scrub: true,
        immediateRender: false,
        // markers: true,
      },
    });
  }, []);

  return (
    <div className="main">
      <div className="h-screen w-full fixed top-0 z-10">
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </div>
      <Navbar />
      <Section_one />
      <Section_two />
      {/* <Section_three /> */}
      <Section_four />
      <Footer />
    </div>
  );
}

export default App;
