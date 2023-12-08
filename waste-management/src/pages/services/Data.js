import { cardImages } from "./images";

export const services = [
  {
    imgSrc: cardImages["disposal"],
    cardTitle: "Waste Disposal",
    cardHeader: "Schedule Disposal",
    cardText:
      "Choose your preferred pick-up time and location, Request a bin...",
    buttonText: "Proceed",
    buttonLink: "/disposal",
  },
  {
    imgSrc: cardImages["recycling"],
    cardTitle: "Waste Recycling",
    cardHeader: "Schedule Recycling",
    cardText: "Separate your recyclables, Request a collection...",
    buttonText: "Coming Soon",
    buttonLink: "/comingsoon",
  },
  {
    imgSrc: cardImages["wallet"],
    cardTitle: "Wallet",
    cardHeader: "View Balance & Rewards",
    cardText: "Check your balance, Redeem rewards...",
    buttonText: "Coming soon",
    buttonLink: "/comingsoon",
  },
  {
    imgSrc: cardImages["history"],
    cardTitle: "Schedule History",
    cardHeader: "View History",
    cardText: "View your past schedules, Check your history...",
    buttonText: "Coming soon",
    buttonLink: "/comingsoon",
  },
  {
    imgSrc: cardImages["resources"],
    cardTitle: "Resources",
    cardHeader: "View Resources",
    cardText: "View resources to help understand recycling...",
    buttonText: "Coming soon",
    buttonLink: "/resources",
  },
  {
    imgSrc: cardImages["newsfeed"],
    cardTitle: "News Feed",
    cardHeader: "Stay Updated",
    cardText: "Get the latest information, share your views...",
    buttonText: "Proceed",
    buttonLink: "/newsfeed",
  },
];
