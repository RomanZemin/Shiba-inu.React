import "./App.css";
import Cards from "./components/Cards/Cards";
import Description from "./components/Description/Description";
import Faq from "./components/FAQ/Faq";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";
import Messenger from "./components/Messenger/Messenger";
import Transactions from "./components/Transactions/Transactions";

function App() {
  return (
    <>
      <Header />
      <Introduction />
      <Cards />
      <Description />
      <Faq />
      <Transactions />
      <Footer />
      <Messenger />
    </>
  );
}

export default App;
