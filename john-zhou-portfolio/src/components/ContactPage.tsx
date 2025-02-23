import React from "react";
import { ArrowLeft } from "lucide-react";

interface ContactPageProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <>
      <div className="flex w-full">
        <button
          className="absolute flex h-32 w-32 items-center justify-center rounded-3xl bg-amber-600 hover:scale-105"
          onClick={() => setActiveTab("home")}
        >
          <div className="drop-shadow-lg">
            <ArrowLeft className="scale-250 text-white" />
          </div>
        </button>

        <div className="font- h-[9vh] w-full bg-indigo-700 pt-10 text-center text-white">
          <h1 className="text-4xl font-bold">Contact</h1>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
