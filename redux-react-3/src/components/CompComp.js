import React from "react";
import { connect } from "react-redux";

const CompComp = () => {
  const [number, setNumber] = React.useState(1);
  return (
    <div className="container">
      <h3>Computer</h3>
    </div>
  );
};

export default CompComp;
