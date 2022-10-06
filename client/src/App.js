import Header from "./components/Header";
import Clients from "./components/Clients";
import AddClientModal from "./components/AddClientModal";

function App() {
  return (
    <>
    <Header />
    <div className="container">
      <AddClientModal />
      <Clients />
    </div>
    </>
  );
}

export default App;
