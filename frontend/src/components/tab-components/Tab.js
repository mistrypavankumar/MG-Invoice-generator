import React, { useCallback, useState } from "react";

export const Tabs = ({ children }) => {
  const initialTab = children[0].props.label;

  const [activeTab, setActiveTab] = useState(initialTab);

  const handleActiveTab = useCallback((label) => setActiveTab(label), []);

  const tabs = children.map((child) => (
    <button
      key={child.props.label}
      onClick={(e) => {
        e.preventDefault();
        handleActiveTab(child.props.label);
      }}
      className={`${
        child.props.label === activeTab ? "after:w-full text-green-500 " : ""
      } uppercase px-5 mr-5 py-2 after:content-[""] after:absolute  after:h-[2px] after:bg-green-500 after:left-0 after:bottom-0 relative hover:bg-green-500/5 font-medium text-primaryDarkBlue `}
    >
      {child.props.tabName}
    </button>
  ));

  const tabContent = children.filter(
    (child) => child.props.label === activeTab
  );

  return (
    <div>
      <div className="border-b-2 border-b-slate-400">{tabs}</div>
      <div className="py-10">{tabContent}</div>
    </div>
  );
};

export const Tab = ({ children }) => {
  return <>{children}</>;
};
