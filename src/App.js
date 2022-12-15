import "./App.css";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import Routing from "./routing/Routing";
import Sidebar from "./layouts/sidebar/Sidebar";
function App() {
  return (
    <div className="App">
      <main className="main">
        <Sidebar />
        <Routing />
      </main>
    </div>
  );
}

export default App;
