import { Container } from "react-bootstrap"
import useBikeFitFormPage from "./BikeFitFormPage.logic"
import { useLocation, useParams } from "react-router-dom";
import { IBikeFit } from "../../../types";
import { bikeFitFields } from "../../../components/Forms/bikeFitFields";
import GenericForm from "../../../components/Forms/GenericForm";

type LocationState = {
    item?: IBikeFit;
};
const BikeFitFormPage = () => {
    const { id } = useParams()
    const location = useLocation();
    const item: IBikeFit | undefined = location.state as IBikeFit | undefined;
    const { initialData, handleFormSubmit, isSaving } = useBikeFitFormPage(item, id)

    return (
        <Container>
            <h1 className="h2 mb-5">{item ? `Editar BikeFit de id ${item.id}` : `Criar Bikefit`} </h1>
            <GenericForm
                fieldsConfig={bikeFitFields}
                initialData={initialData}
                onSubmit={handleFormSubmit}
                isSaving={isSaving}
            />
        </Container>
    )
}

export default BikeFitFormPage