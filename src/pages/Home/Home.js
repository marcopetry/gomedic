import React from 'react'
import { Footer } from './Footer/Footer'
import { Header } from './Header'
import { SessionCadastro } from './SessionCadastro/SessionCadastro'
import { SessionContatos } from './SessionContatos'
import { SessionEnviarMensagem } from './SessionEnviarMensagem/SessionEnviarMensagem'
import { SessionProfissionais } from './SessionProfissionais'

const Home = () => {
  return (
    <>
      <Header />
      <SessionProfissionais />
      <SessionCadastro />
      <SessionEnviarMensagem />
      <SessionContatos />
      <Footer />
    </>
  )
}

export default Home
