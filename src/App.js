import './App.css';
import Header from "./components/p1-Header/Header";
import Main from "./components/p2-Main/Main";
import Skills from "./components/p3-Skills/Skills";
import Projects from "./components/p4-Projects/Projects";
import RemoteWork from "./components/p5-RemoteWork/RemoteWork";
import Contacts from "./components/p6-Contacts/Contacts";
import Footer from "./components/p7-Footer/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <Projects/>
        <RemoteWork/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default App;
