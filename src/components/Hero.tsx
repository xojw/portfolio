const Hero = () => {
  return (
    <section className="w-full flex justify-center">
      <div className="text-center animate-fade-in pt-12 lg:pt-16">
        <h1 className="group text-ctp-green font-semibold text-4xl lg:text-5xl hover-scale">
          hello, I'm{" "}
          <span className="text-ctp-teal relative">taz</span>
        </h1>

        <p className="mt-2 lg:mt-3 text-xl lg:text-2xl text-ctp-text hover-scale">
          a self taught full stack developer based in U.S
        </p>
      </div>
    </section>
  );
};

export default Hero;
