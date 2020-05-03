import React, {useState, Fragment} from 'react';
import logo from './logo.svg';
import HeroHeader from './components/HeroHeader'
import Button from './components/Button'
import Text from './components/Text'

import './App.css';
import img from './img/HMD3.png'
import icon from './img/gift4.png'

const App = () => {
  let [message, setMessage] = useState(false)
  
  const onButtonClick = () => {
    setMessage(true)
  }

  return (
  
    <Fragment>
      <div className="App">
      
        <HeroHeader image={img}></HeroHeader>
        
          <Text> Muchas felicidades! Te queremos muuucho y seguro que pronto podemos celebrarlo juntos.</Text>

          <Button icon={icon} onClick={() => onButtonClick()}></Button>
          <Text margin={1}>Click aquí</Text>
        
          { message && (
            <Text color={'LightCoral'}>VIENE UN REGALITO DE CAMINO!!!</Text>
          )
        }
        <Text margin={3} color={'LightCoral'}>Muchos besos de La niña y José</Text>
        
      </div>
    </Fragment>
  );
}

export default App;
