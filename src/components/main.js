import React from 'react';
import {Container, Row, Col} from 'reactstrap'
import LogoXoping from '../assets/Logo_Xoping.png'
import ListIcon from '../assets/list.png'
import ClockIcon from '../assets/XMLID_1031_.png'
import SuppIcon from '../assets/technical-support.png'
import ExitIcon from '../assets/logout.png'
import AddIcon from '../assets/iconeMais.png'
import TrueIcon from '../assets/iconeTrue.png'
import CheckTrueIcon from '../assets/iconeCheckTrue.png'
import styles from './main.module.css'
import ItemLista from './itemLista'
import '../assets/segoeui.ttf'
import '../assets/segoeuib.ttf'
import '../assets/seguisb.ttf'

class Main extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      descricao: ' '
    };

    this.cadastrar = this.cadastrar.bind(this);
    var firebaseConfig = {

    };

  }

  cadastrar(e) {

  }

  render() {
    return (
      // <Container fluid='md'> // utilizado no App.js
        <Row>
        
          <Col md={{ size: 2, offset: 0 }} role='complementary' className={`${styles.cols} ${''}`}>

            <div className={`${styles.bloco1} ${'align-items-center justify-content-center'}`}>
              <img id='logo-xoping' src={LogoXoping} alt='Logo da Xoping' width='50%' className={`${styles.logoXoping} ${'img-responsive center-block d-block mx-auto'}`}/>

              <div className={`${styles.bloco1Items} ${' '}`}>
                <img src={ListIcon} alt='ListIcon' width='11%' className= 'float-left' style={{margin: '1% 3% 0 0' }} />
                <p className={styles.blueHighlight}>Lista de compra</p>
              </div>

              <div className={`${styles.bloco1Items} ${' '}`}>
                <img src={ClockIcon} alt='ClockIcon' width='11%' className= 'float-left' style={{margin: '1% 3% 0 0' }} />
                <p className={styles}>Histórico</p>
              </div>

              <div className={`${styles.bloco1Items} ${' '}`}>
                <img src={SuppIcon} alt='SuppIcon' width='11%' className= 'float-left' style={{margin: '1% 3% 0 0' }} />
                <p className={styles.p}>Configurações</p>
              </div>

              <div className={`${styles.bloco1Items} ${' '}`} style={{margin: '100% 0 0 10%', padding: '70% 0 0 0', border: '0'} }>
                <img src={ExitIcon} alt='ExitIcon' width='10%' className= 'float-left' style={{margin: '8% 3% 0 0' }} />
                <p className='' style={{margin: '7% 3% 0 0' }}>Sair</p>
              </div>

            </div>

          </Col>

          <Col md={{ size:10, offset: 0}} role='main' className={`${styles.cols} ${''}`}>
            <div className={ `${styles.bloco2} ${'align-items-center justify-content-center'} `}> 
              <h1 className={ `${styles.titleBloco2} ${''} `}>Sua lista de compras</h1>

              <ItemLista descricao="500 gramas de macarrão"/>
              <ItemLista descricao="Uma bandeja de ovos de galinhas grandes"/>
              <ItemLista descricao="3kg de farinha de trigo tipo 5"/>
              <ItemLista descricao="1,5kg de fraldinha"/>
              <ItemLista descricao="2 garrafas de vinho tinto"/>
              <ItemLista descricao="Duas grades de cerveja litrão"/>

              <div className={`${styles.bloco2UnableItems} ${' '}`}>
                <img src={AddIcon} alt='IconeAdicionar' width='2%' type='button' onClick={() => alert('Adicionar')} className={`${styles.iconesBloco2} ${'float-left'}`}/>
                <p className={`${styles.bloco2UnableP} ${' '}`}>Adicionar novo item</p>
                
                {/* <form onSubmit={this.cadastrar}>
                  <label>Descrição</label>
                  <input type='text' value={this.state.descricao} onchange={(e) => this.setState({descricao: e.target.value})}/>
                  <input type='submit' value={'Ok'}/>
                </form> */}
                
              </div>

              <hr className={ `${styles.line} ${''} `}></hr>

              <div className={`${styles.bloco2UnableItems} ${' '}`}>
                <img src={TrueIcon} alt='IconeTrue' width='2%' className={`${styles.iconesBloco2} ${'float-left'}`}/>
                <p className={`${styles.bloco2UnableP} ${' '}`} >Items concluídos</p>
              </div>

              <div className={`${styles.bloco2UnableItems} ${''}`}>
                <img src={CheckTrueIcon} alt='IconeCheckTrue' width='2%' className={`${styles.iconesBloco2} ${'float-left'}`}/>
                <p className={`${styles.bloco2UnableP} ${' '}`} style={{textDecoration: 'line-through', textDecorationThickness: '0.07em' }}>12 pães franceses</p>
              </div>

            </div>
            
          </Col>

        </Row>
      // </Container> // utilizado no App.js
  );
  }
  
};

export default Main;
