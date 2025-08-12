import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FormState, FormField } from '../../types/forms';
import { handleGenericChange, handleFileUploadChange } from '../../utils/FormHandlers';

interface GenericFormProps {
  fieldsConfig: FormField[];
  initialData?: FormState;
  onSubmit: (formData: FormState) => void;
  isSaving?: boolean;
}

const GenericForm: React.FC<GenericFormProps> = ({ fieldsConfig, initialData, onSubmit, isSaving }) => {
  const [formData, setFormData] = useState<FormState>(initialData || {});

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        {fieldsConfig.map((field) => (
          <Form.Group as={Col} md={field.col || 12} className="mb-3" controlId={`form-${field.name}`} key={field.name}>
            <Form.Label>{field.label}</Form.Label>
            {field.type === 'select' ? (
              <Form.Control
                as="select"
                name={field.name}
                value={(formData[field.name] as any) || ''}
                onChange={(e) => handleGenericChange(e, setFormData)}
                required={field.required}
              >
                {field.options?.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Form.Control>
            ) : field.type === 'textarea' ? (
              <Form.Control
                as="textarea"
                name={field.name}
                placeholder={field.placeholder}
                value={(formData[field.name] as any) || ''}
                onChange={(e) => handleGenericChange(e, setFormData)}
                required={field.required}
                rows={field.rows}
              />
            ) : (
              <Form.Control
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={field.type !== 'file' ? (formData[field.name] as any) || '' : undefined}
                onChange={(e) => {
                  if (field.type === 'file') {
                    handleFileUploadChange(e as React.ChangeEvent<HTMLInputElement>, setFormData);
                  } else {
                    handleGenericChange(e, setFormData);
                  }
                }}
                required={field.required}
              />
            )}
          </Form.Group>
        ))}
      </Row>
      <div className="d-flex justify-content-end mt-3">
        <Button variant="success" type="submit" disabled={isSaving}>
          {isSaving ? 'Salvando...' : 'Salvar'}
        </Button>
      </div>
    </Form>
  );
};

export default GenericForm;
