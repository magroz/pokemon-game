import './App.css';
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Scenery from "./assets/bg3.jpg"

function App() {
  console.log(Scenery)
  return (
    <div className="App">
      <Header />
      <Layout
          id={"1"}
          title={"Title 1"}
          descr={"Description 1"}
          urlBg={Scenery}
      />
      <Layout
          id={"2"}
          title={"Title 2"}
          descr={"Description 2"}
          colorBg={"#000"}
      />
      <Layout
          id={"3"}
          title={"Title 3"}
          descr={"Description 3"}
          urlBg={Scenery}
      />
      <Footer />
    </div>
  );
}

export default App;
