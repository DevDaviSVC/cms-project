import herosvg from "../assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam magnam delectus voluptatum animi magni iusto repellendus ea tempora deleniti, fugiat, soluta quasi cum, saepe voluptate illum impedit! Cumque, beatae sint!
        </p>
        </div>
        <div className="img-container">
            <img src={herosvg} alt="hero.svg" className="img" />
        </div>
      </div>
    </section>
  );
}
export default Hero;