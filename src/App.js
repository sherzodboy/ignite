// components and pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route exact path={"/"} element={<Home />}></Route>
        <Route exact path={"/game/:id"} element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
