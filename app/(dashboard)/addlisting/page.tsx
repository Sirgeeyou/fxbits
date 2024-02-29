"use client";

import { createListing } from "@/lib/actions/listing.action";
import { useState } from "react";

export default function page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    // You can use 'title' and 'description' in your logic here
    console.log("Title:", title);
    console.log("Description:", description);

    // You can call your createListing function here with the form values
    createListing(title, description);

    // Optionally, you can reset the form fields after submission
    setTitle("");
    setDescription("");
  };
  return (
    <main>
      <h1>Add Item</h1>
      <form>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <br />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          required
        ></textarea>

        <br />

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </main>
  );
}
