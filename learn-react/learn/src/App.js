import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Form} from 'react-bootstrap'
import Navbar from './conponent/Navbar';
import Feed from './Feed';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Feed/>
     <Footer/>
 <Container className="p-5 mb-4 bg-light rounded-3">    </Container>

 <Button variant="primary" size="lg">
        Block level button
      </Button>
      </Feed>
 </div>
  );
}

export default App;
