import React from 'react';
import {FormGroup, Label, Input} from 'reactstrap'
import delIcon from '../assets/iconeExcluir.png'
import moveIcon from '../assets/list.png'
import stylesMain from './main.module.css'
import styles from './itemLista.module.css'

function hideElement(id) {
  var x = document.getElementById(id);
  if (x.style.display === "none") 
  {
    x.style.display = "block";
  } 
  
  else 
  {
    x.style.display = "none";
  }
} 

// onMouseOver={hideElement('#del-icon')}
// onMouseOver={() => {var x = document.getElementById("del-icon"); x.style.display = "none" }}


const ItemLista = (props) => {

  return (

    //<div>
    
      <div className={`${styles.bloco2Items} ${' '}`}>
        
        <div  className={`${styles.checkBox} ${' '}`}>
          <FormGroup check>
            <Input check type="checkbox" className={styles.input}/>
            <Label check className={`${styles.inputLabel} ${' '}`}>
              {props.descricao}          
            </Label>
          </FormGroup> 
          
          <img id='del-icon' src={delIcon} alt='IconeAdicionar' width='4%' type='button' onClick={() => alert('Excluir')} className={`${styles.iconeDel} ${'float-right'} ${''}`}/>
        
        </div>
        
      </div> 
    
      // </div>
  )
}

export default ItemLista