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
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 dark:border-teal-400"></div>
      </div>
    )
  }

  if (!client) {
    return (
      <div className="text-center py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Cliente não encontrado</h2>
        <p className="mt-2 text-base text-gray-500 dark:text-gray-400">O cliente solicitado não existe ou foi removido.</p>
        <Link
          href="/dashboard/clients"
          className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-lg text-white bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Voltar para Clientes
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-6"
      >
        <Link
          href="/clients"
          className="p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <ArrowLeftIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
        </Link>
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">{client.name}</h1>
          <p className="mt-1 text-lg text-gray-500 dark:text-gray-400">Detalhes do cliente e histórico</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <ClientInfo client={client} />
        </div>

        <div className="lg:col-span-2 space-y-8">
          <PostureEvaluationsSection clientId={clientId} />
          <BikesSection clientId={clientId} />
        </div>
      </div>
    </div>
  )
}
