import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homescreen from "./screen/Homescreen";
import Cart from "./components/Cart";
import Description from "./screen/Description";

function App() {
  return (
    <Router>
      <Navbar />
      <main className='py-3'>
        <Container>
          <Switch>
            <Route path='/' component={Homescreen} exact />
            <Route path='/cart' component={Cart} exact />
            <Route path='/product/:id' component={Description} exact />
          </Switch>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
