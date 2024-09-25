import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { ClearButton, GradientButton } from "./reuseableComp/Button";
import GradientText from "./reuseableComp/GradientText";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4l sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools <GradientText text={"for developers"} />
      </h1>
      <p className="mt-10 text-large text-center text-neutral-500 max-w-4xl ">
        {" "}
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <GradientButton text="Start for free" />
        <ClearButton text="Documentation" />
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support this video
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support this video
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
