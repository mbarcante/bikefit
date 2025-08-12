import { Form, Container, Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate('/clientes')
    }
    return (
        <Container
            fluid
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: '100vh' }}
        >
            <Card bg="Light" border="dark" className="w-25 h-">
                <Card.Header as="h4">BikeFit</Card.Header>
                <Card.Body>
                    <Card.Title>Login</Card.Title>
                    <Card.Text as="div">
                        <Form className="p-3 " onSubmit={onSubmit}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email do usuário</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="w-100">
                                <i className="bi bi-box-arrow-in-right" /> Entrar
                            </Button>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container >

    );
}

export default Home;