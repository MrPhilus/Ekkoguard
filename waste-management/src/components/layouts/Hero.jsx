import heroImg from '../../assets/images/heroImg.jpeg';

const Hero = () => {
  return (
    <div>
      <section
        style={{
          background: `linear-gradient(0deg, rgba(17, 25, 40, 0.70) 0%, rgba(17, 25, 40, 0.70) 100%), url(${heroImg}), lightgray 50% / cover no-repeat`,
        }}
        className="h-screen"
      >
        <h1>hiii</h1>
      </section>
    </div>
  );
};

export default Hero;
