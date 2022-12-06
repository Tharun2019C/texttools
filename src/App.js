import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar
        parent="functions"
        title="Text Tool"
        no2="About Us"
        no1="Instagram"
        subNo1="version"
        subNo2="Just"
      />

      <TextForm />

      <Footer />
    </>
  );
}

export default App;
