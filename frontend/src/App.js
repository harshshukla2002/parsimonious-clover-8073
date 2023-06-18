import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import MainRoutes from "./Routes/MainRoutes";

function App() {
  return (
    <div className="App">

      <MainRoutes />
      <Footer/>
    </div>
  );
}

export default App;
