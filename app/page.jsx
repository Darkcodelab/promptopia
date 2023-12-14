import Feed from "@/components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Ignite Your Ideas,
        <br />
        <span className="blue_gradient text-center">Share the Spark!</span>
      </h1>
      <p className="desc text-center">
        Spark creativity together with our AI Prompt Exchange app! Unleash your
        ideas, share inspiration, and watch innovation unfold. Your thoughts,
        our prompts - a playground for minds!
      </p>

      <Feed />
    </section>
  );
};
export default Home;
