import review from "../../assets/home/chef-service.jpg";

const BistroReview = () => {
  return (
    <div className="my-24">
      <div className="relative">
        <img src={review} alt="" />
      </div>
      <div className="w-[890px] h-[300px] absolute -mt-[340px] text-center pt-20 ml-32 bg-white">
        <h2 className="text-4xl uppercase">Bistro Boss</h2>
        <p className="text-center pt-2.5 pl-3 pr-3">
          Bistro Boss Restaurant is one of the finest dining places I’ve ever
          visited. From the moment I walked in, I was impressed by the cozy and
          modern interior that creates a warm and welcoming atmosphere. The
          staff were incredibly polite and attentive, providing quick and
          friendly service. I ordered their grilled chicken and cheese
          pasta—both dishes were absolutely delicious and perfectly presented.
          The flavors were rich, well-balanced, and clearly made with quality
          ingredients.
        </p>
      </div>
    </div>
  );
};

export default BistroReview;
