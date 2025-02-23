import React from "react";

interface AboutPageProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <button onClick={() => setActiveTab("home")}>Back</button>
      <h1>About Me</h1>
    </>
  );
};

export default AboutPage;
