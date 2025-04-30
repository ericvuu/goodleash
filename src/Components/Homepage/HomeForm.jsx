import React, { useState } from "react";
import Form from "../Form";

const HomeForm = () => {
  return (
    <div className="breeds-form">
      <div className="breeds-form-container container">
        <Form
          uPath={`breed`}
          placeholder={`Enter a breed, e.g. “Border Collie”`}
        />
      </div>
    </div>
  );
};

export default HomeForm;
