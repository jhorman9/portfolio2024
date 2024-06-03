import logoJPG from '../../images/icono.png';

export const Footer = () => {
  return (
    <footer>
        <figure>
            <img src={logoJPG} alt="logo de web makers" loading='lazy' width={175} height={175} title='logo de web makers' />
        </figure>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <div>
            <h5>Web Makers</h5>
        </div>
        <div></div>
    </footer>
  )
}