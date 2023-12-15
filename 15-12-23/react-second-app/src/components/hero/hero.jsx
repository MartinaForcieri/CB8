import "./index.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <img
        src="https://picsum.photos/200/300"
        alt="Hero Image"
        className="hero-image"
      />
      <div className="hero-content">
        <h1 className="hero-title">Hi I'm an Hero</h1>
        <p className="hero-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam,
          officiis!.
        </p>
        <button className="hero-button">Learn More</button>
      </div>
    </section>
  );
};

export default HeroSection;
