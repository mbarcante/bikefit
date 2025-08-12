import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import GenericForm from './GenericForm'; // Importa o novo componente
import { FormField, FormState } from '../../types';

interface GenericFormModalProps {
  show: boolean;
  handleClose: () => void;
  title: string;
  fieldsConfig: FormField[];
  initialData?: FormState;
  onSubmit: (formData: FormState) => void;
  isSaving?: boolean;
}

const GenericFormModal: React.FC<GenericFormModalProps> = ({
  show,
  handleClose,
  title,
  fieldsConfig,
  initialData,
  onSubmit,
  isSaving,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <GenericForm fieldsConfig={fieldsConfig} initialData={initialData} onSubmit={onSubmit} isSaving={isSaving} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GenericFormModal;
