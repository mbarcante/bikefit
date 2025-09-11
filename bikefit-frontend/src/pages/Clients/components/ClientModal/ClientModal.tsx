import { Button } from 'react-bootstrap';
import { IClient, IPaginatedClientResponse } from '../../../../types';
import GenericFormModal from '../../../../components/Forms/GenericFormModal';
import { clientFields } from '../../../../components/Forms/clientFields';
import Icon from '../../../../utils/Icons';
import useClientModal from './ClientModal.logic';

interface ClientModalProps {
  item?: IClient;
  getClients: (limit?: number, offset?: number) => Promise<IPaginatedClientResponse>;
}

const ClientModal = ({ item, getClients }: ClientModalProps) => {
  const { handleClose, handleFormSubmit, handleShow, initialData, show, isUpdating, isSaving } = useClientModal({ item, getClients });

  return (
    <>
      <Button onClick={handleShow} variant={isUpdating ? 'primary' : 'success'}>
        {isUpdating ? (
          <Icon type="edit" />
        ) : (
          <>
            <Icon type="add" /> Novo Cliente
          </>
        )}
      </Button>
      <GenericFormModal
        show={show}
        handleClose={handleClose}
        title={isUpdating ? 'Editar Cliente' : 'Criar Novo Cliente'}
        fieldsConfig={clientFields}
        initialData={initialData}
        onSubmit={handleFormSubmit}
        isSaving={isSaving}
      />
    </>
  );
};

export default ClientModal;
