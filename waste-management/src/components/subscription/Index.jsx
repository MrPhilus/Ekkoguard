import React from "react";

const Subscription = () => {
  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted">
        <a role="tab" className="tab">
          Tab 1
        </a>
        <a
          role="tab"
          className="tab tab-active [--tab-bg:orange] [--tab-border-color:black] text-white"
        >
          Tab 2
        </a>
        <a role="tab" className="tab">
          Tab 3
        </a>
      </div>
    </div>
  );
};

export default Subscription;
