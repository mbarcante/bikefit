import { FormField } from 'src/types'

export const userFormFields: FormField[] = [
    {
        name: 'name',
        label: 'ID do Usário',
        type: 'text',
        required: true,
        placeholder: 'Ex: João da Silva',
        col: 12
    },
    {
        name: 'email',
        label: 'E-mail',
        type: 'email',
        required: true,
        placeholder: 'Ex: joao@email.com',
        col: 12
    },
    {
        name: 'password',
        label: 'Senha',
        type: 'password',
        required: true,
        placeholder: 'Ex: ********',
        col: 12
    },

]