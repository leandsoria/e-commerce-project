const CustomOpening = (props) => {
  return (
    <section className="w-full h-[400px]">
      <div className="flex justify-center items-center flex-col py-14 px-4 md:py-24 md:px-12  h-full w-full max-w-7xl m-auto">
        {props.children}
      </div>
    </section>
  );
};

export default CustomOpening;
