import "./App.css";
import NavBar from "./components/layout/NavBar";
import Container from "./components/layout/Container";
import Home from "./components/pages/Home";
import CreateCar from "./components/pages/CreateCar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListCar from "./components/pages/ListCar";

function App() {
  return (
    <>
      <BrowserRouter>

        <Container>

          <Routes>

             <Route path="/" element={<NavBar/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="/createCar" element={<CreateCar/>}/>
              <Route path="/listCar" element={<ListCar/>}/>
            </Route>

          </Routes>
          
        </Container>

      </BrowserRouter>
    </>
  );
}

export default App;