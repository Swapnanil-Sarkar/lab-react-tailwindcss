import "./App.css";
import Alert from "./components/Alert";
import Page from "./components/Page";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Alert />
      <Page />
      <Footer />
    </div>
  );
}

export default App;