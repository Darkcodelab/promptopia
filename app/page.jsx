import Feed from "@/components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        quibusdam nostrum possimus quo distinctio repellat, repudiandae commodi
        vitae. Debitis, exercitationem.
      </p>

      <Feed />
    </section>
  );
};
export default Home;