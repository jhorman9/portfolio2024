import { Helmet } from "react-helmet-async";

interface HomeProps {
  urlPage: string;
}

export const Home = ( { urlPage }: HomeProps) => {

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Web Makers - Desarrollo de Páginas Web</title>
        <meta name="description" content="Somos expertos en desarrollo de páginas web que te ayudarán a destacar en línea. Contáctanos para crear tu sitio web hoy mismo." />
        <link rel="canonical" href={urlPage} />
      </Helmet>
      <section>
        <h1>
          Bienvenido a mi pagina web
        </h1>
      </section>
    </>
  )
}