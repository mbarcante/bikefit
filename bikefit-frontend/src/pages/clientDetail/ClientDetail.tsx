import { Container, Button } from "react-bootstrap";
import BikeFitsCard from "./components/BikeFitsCard";
import BikesCard from "./components/BikesCard";
import PostureEvaluationsCard from "./components/PostureEvaluations";
// import { useParams } from "react-router-dom";
import { ClientService } from "../../services";
import { useEffect, useState, useCallback } from "react";
// import { useNavigate } from "react-router-dom";

const ClientDetail = () => {
  // const { id } = useParams(); // 'id' corresponde ao ':id' na definição da rota
  const [client, setClient] = useState({});
  // const getClient = useCallback(async () => {
  //   const data = await ClientService.getClientById(Number(id));
  //   setClient(data);
  // }, [id]);

  // useEffect(() => {
  //   if (id) {
  //     getClient();
  //   }
  // }, [id, getClient]);

  return (
    <div>
      <div>
        <h1>Perfil</h1>
      </div>
      <div>
        {/* <BikesCard client={} /> */}
        {/* <BikeFitsCard /> */}
        {/* <PostureEvaluationsCard /> */}
        <div>OLHA AQUI ALOHA</div>
      </div>
      <div>
        <Button variant="primary">Save Changes</Button>
      </div>
    </div>
  );
};

export default ClientDetail;
