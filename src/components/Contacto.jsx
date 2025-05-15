import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FaMapMarkerAlt, FaWhatsapp, FaPhone, FaAt } from 'react-icons/fa';

const Contacto = () => {
  return (
    <div style={{ backgroundColor: '#2c2b2b', color: 'white', padding: '2rem', minHeight: '100vh' }}>
      <Container>
        <h2 style={{ fontWeight: 'bold', marginBottom: '2rem' }}>Contacto</h2>
        <Row>
          {/* Formulario */}
          <Col md={7}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Nombre" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="E-Mail" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Teléfono" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={5} placeholder="Mensaje" />
              </Form.Group>

              <Button style={{ width: '100%', backgroundColor: '#ff5e00', border: 'none' }}>
                Enviar
              </Button>
            </Form>
          </Col>

          <Col md={5}>
            <Card bg="dark" text="light" className="p-4">
              <Card.Body>
                <Card.Text>
                  <strong><FaMapMarkerAlt /> Dirección</strong><br />
                  Calle Falsa 2323, San Justo, Buenos Aires
                </Card.Text>
                <hr />
                <Card.Text>
                  <strong><FaWhatsapp /> Whatsapp</strong><br />
                  15-8080-2323
                </Card.Text>
                <hr />
                <Card.Text>
                  <strong><FaPhone /> Teléfono</strong><br />
                  4750-2323
                </Card.Text>
                <hr />
                <Card.Text>
                  <strong><FaAt /> E-Mail</strong><br />
                  mawlesstattoo@gmail.com
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contacto;
