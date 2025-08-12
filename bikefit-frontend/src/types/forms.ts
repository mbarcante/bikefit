export type FormInputType =
  | 'text'
  | 'number'
  | 'textarea'
  | 'email'
  | 'password'
  | 'date'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'file'
  | 'custom'
  | 'tel';
export interface FormField {
  name: string;
  label: string;
  type: FormInputType;
  placeholder?: string;
  required?: boolean;
  defaultValue?: any;
  col?: number;
  className?: string;

  min?: number;
  max?: number;
  step?: number;

  rows?: number;

  options?: { value: string | number; label: string; disabled?: boolean; }[];

  accept?: string;
  multiple?: boolean;

  readOnly?: boolean;
  disabled?: boolean;

  helpText?: string;

  section?: string;

  render?: (
    field: FormField,
    value: any,
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void,
    error?: string,
  ) => React.ReactNode;
}

export type FormState = {
  [key: string]: string | number | boolean | File | FileList | undefined | Date | null;
};
