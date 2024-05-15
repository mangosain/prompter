import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover, Create & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI Powered Prompts</span>
      </h1>
      <p className="mx-auto text-center desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        suscipit vitae laudantium tempore dolorum accusamus illum pariatur!
        Delectus, sint mollitia.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
