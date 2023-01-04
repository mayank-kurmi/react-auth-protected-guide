import React from "react";

export const FormErrors = ({ formErrors }) => (
  <div>
    {Object.keys(formErrors).map((elemName, index) => {
      if (formErrors[elemName].length > 0) {
        return (
          <p key={index} className="text-danger">
            {elemName} {formErrors[elemName]}
          </p>
        );
      } else {
        return "";
      }
    })}
  </div>
);
