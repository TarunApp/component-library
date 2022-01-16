import Footer from './components/Footer.js'
import Nav from './components/Nav.js'
import {Column, Row} from './styles/Styles.js'
import SideBar from './components/SideBar'
import Component from './components/Component.js'

function App() {
  return (
    <Column className="App">
    <Nav/>
      <Row>

        <SideBar/>
         
         <Component/>
      </Row>
    </Column>
  );
}

export default App;
