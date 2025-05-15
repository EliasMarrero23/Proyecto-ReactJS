import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Cursos = () => {
  const cursos = [
    {
      id: 1,
      titulo: 'Curso de Tatuaje Inicial',
      descripcion: 'Ideal para principiantes. Aprendé desde cero técnicas básicas de higiene, líneas y sombreado.',
      duracion: '8 semanas',
      modalidad: 'Presencial y Online',
    },
    {
      id: 2,
      titulo: 'Técnicas Avanzadas de Sombreado',
      descripcion: 'Perfeccioná tus técnicas de sombreado, realismo y manejo de máquinas rotativas.',
      duracion: '4 semanas',
      modalidad: 'Online',
    },
    {
      id: 3,
      titulo: 'Curso Intensivo de Color',
      descripcion: 'Aprendé a trabajar con color, teoría cromática y aplicación segura en piel.',
      duracion: '6 semanas',
      modalidad: 'Presencial',
    },
  ];

  return (
    <div style={{ backgroundColor: '#1e1e1e', color: 'white', padding: '2rem', minHeight: '100vh' }}>
      <Container>
        <h2 style={{ fontWeight: 'bold', marginBottom: '2rem' }}>Nuestros Cursos</h2>
        <Row className="g-4">
          {cursos.map((curso) => (
            <Col md={4} key={curso.id}>
              <Card bg="dark" text="light" className="h-100">
                <Card.Body>
                  <Card.Title>{curso.titulo}</Card.Title>
                  <Card.Text>{curso.descripcion}</Card.Text>
                  <Card.Text><strong>Duración:</strong> {curso.duracion}</Card.Text>
                  <Card.Text><strong>Modalidad:</strong> {curso.modalidad}</Card.Text>
                </Card.Body>
                <Card.Footer style={{ backgroundColor: '#111', borderTop: '1px solid #333' }}>
                  <Button variant="warning" style={{ width: '100%' }}>Más información</Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Cursos;
