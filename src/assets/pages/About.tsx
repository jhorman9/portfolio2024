import { Helmet } from "react-helmet-async";

export const About = () => {

  const holaWord= 'Hola Word';

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Web Makers - Sobre nosotros</title>
        <meta name="description" content="Conoce más sobre Web Makers, una empresa de desarrollo de software especializada en la creación de soluciones web innovadoras y de calidad." />
        <link rel="canonical" href="http://localhost:5173/#/about" />
      </Helmet>
      <div>{holaWord}</div>    
    </>
  )
}