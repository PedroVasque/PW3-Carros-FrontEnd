import "./App.css";
import NavBar from "./components/layout/NavBar";
import Container from "./components/layout/Container";
import Home from "./components/pages/Home";
import CreateCar from "./components/pages/CreateCar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListCar from "./components/pages/ListCar";
import DetalilCar from "./components/pages/DetailCar";
import UpdateCar from "./components/pages/UpdateCar"


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
              <Route path="/DetailCar/:cod_carro" element={<DetalilCar/>}/>
              <Route path="/UpdateCar/:cod_carro" element={<UpdateCar/>}/>
            </Route>

          </Routes>
          
        </Container>

      </BrowserRouter>
    </>
  );
}

export default App;