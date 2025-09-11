import { Button } from 'react-bootstrap';
import { IUser } from '../../../../types';
import GenericFormModal from '../../../../components/Forms/GenericFormModal';
import { userFormFields } from '../../../../components/Forms/userFormFields';
import Icon from '../../../../utils/Icons';
import useUserModal from './UserModal.logic';
interface UserModalProps {
    item?: IUser;
    getUsers: () => Promise<void>;
}

const UserModal = ({ item, getUsers }: UserModalProps) => {
    const { handleClose, handleFormSubmit, handleShow, initialData, show, isUpdating, isSaving } = useUserModal({ item, getUsers });

    return (
        <>
            <Button onClick={handleShow} variant={isUpdating ? 'primary' : 'success'}>
                {isUpdating ? (
                    <Icon type="edit" />
                ) : (
                    <>
                        <Icon type="add" /> Novo Usuário
                    </>
                )}
            </Button>
            <GenericFormModal
                show={show}
                handleClose={handleClose}
                title={isUpdating ? 'Editar Cliente' : 'Criar Novo Cliente'}
                fieldsConfig={userFormFields}
                initialData={initialData}
                onSubmit={handleFormSubmit}
                isSaving={isSaving}
            />
        </>
    );
};

export default UserModal;