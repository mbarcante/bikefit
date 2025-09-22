import { IPostureEvaluation } from "@/types";
import { useLocation, useParams } from "react-router-dom";
import usePostureEvaluationFormPage from "./PostureEvaluationFormPage.logic";
import { Container } from "react-bootstrap";
import GenericForm from "src/components/Forms/GenericForm";

const PostureEvaluationFormPage = () => {
    const { id } = useParams();
    const location = useLocation();
    const item: IPostureEvaluation | undefined = location.state as IPostureEvaluation | undefined;
    const { handleFormSubmit, initialData, isSaving, postureEvaluationFormFields } = usePostureEvaluationFormPage(item, id);
    return (
        <Container>
            <h1 className="h2 mb-5">{item ? `Editar Avaliação Postural de id ${item.id}` : `Criar Avaliação Postural`}</h1>
            <GenericForm
                fieldsConfig={postureEvaluationFormFields}
                initialData={initialData}
                onSubmit={handleFormSubmit}
                isSaving={isSaving}
            />
        </Container>
    )
}

export default PostureEvaluationFormPage;