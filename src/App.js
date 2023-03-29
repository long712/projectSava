import "./App.css";
import ScrollToTop from "./conponents/ScrollToTop";
import Footer from "./features/footer";
import Header from "./features/header";
import RootRouter from "./router/rootRouter";

function App() {
  return (
    <div className="App">
      {/* <ScrollToTop /> */}
      <Header />
      {/* <Map /> */}
      <RootRouter />
      <Footer />
    </div>
  );
}

export default App;
