import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import threeimg from "../../assets/three.jpeg";
import fourimg from "../../assets/one.jpeg";
import fiveimg from "../../assets/four.jpeg";
import siximg from "../../assets/five.jpeg";
import sevenimg from "../../assets/six.jpeg";
import eightimg from "../../assets/seven.jpeg";
import nineimg from "../../assets/eight.jpeg";
import tenimg from "../../assets/nine.jpeg";
import elevenimg from "../../assets/ten.jpeg";
import twelvwimg from "../../assets/eleven.jpeg";
import thirteenimg from "../../assets/twelve.jpeg";
import fourteenimg from "../../assets/thireteen.jpeg";
import fifteenimg from "../../assets/fourteen.jpeg";
import sixteenimg from "../../assets/fifteen.jpeg";

function Cards() {
  const [datas] = useState([
    {
      id: 1,
      title: "Hanuman",
      image: threeimg,
      description:
        "Hanuman, the revered Hindu deity, embodies unwavering devotion, strength, and loyalty. Known for his role in the epic Ramayana, Hanuman is revered for his selfless service to Lord Rama, displaying extraordinary courage and intelligence. ",
      Instagram: "https://www.instagram.com/p/C4stWEZILjH/",
      Youtube: "https://www.youtube.com/@artsonu10/featured",
    },
    {
      id: 2,
      title: "Krishna",
      image: fourimg,
      description:
        "Lord Krishna, one of the most beloved deities in Hinduism, is the eighth incarnation of Lord Vishnu. He is celebrated as the divine statesman, master strategist, and the embodiment of love and joy.",
      Instagram: "https://www.instagram.com/p/C43GDxXILOd/",
      Youtube: "https://www.youtube.com/@artsonu10/featured",
    },
    {
      id: 3,
      title: "Radha",
      image: fiveimg,
      description:
        "Radha, often referred to as the eternal consort of Lord Krishna, embodies the pinnacle of divine love and devotion in Hinduism.",
      Instagram: "https://www.instagram.com/p/C4vUocQPYka/",
      Youtube: "https://www.youtube.com/@artsonu10/featured",
    },
    {
      id: 4,
      title: "Shiv",
      image: siximg,
      description:
        "Lord Shiva, one of the principal deities in Hinduism, is known as the destroyer and transformer within the Holy Trinity, which includes Brahma the creator and Vishnu the preserver. ",
      Instagram: "https://www.instagram.com/p/C4YC7KHoKWW/",
      Youtube: "https://www.youtube.com/@artsonu10/featured",
    },
    {
      id: 5,
      title: "Ganesh Ji",
      image: sevenimg,
      description:
        "Lord Ganesha, also known as Ganapati or Vinayaka, is one of the most beloved and widely worshiped deities in Hinduism. ",
      Instagram: "https://www.instagram.com/p/C8pJpmkPtUM/",
      Youtube: "https://www.youtube.com/@artsonu10/featured",
    },
    {
      id: 6,
      title: "Mahakal",
      image: eightimg,
      description:
        "Lord Mahakal, a revered aspect of Lord Shiva, is the embodiment of time, death, and the ultimate cosmic force that transcends both. ",
      Instagram: "https://www.instagram.com/p/C4GHqDfoRAX/",
      Youtube: "https://www.youtube.com/@artsonu10/featured",
    },
    {
      id: 7,
      title: "Shiva",
      image: tenimg,
      description:
        "Lord Shiva, one of the principal deities in Hinduism, is known as the destroyer and transformer within the Holy Trinity, which includes Brahma the creator and Vishnu the preserver.",
      Instagram: "https://www.instagram.com/p/C32tCOEIuZu/",
      Youtube: "https://www.youtube.com/@artsonu10/featured",
    },
    {
      id: 8,
      title: "Parvati",
      image: nineimg,
      description:
        "Goddess Parvati is a central figure in Hindu mythology, revered as the divine mother and the embodiment of love, fertility, and devotion. ",
      Instagram: "https://www.instagram.com/p/C4IyPrjoINg/",
      Youtube: "https://www.youtube.com/@artsonu10/featured",
    },
    {
      id: 9,
      title: "Prabhu Shree Ram",
      image: elevenimg,
      description:
        "Lord Shri Rama, the seventh incarnation of Lord Vishnu, is one of the most revered and celebrated deities in Hinduism. He is the central figure in the epic Ramayana, where he is portrayed as the ideal man—an embodiment of virtue, righteousness, and moral integrity.",
      Instagram: "https://www.instagram.com/p/C2hx-TwPGFk/",
      Youtube: "https://www.youtube.com/@artsonu10/featured",
    },
    {
      id: 10,
      title: "Maa Durga",
      image: twelvwimg,
      description:
        "Maa Durga is a powerful and revered goddess in Hinduism, symbolizing strength, courage, and divine feminine energy. She is celebrated as a warrior goddess who protects the universe from evil forces and restores cosmic order. ",
      Instagram: "https://www.instagram.com/p/C4iaNDMP32x/",
      Youtube: "https://www.youtube.com/@artsonu10/featured",
    },
    {
      id: 11,
      title: "Dulhe Raja",
      image: thirteenimg,
      description:
        "In Hindu tradition, Shiva and Parvati's marriage is considered a sacred and ideal union, symbolizing the harmonious balance between the masculine and feminine energies of the universe. is ",
      Instagram: "https://www.instagram.com/p/C4OAc3FIveZ/",
      Youtube: "https://www.youtube.com/@artsonu10/featured",
    },
    {
      id: 12,
      title: "Umapati",
      image: fourteenimg,
      description:
        "'Umapati'is a revered name for Lord Shiva, reflecting his role as the beloved consort of Goddess Parvati, who is also known as Uma. The term 'Umapati' translates to 'Lord of Uma,' signifying Shiva's deep and enduring relationship with Parvati.",
      Instagram: "https://www.instagram.com/p/C4A8gwKIE8K/",
      Youtube: "https://www.youtube.com/@artsonu10/featured",
    },
    {
      id: 13,
      title: "Veer Hanuman",
      image: fifteenimg,
      description:
        "'Veer Hanuman' refers to Lord Hanuman in his valorous and heroic aspect. ",
      Instagram: "https://www.instagram.com/p/C2ulE4gPgme/",
      Youtube: "https://www.youtube.com/@artsonu10/featured",
    },
    {
      id: 14,
      title: "Neelkant",
      image: sixteenimg,
      description:
        "Neelkanth is one of the revered names of Lord Shiva, symbolizing his immense power, compassion, and his role as the protector of the cosmos. ",
      Instagram: "https://www.instagram.com/p/C3nO_F4ojTV/",
      Youtube: "https://www.youtube.com/@artsonu10/featured",
    },
  ]);
  return datas.map((data) => {
    return <ProjectCard key={data.id} data={data} />;
  });
}

export default Cards;
