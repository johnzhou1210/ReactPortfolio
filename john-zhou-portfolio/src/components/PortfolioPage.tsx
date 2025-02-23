import React from "react";

interface PortfolioPageProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <>
      <button onClick={() => setActiveTab("home")}>Back</button>
      <h1>Portfolio</h1>
    </>
  );
};

export default PortfolioPage;
