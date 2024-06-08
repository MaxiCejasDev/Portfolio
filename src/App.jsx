import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Nav } from "./Nav/Nav";
import { Header } from "./Header/Header";
import { Proyects } from "./Proyects/Proyects";
import { About } from "./About/About";
import { Skill } from "./Skill/Skill";

function App() {
  return (
    <Router>
      <Nav/>
      <Header/>
      <Routes>
        <Route path="/" element={<Proyects/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skill" element={<Skill/>}/>

      </Routes>
    </Router>
  );
}

export default App;
