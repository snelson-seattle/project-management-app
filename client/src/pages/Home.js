import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";
import Clients from "../components/Clients";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModal />
        <AddProjectModal />
      </div>
      <section>
        <h1>Clients</h1>
        <Clients />
      </section>
      <hr />
      <section>
        <h1>Projects</h1>
        <Projects />
      </section>
    </>
  );
};

export default Home;
