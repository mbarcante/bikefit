import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { IClient, IClientCreationPayload } from "../../../../interfaces";
import { ClientService } from "../../../../services";

interface ClientModalProps {
  item?: IClient;
  getClients: () => Promise<void>;
}

const ClientModal = ({ item, getClients }: ClientModalProps) => {
  const isUpdating = !!item;
  const [show, setShow] = useState<boolean>(false);
  const [name, setName] = useState<string>(isUpdating ? item.name : "");
  const [email, setEmail] = useState<string>(isUpdating ? item.email : "");
  const [sex, setSex] = useState<string>(isUpdating ? item.sex : "");
  const [observations, setObservations] = useState<string>(
    isUpdating && item.observations !== undefined ? item.observations : ""
  );
  const [cellphone, setCellphone] = useState<string>(
    item ? item.cellphone : ""
  );
  const [birthDate, setBirthDate] = useState<string>(
    item ? item.birthDate : ""
  );
  const [profession, setProfession] = useState<string>(
    isUpdating && item.profession !== undefined ? item.profession : ""
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !sex || !birthDate || !cellphone) {
      alert(
        "Por favor, preencha todos os campos obrigatórios: Nome, E-mail, Sexo, Data de Nascimento e Celular."
      );
      return;
    }
    const clientPayload: IClientCreationPayload = {
      name: name!,
      email: email!,
      sex: sex!,
      birthDate: birthDate!,
      cellphone: cellphone!,
      profession: profession || undefined,
      observations: observations || undefined,
    };

    try {
      if (isUpdating) {
        await ClientService.patchClient(item!.id, clientPayload);
      } else {
        await ClientService.addClient(clientPayload);
      }
      handleClose();
      await getClients();
    } catch (error) {
      console.error("Erro ao salvar cliente:", error);
      alert("Ocorreu um erro ao salvar o cliente. Tente novamente.");
    }
  };

  return (
    <>
      <Button onClick={handleShow} variant={isUpdating ? "primary" : "success"}>
        {isUpdating ? (
          <>
            <i className="bi bi-pencil" />
          </>
        ) : (
          <>
            <i className="bi bi-person-plus-fill" /> Novo Cliente
          </>
        )}
      </Button>

      <Modal show={show} onHide={handleClose}>
        {" "}
        <Modal.Header closeButton>
          <Modal.Title>Criar Cliente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form className="p-3" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="nome@exemplo.com"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSex">
              <Form.Label>Sexo</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setSex(e.target.value)}
                value={sex}
                maxLength={1}
                placeholder="F ou M"
              />{" "}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBirthDate">
              <Form.Label>Data de Nascimento</Form.Label>
              <Form.Control
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formProfession">
              <Form.Label>Profissão</Form.Label>
              <Form.Control
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                type="text"
                placeholder="Profissão"
              />{" "}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCelphone">
              <Form.Label>Celular</Form.Label>
              <Form.Control
                value={cellphone}
                onChange={(e) => setCellphone(e.target.value)}
                type="tel"
                placeholder="(XX) XXXXX-XXXX"
              />{" "}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formObservations">
              <Form.Label>Observações</Form.Label>
              <Form.Control
                value={observations}
                onChange={(e) => setObservations(e.target.value)}
                as="textarea"
                rows={3}
                placeholder="Observações"
              />{" "}
            </Form.Group>

            <Button variant="success" type="submit" className="w-100 mt-3">
              <i className="bi bi-save" /> Salvar Cliente
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ClientModal;
