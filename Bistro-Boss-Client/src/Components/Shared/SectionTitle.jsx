const SectionTitle = ({ title, heading }) => {
  return (
    <section>
      <div className="text-center mt-14">
        <p className="text-orange-500">{title}</p>
        <h3 className="text-3xl border-y-4 border-b-4 border-[#E8E8E8] w-4/12 mx-auto mt-3.5 pt-2 pb-2">
          {heading}
        </h3>
      </div>
    </section>
  );
};

export default SectionTitle;
