import { About } from "./components/About";
import { Budget } from "./components/Budget";
import { Details } from "./components/Details";
import { Footer } from "./components/Footer";
import { Galery } from "./components/Galery";
import { Header } from "./components/Header";

function App() {
  return (
      <>
        <Header />
        <About />
        <Details />
        <Galery />
        <Budget />
        <Footer />
      </>
  );
}

export default App;
