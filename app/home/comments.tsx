import React from "react";
export default function Comments() {
  return (
    <div className="prayer-container">
      <div className="prayer-form">
        <h1 className="pray-title">I want to pray for this...</h1>
        <textarea
          name="prayer"
          rows={4}
          cols={50}
          placeholder="In the mighty name of Jesus..."
          className="prayer-textarea"
        />
        <input type="button" value="Submit" className="pray-btn" />
      </div>
    </div>
  );
}
