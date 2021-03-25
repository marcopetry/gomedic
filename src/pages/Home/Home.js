import React, { useEffect, useState } from 'react'
import { Banner } from '../Banner/Banner'
import { Footer } from './Footer/Footer'
import { Header } from './Header'
import { SessionCadastro } from './SessionCadastro/SessionCadastro'
import { SessionContatos } from './SessionContatos'
import { SessionEnviarMensagem } from './SessionEnviarMensagem/SessionEnviarMensagem'
import { SessionProfissionais } from './SessionProfissionais'

const Home = () => {
  const [isBannerOpen, setBannerOpen] = useState(true)

  useEffect(() => {
    if (isBannerOpen) {
      document.body.style.overflow = 'hidden'
      document.querySelector('html').scrollTop = window.scrollY
    } else {
      document.body.style.overflow = 'scroll'
    }
  }, [isBannerOpen])

  return (
    <>
      {isBannerOpen && <Banner setBannerOpen={setBannerOpen} />}
      <Header setBannerOpen={setBannerOpen} />
      <SessionProfissionais />
      <SessionCadastro />
      <SessionEnviarMensagem />
      <SessionContatos />
      <Footer />
    </>
  )
}

export default Home
