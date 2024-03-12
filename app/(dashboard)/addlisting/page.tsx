"use client";

import { AddListingForm } from "@/components/AddListingForm";
import Uploader from "@/components/Uploader";
import { createListing } from "@/lib/actions/listing.action";
import { useState } from "react";

export default function AddListing() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    console.log("Title:", title);
    console.log("Description:", description);

    createListing(title, description);
    setTitle("");
    setDescription("");
  };
  return (
    <main>
      <h1>Add Item</h1>
      <form>
        <label htmlFor="title">Title:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <br />

        <label htmlFor="description">Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <br />

        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <AddListingForm />
      <Uploader />
    </main>
  );
}
