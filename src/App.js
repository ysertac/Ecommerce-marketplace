import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Category from "./pages/Category";
import Deneme from "./deneme/Deneme";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/shop/:pageno">
          <Products />
        </Route>
        <Route exact path="/:category/:id/:name">
          <ProductDetails />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/shop/:gender/:category">
          <Category />
        </Route>
        <Route exact path="/deneme">
          <Deneme />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
