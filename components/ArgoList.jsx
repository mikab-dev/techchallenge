import React from "react";
import ArgoItem from "./ArgoItem";

const ArgoList = ({ list }) => {
  return (
    <div className="grid grid-cols-3 mb-40">
      {list.map((argonaute) => {
        return <ArgoItem key={argonaute.id} argonaute={argonaute} />;
      })}
    </div>
  );
};

export default ArgoList;
