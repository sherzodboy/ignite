// components and pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route exact path={"/"} element={<Home />}></Route>
        <Route exact path={"/game/:id"} element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
