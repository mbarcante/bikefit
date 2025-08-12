import { IPostureEvaluation } from "../../types";
import { useLocation, useParams } from "react-router-dom";
import usePostureEvaluationFormPage from "./PostureEvaluationFormPage.logic";

interface PostureEvaluationFormProps {
    item?: IPostureEvaluation;
    clientIdFromUrl?: number;
}

const PostureEvaluationFormPage = () => {
    const { id } = useParams();
    const location = useLocation();
    const item: IPostureEvaluation | undefined = location.state as IPostureEvaluation | undefined;
    const { } = usePostureEvaluationFormPage(item, id);

}

export default PostureEvaluationFormPage;