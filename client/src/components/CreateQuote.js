import React, { useState } from "react";

const CreateQuote = () => {
  const [quote, setQuote] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container mycontainer">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          placeholder="Write a quote..."
        />
        <button className="btn green">Create</button>
      </form>
    </div>
  );
};

export default CreateQuote;
