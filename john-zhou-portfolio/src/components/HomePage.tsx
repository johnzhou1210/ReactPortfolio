import React from "react";

interface HomePageProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ activeTab, setActiveTab }) => {
  // List of strings to cycle through
  const strings = [
    "Welcome to my website!",
    "Hobbyist game developer",
    "Hunter College Honors CS Scholar",
    "JohnZhou.Introduce();",
    "Framework hopper",
    "Game jam enthusiast",
    "Games are my creative medium!",
  ];

  // Function to get a random string from the list
  function getRandomString() {
    return strings[Math.floor(Math.random() * strings.length)];
  }

  // Function to start the typewriter effect
  function startTypewriter() {
    const typewriterElement = document.getElementById("typewriter-text");
    const text = getRandomString(); // Get a random string
    typewriterElement.textContent = text; // Set the text

    // Calculate the number of steps based on the string length
    const steps = text.length;
    typewriterElement.style.setProperty("--steps", steps);

    // Reset the animation
    typewriterElement.style.animation = "none";
    void typewriterElement.offsetWidth; // Trigger reflow to restart the animation
    typewriterElement.style.animation = null;

    // Wait for the animation to finish, then start again
    const animationDuration = 4000; // 4s (adjust to match your CSS animation duration)
    setTimeout(startTypewriter, animationDuration + 4000); // Add 1s delay for readability
  }

  // Start the typewriter effect on page load
  document.addEventListener("DOMContentLoaded", startTypewriter);

  return (
    <>
      <div className="h-screen items-center justify-center bg-gray-100">
        <div className="relative h-full w-full">
          {/* background layer */}
          <div className="h-full w-full items-center justify-center bg-slate-700">
            <div className="grid h-screen w-full grid-cols-2 gap-4 p-4">
              <button
                className="content-center rounded-3xl bg-red-300 text-center font-semibold text-white hover:scale-101 hover:bg-red-400 xs:text-5xl sm:text-6xl md:text-7xl"
                onClick={() => setActiveTab("about")}
              >
                <h1 className="drop-shadow-lg">About</h1>
              </button>
              <button
                className="content-center rounded-3xl bg-orange-300 text-center font-semibold text-white hover:scale-101 hover:bg-orange-400 xs:text-5xl sm:text-6xl md:text-7xl"
                onClick={() => setActiveTab("portfolio")}
              >
                <h1 className="drop-shadow-lg">Portfolio</h1>
              </button>
              <button
                className="content-center rounded-3xl bg-green-300 text-center font-semibold text-white hover:scale-101 hover:bg-green-400 xs:text-5xl sm:text-6xl md:text-7xl"
                onClick={() => setActiveTab("contact")}
              >
                <h1 className="drop-shadow-lg">Contact</h1>
              </button>
              <button className="content-center rounded-3xl bg-blue-300 text-center font-semibold text-white hover:scale-101 hover:bg-blue-400 xs:text-5xl sm:text-6xl md:text-7xl">
                <h1 className="drop-shadow-lg">Resume</h1>
              </button>
            </div>
          </div>

          {/* overlay layer */}
          <div className="bg-opacity-20 absolute inset-0 top-1/2 left-1/2 flex h-1/4 w-1/4 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-4xl bg-indigo-700 outline-8 outline-offset-2 outline-indigo-200 outline-dashed">
            <span className="justify-center font-bold text-white drop-shadow-lg">
              <h1 className="2xl:text:6xl mb-8 text-center xs:text-3xl sm:text-4xl lg:text-4xl 3xl:text-7xl">
                John Zhou
              </h1>

              <div className="flex rounded-lg bg-slate-800">
                <h2 className="mb-1 ml-6 before:content-['>']"></h2>
                <h2 id="typewriter-text" className="typewriter font-mono"></h2>
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
