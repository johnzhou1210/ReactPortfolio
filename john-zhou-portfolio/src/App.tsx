import AppBar from "./components/AppBar";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import PortfolioPage from "./components/PortfolioPage";
import ContactPage from "./components/ContactPage";
import React, { useState } from "react";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState("home");
  const pages = [
    { name: "Home", value: "home" },
    { name: "About", value: "about" },
    { name: "Portfolio", value: "portfolio" },
    { name: "Contact", value: "contact" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HomePage activeTab={activeTab} setActiveTab={setActiveTab} />;
      case "about":
        return <AboutPage activeTab={activeTab} setActiveTab={setActiveTab} />;
      case "portfolio":
        return (
          <PortfolioPage activeTab={activeTab} setActiveTab={setActiveTab} />
        );
      case "contact":
        return (
          <ContactPage activeTab={activeTab} setActiveTab={setActiveTab} />
        );
    }
  };

  return <>{renderContent()}</>;
};

export default App;
