import React from "react";
export default function Comments() {
  return (
    <div>
      <div>
        <h1>I want to pray for this...</h1>
        <textarea
          name="w3review"
          rows={4}
          cols={50}
          placeholder="In the mighty name of Jesus,"></textarea>
      </div>
      <input type="button" value="Submit" className="pray-btn" />
    </div>
  );
}
