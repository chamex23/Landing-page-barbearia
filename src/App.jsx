import Contato from './components/Contato/contato'
import Header from './components/Header/header'
import Home from './components/Home/home'
import Service from './components/Serviços/service'
import Sobre from './components/Sobre/Sobre'
import Unidade from './components/Unidade/unidade'


export default function App(){
  return(
    <>
      <Header />
      <Home />
      <Sobre />
      <Service />
      <Contato />
      <Unidade />
    </>
  )
}