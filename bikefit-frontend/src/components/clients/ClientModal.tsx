'use client'

import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { IClient, IClientCreationPayload } from '@/types/client'
import { ClientService } from '@/services/clients'

const clientSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  sex: z.enum(['M', 'F'], { required_error: 'Sexo é obrigatório' }),
  birthDate: z.string().min(1, 'Data de nascimento é obrigatória'),
  cellphone: z.string().min(1, 'Celular é obrigatório'),
  profession: z.string().optional(),
  observations: z.string().optional(),
})

type ClientFormData = z.infer<typeof clientSchema>

interface ClientModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
  client?: IClient
}

export default function ClientModal({ isOpen, onClose, onSuccess, client }: ClientModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const isEditing = !!client

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ClientFormData>({
    resolver: zodResolver(clientSchema),
  })

  useEffect(() => {
    if (client) {
      reset({
        name: client.name,
        email: client.email,
        sex: client.sex as 'M' | 'F',
        birthDate: client.birthDate,
        cellphone: client.cellphone,
        profession: client.profession || '',
        observations: client.observations || '',
      })
    } else {
      reset({
        name: '',
        email: '',
        sex: undefined,
        birthDate: '',
        cellphone: '',
        profession: '',
        observations: '',
      })
    }
  }, [client, reset])

  const onSubmit = async (data: ClientFormData) => {
    setIsLoading(true)
    try {
      const payload: IClientCreationPayload = {
        name: data.name,
        email: data.email,
        sex: data.sex,
        birthDate: data.birthDate,
        cellphone: data.cellphone,
        profession: data.profession || undefined,
        observations: data.observations || undefined,
      }

      if (isEditing) {
        await ClientService.patchClient(client.id, payload)
      } else {
        await ClientService.addClient(payload)
      }

      onSuccess()
    } catch (error) {
      console.error('Erro ao salvar cliente:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white dark:bg-gray-800 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white dark:bg-gray-800 text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-0 sm:mt-0 sm:text-left w-full">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                      {isEditing ? 'Editar Cliente' : 'Novo Cliente'}
                    </Dialog.Title>

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
                      <div>
                        <label htmlFor="name" className="label text-gray-700 dark:text-gray-300">
                          Nome *
                        </label>
                        <input
                          {...register('name')}
                          type="text"
                          className="input-field bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-teal-500 focus:border-teal-500"
                          placeholder="Nome completo"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="label text-gray-700 dark:text-gray-300">
                          Email *
                        </label>
                        <input
                          {...register('email')}
                          type="email"
                          className="input-field bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-teal-500 focus:border-teal-500"
                          placeholder="email@exemplo.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="sex" className="label text-gray-700 dark:text-gray-300">
                            Sexo *
                          </label>
                          <select {...register('sex')} className="input-field bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-teal-500 focus:border-teal-500">
                            <option value="">Selecione</option>
                            <option value="M">Masculino</option>
                            <option value="F">Feminino</option>
                          </select>
                          {errors.sex && (
                            <p className="mt-1 text-sm text-red-600">{errors.sex.message}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="birthDate" className="label text-gray-700 dark:text-gray-300">
                            Data de Nascimento *
                          </label>
                          <input
                            {...register('birthDate')}
                            type="date"
                            className="input-field bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-teal-500 focus:border-teal-500"
                          />
                          {errors.birthDate && (
                            <p className="mt-1 text-sm text-red-600">{errors.birthDate.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="cellphone" className="label text-gray-700 dark:text-gray-300">
                            Celular *
                          </label>
                          <input
                            {...register('cellphone')}
                            type="tel"
                            className="input-field bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-teal-500 focus:border-teal-500"
                            placeholder="(11) 99999-9999"
                          />
                          {errors.cellphone && (
                            <p className="mt-1 text-sm text-red-600">{errors.cellphone.message}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="profession" className="label text-gray-700 dark:text-gray-300">
                            Profissão
                          </label>
                          <input
                            {...register('profession')}
                            type="text"
                            className="input-field bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-teal-500 focus:border-teal-500"
                            placeholder="Profissão"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="observations" className="label text-gray-700 dark:text-gray-300">
                          Observações
                        </label>
                        <textarea
                          {...register('observations')}
                          rows={3}
                          className="input-field bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-teal-500 focus:border-teal-500"
                          placeholder="Observações adicionais..."
                        />
                      </div>

                      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="inline-flex w-full justify-center btn-primary sm:ml-3 sm:w-auto bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50"
                        >
                          {isLoading ? 'Salvando...' : isEditing ? 'Atualizar' : 'Criar'}
                        </button>
                        <button
                          type="button"
                          className="mt-3 inline-flex w-full justify-center btn-secondary sm:mt-0 sm:w-auto border border-gray-300 dark:border-gray-700 rounded-md shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:text-sm"
                          onClick={onClose}
                        >
                          Cancelar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}