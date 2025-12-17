import React from "react";
import "./pillContainer.css"

interface PillContainerProps {
  content: string;
}

const PillContainer: React.FC<PillContainerProps> = ({ content }) => {
  return <div className="pill-wrapper">{content}</div>;
};

export default PillContainer;
