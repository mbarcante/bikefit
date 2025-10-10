'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { PlusIcon, DocumentChartBarIcon, PencilSquareIcon, EyeIcon } from '@heroicons/react/24/outline'
import { clsx } from 'clsx'

interface IPostureEvaluation {
  id: number
  evaluationDate: string
  inseam: number | null
}

const ClientService = {
  getClientPostureEvaluations: async (clientId: number): Promise<IPostureEvaluation[]> => {
    await new Promise(resolve => setTimeout(resolve, 1200))

    if (clientId === 999) return []
    return [
      { id: 1, evaluationDate: '2024-09-20T10:00:00Z', inseam: 850 },
      { id: 2, evaluationDate: '2024-05-15T14:30:00Z', inseam: 855 },
      { id: 3, evaluationDate: '2023-11-01T09:00:00Z', inseam: null },
    ]
  }
}

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

  const handleNewEvaluation = () => {
    console.log(`Abrir formulário para nova avaliação do Cliente #${clientId}`)
  }

  const handleViewDetails = (id: number) => {
    console.log(`Ver detalhes da Avaliação #${id}`)
  }

  const handleEditEvaluation = (id: number) => {
    console.log(`Editar Avaliação #${id}`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <DocumentChartBarIcon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
          Avaliações Posturais
        </h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNewEvaluation}
          className="inline-flex items-center rounded-xl bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-teal-700 transition duration-300 transform"
        >
          <PlusIcon className="h-5 w-5 mr-1" />
          Nova Avaliação
        </motion.button>
      </div>

      <div className="p-6">
        {isLoading ? (
          <div className="animate-pulse space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-16 bg-gray-100 dark:bg-gray-700 rounded-lg"></div>
            ))}
          </div>
        ) : evaluations.length === 0 ? (
          <div className="text-center py-8">
            <DocumentChartBarIcon className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
            <h3 className="mt-2 text-base font-semibold text-gray-900 dark:text-white">Nenhuma avaliação encontrada</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Este cliente ainda não possui avaliações posturais registradas.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNewEvaluation}
              className="mt-6 inline-flex items-center rounded-xl bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-teal-700 transition"
            >
              <PlusIcon className="h-5 w-5 mr-1" />
              Criar Avaliação
            </motion.button>
          </div>
        ) : (
          <div className="space-y-3">
            {evaluations.map((evaluation) => (
              <motion.div
                key={evaluation.id}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                onClick={() => handleViewDetails(evaluation.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 p-2 rounded-full bg-teal-100 dark:bg-teal-900/40">
                      <DocumentChartBarIcon className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-gray-900 dark:text-white">
                        Avaliação #{evaluation.id}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Data: {new Date(evaluation.evaluationDate).toLocaleDateString('pt-BR')}
                      </p>
                      {evaluation.inseam && (
                        <p className="text-xs text-teal-600 dark:text-teal-400 font-semibold mt-1">
                          Inseam (Cavalo): {evaluation.inseam} mm
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Botões de Ação */}
                  <div className="flex space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => { e.stopPropagation(); handleViewDetails(evaluation.id) }} // Previne o clique do div pai
                      className="p-1 rounded-full text-teal-600 hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-300 transition"
                      title="Ver Detalhes"
                    >
                      <EyeIcon className="h-5 w-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => { e.stopPropagation(); handleEditEvaluation(evaluation.id) }}
                      className="p-1 rounded-full text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition"
                      title="Editar Avaliação"
                    >
                      <PencilSquareIcon className="h-5 w-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}