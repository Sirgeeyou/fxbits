"use client";
import { useEffect } from "react";
import { getListings } from "../../services/apiListings";

export default function Home() {
  useEffect(function () {
    getListings().then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h1 className="text-sky-400">Market Place</h1>
      <div className="p-10">
        <button className="btn btn-primary">Button</button>
      </div>
    </div>
  );
}
