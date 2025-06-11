import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DireitosAutorais() {

    const currentYear = new Date().getFullYear();

    const bgcolor = { backgroundColor: '#cccccc', padding: '20px 0px', marginTop: '-7px' };
    const centralizar = { textAlign: 'center' };

  return (
    <Container fluid style={bgcolor}>
        <Row>
            <Col style={centralizar}>
                &copy; {currentYear} Pet Shop - Todos os direitos reservados
            </Col>
        </Row>
    </Container>
  )
}

export default DireitosAutorais