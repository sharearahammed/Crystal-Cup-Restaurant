import "./Banner.css";

const Banner = () => {
  return (
    <div className="mt-6 lg:mt-[54px] p-5 lg:p-0 background bg-cover h-[371px] w-auto lg:h-[636px] lg:w-[1400px] flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="mt-5 lg:mt-0 mb-[24px] text-[22px] lg:text-[52px] text-[#FFFFFF] font-bold">
          Discover an exceptional cooking <br /> class tailored for you!
        </h1>
        <p className="mb-[24px] lg:mb-[40px] lg:text-[18px] text-[#FFFFFF]">
          Savor the richness of our recipes, crafted with love and tradition,
          <br /> each bite a symphony of flavors that delight the senses.{" "}
        </p>
        <div className="flex justify-center items-center gap-[30px] mb-5 lg:mb-0">
          <button className="btn btn-accent lg:w-[195px] lg:h-[64px] rounded-[100px] lg:text-[20px] font-bold">
            Explore Now
          </button>
          <button className="btn btn-outline lg:w-[195px] lg:h-[64px] border-white text-white rounded-[100px] lg:text-[20px] font-bold">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
