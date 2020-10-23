import React from 'react';
import {Container} from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Homescreen from './screen/Homescreen';


function App() {
  return (
    <>
    <Header />
    <main className="py-3">
      <Container><h1> Vugha's products</h1>
   
    <Container>
      <Homescreen/>
    </Container>
    </Container>
    </main>
    <Footer />
    </>
  );
}

export default App;
