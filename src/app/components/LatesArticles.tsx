"use client";

import Image, { StaticImageData } from "next/image";
import Image1 from "../assects/round-ring.jpg";
import Image2 from "../assects/diamond-ring.jpg";
import Image3 from "../assects/plain-ring.jpg";
import StarIcon from "../assects/star.png";

type Article = {
  id: number;
  title: string;
  date: string;
  image: StaticImageData;
};

const articles: Article[] = [
  {
    id: 1,
    title: "How to Care for Rare Gemstone Jewelry",
    date: "May 15, 2025",
    image: Image1,
  },
  {
    id: 2,
    title: "Choosing the Right Heirloom Piece",
    date: "May 22, 2025",
    image: Image2,
  },
  {
    id: 3,
    title: "Designing Your Own Custom Ring",
    date: "June 5, 2025",
    image: Image3,
  },
];

const LatestArticles: React.FC = () => {
  return (
    <section className="relative w-full py-20 px-4 md:px-16 bg-[#ffffff] text-center overflow-hidden">
      {/* Decorative Stars */}
      <Image src={StarIcon} alt="star" width={20} height={20} className="absolute top-7 right-40" />
      <Image src={StarIcon} alt="star" width={22} height={22} className="absolute bottom-7 left-20" />

      {/* Title */}
      <h2 className="text-4xl md:text-4xl font-serif font-semibold text-[#2E2B28] mb-12">Latest Articles</h2>

      {/* Articles */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 px-4">
        {articles.map((article) => (
          <div
            key={article.id}
            className="flex flex-col w-full max-w-sm text-center bg-white"
          >
            <div className="w-full h-64 relative rounded-lg overflow-hidden shadow-sm">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-medium text-[#2E2B28] font-serif">{article.title}</h3>
            <p className="mt-1 text-sm text-gray-500 font-serif">{article.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestArticles;
