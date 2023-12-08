import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Experience from "./canvas/Experience";
import { Section_four, Section_one, Section_three, Section_two } from "./components";

function App() {
  return (
    <div className="main">
      <div className="h-screen w-full fixed top-0 z-10 hidden lg:block">
        <Experience />
      </div>
      <Section_one />
      <Section_two />
      <Section_three />
      <Section_four />
    </div>
  );
}

export default App;
