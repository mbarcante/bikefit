'use client'

import { motion } from 'framer-motion'
import { ClockIcon } from '@heroicons/react/24/outline'

const activities = [
  {
    id: 1,
    type: 'evaluation',
    client: 'João Silva',
    action: 'Avaliação postural concluída',
    time: '2 horas atrás',
    status: 'completed',
  },
  {
    id: 2,
    type: 'bikefit',
    client: 'Maria Santos',
    action: 'BikeFit agendado',
    time: '4 horas atrás',
    status: 'scheduled',
  },
  {
    id: 3,
    type: 'client',
    client: 'Pedro Costa',
    action: 'Novo cliente cadastrado',
    time: '1 dia atrás',
    status: 'new',
  },
  {
    id: 4,
    type: 'evaluation',
    client: 'Ana Oliveira',
    action: 'Relatório de avaliação enviado',
    time: '2 dias atrás',
    status: 'completed',
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800'
    case 'scheduled':
      return 'bg-blue-100 text-blue-800'
    case 'new':
      return 'bg-purple-100 text-purple-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const getStatusText = (status: string) => {
  switch (status) {
    case 'completed':
      return 'Concluído'
    case 'scheduled':
      return 'Agendado'
    case 'new':
      return 'Novo'
    default:
      return 'Pendente'
  }
}

export default function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="card"
    >
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Atividade Recente</h3>
      </div>
      <div className="p-6">
        <div className="flow-root">
          <ul role="list" className="-mb-8">
            {activities.map((activity, activityIdx) => (
              <li key={activity.id}>
                <div className="relative pb-8">
                  {activityIdx !== activities.length - 1 ? (
                    <span
                      className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center ring-8 ring-white">
                        <ClockIcon className="h-4 w-4 text-white" />
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                      <div>
                        <p className="text-sm text-gray-500">
                          <span className="font-medium text-gray-900">
                            {activity.client}
                          </span>{' '}
                          - {activity.action}
                        </p>
                      </div>
                      <div className="whitespace-nowrap text-right text-sm text-gray-500 flex items-center space-x-2">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                            activity.status
                          )}`}
                        >
                          {getStatusText(activity.status)}
                        </span>
                        <time dateTime={activity.time}>{activity.time}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}