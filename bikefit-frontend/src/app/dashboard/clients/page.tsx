'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { PlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
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

  const handleDeleteClient = async (id: number) => {
    if (confirm('Tem certeza que deseja excluir este cliente?')) {
      try {
        await ClientService.deleteClient(id)
        await fetchClients()
      } catch (error) {
        console.error('Erro ao excluir cliente:', error)
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
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Clientes</h1>
          <p className="mt-2 text-gray-600">
            Gerencie todos os seus clientes em um só lugar
          </p>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsModalOpen(true)}
          className="mt-4 sm:mt-0 btn-primary inline-flex items-center"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Novo Cliente
        </motion.button>
      </motion.div>

      <div className="card p-6">
        <div className="mb-6">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar clientes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10"
            />
          </div>
        </div>

        <ClientsTable
          clients={filteredClients}
          isLoading={isLoading}
          onEdit={handleEditClient}
          onDelete={handleDeleteClient}
        />
      </div>

      <ClientModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSuccess={handleModalSuccess}
        client={selectedClient}
      />
    </div>
  )
}