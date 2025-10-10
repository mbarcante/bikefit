'use client'

import { motion } from 'framer-motion'
import { PencilIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { IClient } from '@/types/client'
import { CalendarDaysIcon, UserGroupIcon } from '@heroicons/react/24/solid' // Novos ícones para melhor visual

interface ClientsTableProps {
  clients: IClient[]
  isLoading: boolean
  onEdit: (client: IClient) => void
  onDelete: (id: number) => void
}

export default function ClientsTable({ clients, isLoading, onEdit, onDelete }: ClientsTableProps) {
  // Use a cor primária de saúde (Verde/Teal)
  const PRIMARY_COLOR_CLASSES = "text-teal-600 hover:text-teal-800"
  const PRIMARY_BG_HOVER = "hover:bg-teal-50"
  const BG_HEADER = "bg-teal-50/50 dark:bg-gray-800"

  // --- Estado de Carregamento (Skeleton Loading) ---
  if (isLoading) {
    return (
      <div className="rounded-xl overflow-hidden shadow-lg p-6 bg-white dark:bg-gray-800">
        <div className="space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
          ))}
        </div>
      </div>
    )
  }

  // --- Estado de Tabela Vazia ---
  if (clients.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
        <UserGroupIcon className="mx-auto h-16 w-16 text-teal-400" />
        <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">Nenhum cliente cadastrado</h3>
        <p className="mt-2 text-md text-gray-600 dark:text-gray-400">
          Comece criando um novo cliente para gerenciar os prontuários e agendamentos.
        </p>
        <div className="mt-6">
          {/* Pode ser substituído por um botão de "Adicionar Novo Cliente" real */}
          <button
            className="inline-flex items-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-teal-700 transition duration-150"
            onClick={() => console.log('Abrir modal de novo cliente')}
          >
            <PencilIcon className="-ml-0.5 mr-2 h-4 w-4" />
            Novo Cliente
          </button>
        </div>
      </div>
    )
  }

  // --- Tabela de Clientes ---
  return (
    <div className="overflow-hidden shadow-2xl rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className={BG_HEADER}>
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                Cliente
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider hidden sm:table-cell">
                Contato
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider hidden md:table-cell">
                Detalhes
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider hidden lg:table-cell">
                Cadastro
              </th>
              <th className="px-6 py-4 text-right text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-100 dark:divide-gray-700">
            {clients.map((client, index) => (
              <motion.tr
                key={client.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="hover:bg-teal-50/40 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      {/* Avatar baseado na nova paleta de cores */}
                      <div className="h-10 w-10 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center shadow-inner">
                        <span className="text-sm font-bold text-teal-700 dark:text-teal-400">
                          {client.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">{client.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">ID: {client.id}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                  <div className="text-sm font-medium text-gray-800 dark:text-gray-200">{client.email}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{client.cellphone}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                  {/* Informações organizadas em tags ou pequenos blocos */}
                  <div className="flex flex-col space-y-1">
                    <span className="text-xs font-medium inline-flex items-center text-gray-700 dark:text-gray-300">
                      {client.sex === 'M' ? '♂ Masculino' : '♀ Feminino'}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Nasc.: {new Date(client.birthDate).toLocaleDateString('pt-BR')}
                    </span>
                    {client.profession && (
                      <span className="text-xs font-light text-gray-500 dark:text-gray-400">
                        Profissão: {client.profession}
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 hidden lg:table-cell">
                  <div className="inline-flex items-center text-xs font-semibold text-gray-600 dark:text-gray-300">
                    <CalendarDaysIcon className="h-4 w-4 mr-1 text-teal-500" />
                    {new Date(client.createdAt).toLocaleDateString('pt-BR')}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-1">
                    {/* Botão de Ver (EyeIcon) - Cor Primária (Teal) */}
                    <Link
                      href={`/clients/${client.id}`}
                      className={`p-2 rounded-full transition-colors duration-200 ${PRIMARY_COLOR_CLASSES} ${PRIMARY_BG_HOVER}`}
                      title="Ver Detalhes"
                    >
                      <EyeIcon className="h-4 w-4" />
                    </Link>
                    {/* Botão de Editar (PencilIcon) - Cor Secundária (Blue) */}
                    <button
                      onClick={() => onEdit(client)}
                      className="text-blue-600 hover:text-blue-800 p-2 rounded-full transition-colors duration-200 hover:bg-blue-50"
                      title="Editar Cliente"
                    >
                      <PencilIcon className="h-4 w-4" />
                    </button>
                    {/* Botão de Excluir (TrashIcon) - Cor de Risco (Red) */}
                    <button
                      onClick={() => onDelete(client.id)}
                      className="text-red-600 hover:text-red-800 p-2 rounded-full transition-colors duration-200 hover:bg-red-50"
                      title="Excluir Cliente"
                    >
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}