import { FormField } from '../../types';

export const clientFields: FormField[] = [
  { name: 'name', label: 'Nome', type: 'text', placeholder: 'Nome completo', required: true },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'nome@exemplo.com', required: true },
  {
    name: 'sex',
    label: 'Sexo',
    type: 'select',
    placeholder: 'Selecione',
    options: [
      { value: '', label: 'Selecione', disabled: true },
      { value: 'F', label: 'Feminino' },
      { value: 'M', label: 'Masculino' },
    ],
    required: true,
  },
  { name: 'birthDate', label: 'Data de Nascimento', type: 'date', required: true },
  { name: 'cellphone', label: 'Celular', type: 'tel', placeholder: '(XX) XXXXX-XXXX', required: true },
  { name: 'profession', label: 'Profissão', type: 'text', placeholder: 'Profissão' },
  { name: 'observations', label: 'Observações', type: 'textarea', placeholder: 'Observações', rows: 3 },
];
