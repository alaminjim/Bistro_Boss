import { Parallax } from "react-parallax";

const CoverMenu = ({ img, title, heading }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div className="hero h-[500px]">
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content bg-[#15151574] text-center">
            <div className="max-w-md ">
              <h1 className="mb-5 text-4xl font-bold">{title}</h1>
              <p className="mb-5">{heading}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default CoverMenu;
