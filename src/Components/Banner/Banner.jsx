import './Banner.css'

const Banner = () => {
    return (
        <div className="mt-6 lg:mt-[54px] p-5 lg:p-0 background bg-cover h-auto w-auto lg:h-[600px] lg:w-[1320px] flex flex-col justify-center items-center">
            <div className=''>
                <h1 className='mt-5 lg:mt-0 mb-[24px] text-[22px] lg:text-[52px] text-[#FFFFFF] font-bold'>Discover an exceptional cooking <br /> class tailored for you!</h1>
                <p className='mb-[24px] lg:text-18px text-[#FFFFFF]'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
                <div className='flex justify-center items-center gap-[30px] mb-5 lg:mb-0'>
                <button className="btn btn-accent lg:w-[195px] lg:h-[64px] rounded-[100px] lg:text-[20px] font-bold">Explore Now</button>
                    <button className="btn btn-outline lg:w-[195px] lg:h-[64px] border-white text-white rounded-[100px] lg:text-[20px] font-bold">Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;