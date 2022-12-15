import "./App.css";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import Routing from "./routing/Routing";
import Sidebar from "./layouts/sidebar/Sidebar";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <main className="gr--main-con--wrapper">
        <Header />
        <div className="content--wrapper">
          <Routing />
        </div>
        <Footer />
      </main>
    </div>

    // admin@gmail.com
    // admin@123
  );
}

export default App;
