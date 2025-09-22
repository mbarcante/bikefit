'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import ClientInfo from '@/components/clients/ClientInfo'
import BikesSection from '@/components/clients/BikesSection'
import PostureEvaluationsSection from '@/components/clients/PostureEvaluationsSection'
import { IClient } from '@/types/client'
import { ClientService } from '@/services/clients'

export default function ClientDetailPage() {
  const params = useParams()
  const clientId = Number(params.id)
  const [client, setClient] = useState<IClient | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchClient = async () => {
      try {
        setIsLoading(true)
        const data = await ClientService.getClientById(clientId)
        setClient(data)
      } catch (error) {
        console.error('Erro ao buscar cliente:', error)
      } finally {
        setIsLoading(false)
      }
    }

    if (clientId) {
      fetchClient()
    }
  }, [clientId])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (!client) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900">Cliente não encontrado</h2>
        <p className="mt-2 text-gray-600">O cliente solicitado não existe ou foi removido.</p>
        <Link href="/dashboard/clients" className="mt-4 btn-primary inline-flex items-center">
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Voltar para Clientes
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-4"
      >
        <Link
          href="/dashboard/clients"
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <ArrowLeftIcon className="h-5 w-5 text-gray-600" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{client.name}</h1>
          <p className="mt-2 text-gray-600">Detalhes do cliente e histórico</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <ClientInfo client={client} />
        </div>
        
        <div className="lg:col-span-2 space-y-6">
          <PostureEvaluationsSection clientId={clientId} />
          <BikesSection clientId={clientId} />
        </div>
      </div>
    </div>
  )
}