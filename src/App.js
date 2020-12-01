import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import Main from './components/main'
import indexStyles from './index.css'
import ItemLista from './components/itemLista.js'


class App extends React.Component {
  
  render() {
    return(
      <Container fluid>
        <Main />
        
      </Container>
    )
  }
}

export default App;
