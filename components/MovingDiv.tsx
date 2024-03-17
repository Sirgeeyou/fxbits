"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function MovingDiv() {
  return (
    <div className="dark:bg-grid-white/[0.05] relative flex h-[40rem] flex-col items-center justify-center overflow-hidden rounded-md bg-white antialiased dark:bg-background">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "WordWideRental Network is a traveler's dream. Their vast selection of properties worldwide, coupled with a user-friendly platform, made booking a breeze. My recent stay exceeded expectations, offering not just accommodation but an authentic cultural experience.",
    name: "Sarah Thompson, Travel Enthusiast",
    title: "Seamless Global Escapes",
  },
  {
    quote:
      "This service offers diverse accommodations for every traveler. Their commitment to quality and reliability ensures a seamless stay, whether it's a romantic getaway or a family adventure. Booking with them guarantees memorable vacations.",
    name: "David Kim, Jetsetter and Blogger",
    title: "Tailored Travel Experiences",
  },
  {
    quote:
      "This company has transformed the way I explore the world. Their curated rentals offer authenticity and immersion in every destination. From rustic farmhouses to traditional ryokans, each stay tells a unique story, enriching my travels.",
    name: "Emily Rodriguez, Adventurer and Photographer",
    title: "Authentic Adventures Await",
  },
  {
    quote:
      "o, squad! So, I just stumbled upon this lit website called WorldWideRental Network, and let me tell ya, it's fire! They hooked me up with the sickest pads all over the globe. From beachfront bungalows to urban cribs with skyline views, they got it all. Booking was smoother than my morning coffee run, and the digs? A++ vibes, fam. If you're all about living that wanderlust life without breaking the bank, hit up WorldWideRental Network. Trust me, your 'gram game will thank you.",
    name: "Wanderlust Willy, Adventure Enthusiast",
    title: "Globetrotter Guru: WorldWideRental Network Review",
  },
];
