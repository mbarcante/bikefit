'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MagnifyingGlassIcon, ExclamationTriangleIcon, PlusIcon } from '@heroicons/react/24/outline'
import ClientsTable from '@/components/clients/ClientsTable'
import ClientModal from '@/components/clients/ClientModal'
import { IClient } from '@/types/client'
import { ClientService } from '@/services/clients'

export default function ClientsPage() {
  const [clients, setClients] = useState<IClient[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedClient, setSelectedClient] = useState<IClient | undefined>()
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false)
  const [clientToDeleteId, setClientToDeleteId] = useState<number | null>(null)

  const fetchClients = async () => {
    try {
      setIsLoading(true)
      const data = await ClientService.getAllClients()
      setClients(data)
    } catch (error) {
      console.error('Erro ao buscar clientes:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchClients()
  }, [])

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleEditClient = (client: IClient) => {
    setSelectedClient(client)
    setIsModalOpen(true)
  }

  const handleDeleteClient = (id: number) => {
    setClientToDeleteId(id)
    setIsConfirmationModalOpen(true)
  }

  const handleConfirmDelete = async () => {
    if (clientToDeleteId !== null) {
      try {
        await ClientService.deleteClient(clientToDeleteId)
        await fetchClients()
      } catch (error) {
        console.error('Erro ao excluir cliente:', error)
      } finally {
        setIsConfirmationModalOpen(false)
        setClientToDeleteId(null)
      }
    }
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedClient(undefined)
  }

  const handleModalSuccess = () => {
    fetchClients()
    handleModalClose()
  }

  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Título e Botão de Ação */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Clientes
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-lg">
            Gerencie todos os seus clientes e acesse os prontuários de forma eficiente.
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsModalOpen(true)}
          className="mt-6 sm:mt-0 px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold text-lg shadow-xl hover:bg-teal-700 transition duration-300 transform"
        >
          <PlusIcon className="h-5 w-5 inline-block mr-2" />
          Novo Cliente
        </motion.button>
      </motion.div>

      {/* Container Principal (Tabela e Busca) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-700"
      >
        <div className="mb-6">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Buscar por nome ou e-mail..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
            />
          </div>
        </div>

        <ClientsTable
          clients={filteredClients}
          isLoading={isLoading}
          onEdit={handleEditClient}
          onDelete={handleDeleteClient}
        />
      </motion.div>

      {/* Modal para Adicionar/Editar Clientes */}
      <ClientModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSuccess={handleModalSuccess}
        client={selectedClient}
      />

      {/* Modal de Confirmação para Exclusão (Substitui o alert/confirm) */}
      {isConfirmationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 w-11/12 md:w-1/3 text-center">
            <ExclamationTriangleIcon className="mx-auto h-16 w-16 text-red-500" />
            <h3 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
              Excluir Cliente
            </h3>
            <p className="mt-2 text-md text-gray-600 dark:text-gray-400">
              Tem certeza que deseja excluir este cliente? Esta ação não pode ser desfeita.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <button
                onClick={() => setIsConfirmationModalOpen(false)}
                className="px-6 py-3 rounded-lg text-gray-600 dark:text-gray-400 font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-6 py-3 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition"
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
