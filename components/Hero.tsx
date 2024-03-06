import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-20 lg:py-20 xl:flex-row overflow-hidden">
      {/* <div className="hero-map" /> */}

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        {/* <Image
          src="/online_study.svg"
          alt="camp"
          width={300}
          height={300}
          className="absolute left-[-5px] top-[-20px] w-10 lg:w-[50px]"
        /> */}
        <h1 className="bold-52 lg:bold-88">Explore Your Tech Journey</h1>
        <p className="regular-18 mt-6 text-gray-30 xl:max-w-[520px]">
          Get the skills you need today for a successful tomorrow. Take a big
          step towards your new career by taking one of our diploma training
          programs. With Scotified Academy, discover a new way of learning: 20%
          theory, 80% practice.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            Learn. Apply. Job-ready.
            {/* <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span> */}
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            type="button"
            title="Start Your Journey Now"
            variant="btn_green"
          />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start -mt-28 lg:mt-0">
        <Image
          src="/hero-img.png"
          alt="camp"
          width={5000}
          height={5000}
          className="md:w-[600px] md:h-[600px] md:object-contain"
        />
        <div className="absolute -bottom-20 z-20 flex w-[300px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8 lg:-bottom-20 lg:right-20">
                    
           <div className="flex flex-col">
            <div className="flexBetween">
              <Image src="/close.svg" alt="close" width={24} height={24} />
              <p className="regular-16 text-gray-20">Courses</p>
            </div>
            <p className="bold-20 text-white text-right">5 Courses</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Students</p>
              <p className="bold-20 text-white">35+ Taught</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Jobs/Interns</p>
              <p className="bold-20 text-white">6+ Gained</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
