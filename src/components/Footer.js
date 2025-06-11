
import Contato from './Contato';
import DireitosAutorais from './DireitosAutorais';
import Mapa from './Mapa';

function Footer(props) {
  return (
    <div>
      <Contato/>

      <Mapa/>
      <DireitosAutorais/>
    </div>
  );
}

export default Footer;