import React from 'react';
import ItemLista from './itemLista'

class Lista extends React.Component {
  
    constructor(props) {
      super(props)
    }

    render() {
        return(
            <ItemLista />
        );
    }

}

export default Lista;