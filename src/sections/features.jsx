import Card from "../componenets/Card";

const Features = () => {
  return (
    <section id="about" className='pt-4'>
      <div className='container px-lg-5'>
        <div className='row gx-lg-5'>
          <Card
            title={"Fresh new layout"}
            description={
              "With Bootstrap 5, we've created a fresh new layout for this template!"
            }
          />
          <Card
            title={"Free to download"}
            description={
              "As always, Start Bootstrap has a powerful collectin of free templates."
            }
          />
          <Card
            title={"Jumbotron hero header"}
            description={
              "The heroic part of this template is the jumbotron hero header!"            }
          />
          <Card
            title={"Feature boxes"}
            description={
              "We've created some custom feature boxes using Bootstrap icons!"
            }
          />
          <Card
            title={"Simple clean code"}
            description={
              "We keep our dependencies up to date and squash bugs as they come!"
            }
          />
          <Card
            title={"A name you trust"}
            description={
              "Start Bootstrap has been the leader in free Bootstrap templates since 2013!"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
