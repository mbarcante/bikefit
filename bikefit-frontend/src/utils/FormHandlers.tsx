import React from 'react';
import { FormState } from '../types';

// A função para o estado 'setFormData' do seu componente
type SetFormState = React.Dispatch<React.SetStateAction<FormState>>;

// 1. Manipulador para campos de texto, números, data, select, etc.
export const handleGenericChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  setFormData: SetFormState,
) => {
  const { name, value, type } = e.target;

  let processedValue: string | number | boolean | File | FileList | undefined | null;

  if (type === 'checkbox') {
    processedValue = (e.target as HTMLInputElement).checked;
  } else {
    processedValue = value;
  }

  setFormData((prev) => ({
    ...prev,
    [name]: processedValue,
  }));
};

// 2. Manipulador para campos de upload de arquivo
export const handleFileUploadChange = (e: React.ChangeEvent<HTMLInputElement>, setFormData: SetFormState) => {
  const { name, files } = e.target;
  if (files) {
    setFormData((prev) => ({
      ...prev,
      [name]: files.length > 1 ? files : files[0],
    }));
  }
};
