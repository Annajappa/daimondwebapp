import Image from "next/image";
import PendantImage from "../assects/red_daimond.jpg";
import ModelImage from "../assects/women_with_red_diamond.jpg";
import StarIcon from "../assects/star.png";

const OurStory = () => {
  return (
    <section className="relative w-full bg-white px-4 md:px-8 lg:px-24 py-16 font-sans text-[#2E2B28] overflow-hidden mt-10 md:mt-10">
      {/* Decorative Stars */}
      <Image src={StarIcon} alt="star" width={25} height={25} className="absolute top-20 right-60" />
      <Image src={StarIcon} alt="star" width={25} height={25} className="absolute top-200 left-100" />
      <Image src={StarIcon} alt="star" width={25} height={25} className="absolute top-100 right-10" />
      <Image src={StarIcon} alt="star" width={25} height={25} className="absolute bottom-30 left-100" />
      <Image src={StarIcon} alt="star" width={25} height={25} className="absolute bottom-5 left-60" />

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-4xl font-serif font-medium mb-8 text-center lg:text-left">
          Our Story
        </h2>

        {/* Main Content: Side by Side */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left Section */}
          <div className="flex flex-col gap-6 w-full justify-start">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
              <Image
                src={PendantImage}
                alt="Pendant"
                width={200}
                height={220}
                className="rounded-md object-cover flex-shrink-0"
              />
              <p className="text-sm md:text-base text-[#3A3836] pt-4 lg:pt-2 text-center lg:text-left">
                Explore rare gemstones and heirloom jewelry designed to shine through generations.
              </p>
            </div>

            <p className="text-sm md:text-base text-[#867463] font-300 mt-2 lg:pl-20 text-center lg:text-left">
              At DIANO, every piece begins with a story — of rare origin, masterful design, and conscious craftsmanship.
              From curated private collections to timeless pieces, we bring meaningful luxury to life.
            </p>

            <div className="mt-2 lg:pl-20 flex justify-center lg:justify-start">
              <button className="border border-[#2E2B28] px-5 py-2 text-sm hover:bg-[#2E2B28] hover:text-white transition">
                Explore the Collection
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full max-w-md mx-auto lg:mx-0">
            <div className="w-full aspect-[4/5] relative rounded-md overflow-hidden shadow-sm">
              <Image
                src={ModelImage}
                alt="Model wearing jewelry"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
