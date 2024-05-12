import "./styles/App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const dateNow = new Date().getFullYear();

  return (
    <>
      <Header />
      <Main />
      <Footer date={dateNow} />
    </>
  );
}

export default App;
