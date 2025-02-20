import { useRef } from 'react'
import api from '../../services/api'

import {
  Title,
  Container,
  TopBackground,
  Form,
  ContainerInputs,
  Input,
  Button,
  InputLabel
} from './styles'

import UsersImage from '../../assets/users.png'

function Home() {
  const inputName = useRef ()
  const inputAge = useRef ()
  const inputEmail = useRef ()

async function registerNewUser(){
  const data = await api.post('/usuarios', {
    email: inputEmail.current.value,
    age: parseInt(inputAge.current.value),
    name: inputName.current.value
  })  

  console.log(data)
}

  return (
    <Container>
      <TopBackground>
        <img src={UsersImage} alt="imagem-usuarios" />
      </TopBackground>

      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>
          <div>
            <InputLabel>
              Nome<span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do usuário" ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Idade<span> *</span>
            </InputLabel>
            <Input type="number" placeholder="Idade do usuário" ref={inputAge} />
          </div>
        </ContainerInputs>

        <div style={{ width: '100%'}}>
          <InputLabel>
            E-mail<span> *</span>
          </InputLabel>
          <Input type="email" placeholder="E-mail do usuário" ref={inputEmail} />
        </div>

        <Button type='button' onClick={registerNewUser}>Cadastrar Usuário</Button>
      </Form>
    </Container>
  )
}

export default Home

/*para exportar la informacin desde aqui lo puedo hacer de dos formas.
 Exportar "default o padron"
o sencillamente
 apenas exportar
 la direfencia es que:
 defaul solo puedo exportar una cosa solo por pagina.
 exportar cuando quiero ewxportar varias cosas por ejemplo
 app  y app 2
 entonces debolo colocar la palabra expotar antes de la app ejemplo asi 
 Exportar <App>
 Exportar <App2>
 
 ahora ojo 
 en la  pagina donde recibo l exportacion tambiern debe cambiar ejemplo
 si exporto por defaul debe ir asi 
 import App from './App.jsx'
 ahora si uso desde la base el export solamente debo usar esto en la pag de recepcion
import { App, App2 } from './App.jsx'
y aqui ya se que estoy esperand dos  omas elementos de la pagina de origen*/


