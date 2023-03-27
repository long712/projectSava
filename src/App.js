import "./App.css";
import Footer from "./features/footer";
import Header from "./features/header";
import RootRouter from "./router/rootRouter";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Map /> */}
      <RootRouter />
      <Footer />
    </div>
  );
}

export default App;
