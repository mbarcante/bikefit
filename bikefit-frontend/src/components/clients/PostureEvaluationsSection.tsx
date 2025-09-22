'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { PlusIcon, DocumentChartBarIcon } from '@heroicons/react/24/outline'
import { IPostureEvaluation } from '@/types/postureEvaluation'
import { ClientService } from '@/services/clients'

interface PostureEvaluationsSectionProps {
  clientId: number
}

export default function PostureEvaluationsSection({ clientId }: PostureEvaluationsSectionProps) {
  const [evaluations, setEvaluations] = useState<IPostureEvaluation[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchEvaluations = async () => {
      try {
        setIsLoading(true)
        const data = await ClientService.getClientPostureEvaluations(clientId)
        setEvaluations(data)
      } catch (error) {
        console.error('Erro ao buscar avaliações posturais:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchEvaluations()
  }, [clientId])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="card"
    >
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Avaliações Posturais</h3>
        <button className="btn-primary text-sm inline-flex items-center">
          <PlusIcon className="h-4 w-4 mr-1" />
          Nova Avaliação
        </button>
      </div>

      <div className="p-6">
        {isLoading ? (
          <div className="animate-pulse space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        ) : evaluations.length === 0 ? (
          <div className="text-center py-8">
            <DocumentChartBarIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-semibold text-gray-900">Nenhuma avaliação</h3>
            <p className="mt-1 text-sm text-gray-500">
              Este cliente ainda não possui avaliações posturais.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {evaluations.map((evaluation) => (
              <div
                key={evaluation.id}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <DocumentChartBarIcon className="h-8 w-8 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">
                        Avaliação #{evaluation.id}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {new Date(evaluation.evaluationDate).toLocaleDateString('pt-BR')}
                      </p>
                      {evaluation.inseam && (
                        <p className="text-xs text-gray-400">
                          Inseam: {evaluation.inseam}mm
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-primary-600 hover:text-primary-900 text-sm">
                      Ver Detalhes
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