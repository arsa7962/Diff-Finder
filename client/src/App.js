import './App.css';
import HeaderNav from './Layouts/HeaderNav' ;
import CodeEditor from './Components/CodeEditor';
import { Container } from '@mui/material';



function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Container
       maxWidth="lg"
       sx={{display: { md: 'flex', xs: 'block'} }}
       >
        <CodeEditor />
        <CodeEditor />
      </Container>
      
    </div>
  );
}

export default App;
