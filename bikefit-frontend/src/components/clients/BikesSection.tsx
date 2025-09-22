'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { PlusIcon } from '@heroicons/react/24/outline'
import { IBike } from '@/types/bikes'
import { ClientService } from '@/services/clients'

interface BikesSectionProps {
  clientId: number
}

export default function BikesSection({ clientId }: BikesSectionProps) {
  const [bikes, setBikes] = useState<IBike[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBikes = async () => {
      try {
        setIsLoading(true)
        const data = await ClientService.getClientBikes(clientId)
        setBikes(data)
      } catch (error) {
        console.error('Erro ao buscar bicicletas:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBikes()
  }, [clientId])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="card"
    >
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Bicicletas</h3>
        <button className="btn-primary text-sm inline-flex items-center">
          <PlusIcon className="h-4 w-4 mr-1" />
          Adicionar
        </button>
      </div>

      <div className="p-6">
        {isLoading ? (
          <div className="animate-pulse space-y-4">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="h-20 bg-gray-200 rounded"></div>
            ))}
          </div>
        ) : bikes.length === 0 ? (
          <div className="text-center py-8">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            <h3 className="mt-2 text-sm font-semibold text-gray-900">Nenhuma bicicleta</h3>
            <p className="mt-1 text-sm text-gray-500">
              Este cliente ainda não possui bicicletas cadastradas.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {bikes.map((bike) => (
              <div
                key={bike.id}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">
                      {bike.brand} {bike.model}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {bike.type} • Tamanho {bike.size} • Aro {bike.rim}
                    </p>
                    {bike.year && (
                      <p className="text-xs text-gray-400">Ano: {bike.year}</p>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-primary-600 hover:text-primary-900 text-sm">
                      Ver
                    </button>
                    <button className="text-blue-600 hover:text-blue-900 text-sm">
                      Editar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}