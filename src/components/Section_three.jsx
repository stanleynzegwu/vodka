import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";

const Section_three = () => {
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Compare current scroll position with previous scroll position
      if (currentScrollY > prevScrollY.current) {
        // Scrolling down
        console.log("Scrolling down");
      } else if (currentScrollY < prevScrollY.current) {
        // Scrolling up
        console.log("Scrolling up");
      }

      // Update previous scroll position
      prevScrollY.current = currentScrollY;
    };

    // Event listener for scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup: Remove event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="top-0 left-0 h-screen w-full bg-green-400 z-20" id="section_three">
      <div className="flex h-[100vh] w-[100%]">
        {/* STICKY */}
        <div className="w-[50%] h-[100vh]">sticky</div>
        <div className="w-[50%] h-[100vh]">
          <Canvas>
            <ScrollControls pages={3} damping={0.1} horizontal={true} enabled>
              <Scroll html style={{ touchAction: "auto" }}>
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "50vw",
                    height: "100vh",
                    pointerEvents: "all",
                    touchAction: "auto",
                    backgroundColor: "orange",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi perspiciatis error
                  quam cumque perferendis? Quo quidem,
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    width: "50vw",
                    height: "100vh",
                    backgroundColor: "red",
                    left: "50vw",
                  }}
                >
                  hello
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    width: "50vw",
                    height: "100vh",
                    backgroundColor: "purple",
                    left: "100vw",
                  }}
                >
                  third
                </div>
              </Scroll>
            </ScrollControls>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Section_three;
