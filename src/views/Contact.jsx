import Button from 'react-bootstrap/Button';
import  Form from 'react-bootstrap/form';

const Formulario = () => {
    return (
        <Form className='d-flex flex-column m-5'>
          <h3>Cuentanos, ¿en qué podemos ayudarte?</h3>
          <Form.Group className="mb-3">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={5}/>
      </Form.Group>
      <div className='d-flex flex-row justify-content-center'>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </div>
    </Form>
  );
}

export default Formulario;

