import React from 'react';
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Homescreen from './screen/Homescreen';


function App() {
  return (
    <Router>
    <Header />
    <main className="py-3">
      <Container><h1> Vugha's products</h1>
   
    <Container>
      <Route path='/' component={Homescreen} exact/>
    </Container>
    </Container>
    </main>
    <Footer />
    </Router>
  );
}

export default App;
