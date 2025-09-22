import { Button, Card, Container, Table } from "react-bootstrap";
import { useEffect } from "react";
import useUsers from "./Users.logic";
import UserModal from "./components/UserModal/UserModal";
import { useNavigate } from "react-router-dom";
import Icon from "src/utils/Icons";


const Users = () => {
    const navigate = useNavigate();
    const { users, loading, error, getUsers, deleteUser } = useUsers();
    useEffect(() => {
        getUsers();
    }, [getUsers]);
    return (
        <Container fluid>
            <Card>
                <Card.Header className="d-flex justify-content-between">
                    <div>
                        <h5> Usuários</h5>
                    </div>
                    <UserModal getUsers={getUsers} />

                </Card.Header>
                <Card.Body>
                    <Table striped bordered>
                        <thead>
                            <tr className=" bg-secondary text-white">
                                <th className="text-center bg-transparent text-white">Id</th>
                                <th className="text-center bg-transparent text-white">Nome</th>
                                <th className="text-center bg-transparent text-white">E-mail</th>

                                <th className="text-center bg-transparent text-white"> Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td className="d-flex gap-2 justify-content-center">
                                        <UserModal getUsers={getUsers} item={item} />
                                        {/* <Button variant="info" onClick={() => navigate(`/cliente/${item.id}`)}> <Icon type="profile" /> </Button> */}
                                        <Button variant="danger" onClick={() => deleteUser(Number(item.id))}> <Icon type="exclude" /> </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Users;