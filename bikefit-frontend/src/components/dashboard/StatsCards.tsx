'use client'

import { motion } from 'framer-motion'
import {
  UsersIcon,
  DocumentChartBarIcon,
  ClockIcon,
  TrendingUpIcon,
} from '@heroicons/react/24/outline'

const stats = [
  {
    name: 'Total de Clientes',
    value: '142',
    change: '+12%',
    changeType: 'increase',
    icon: UsersIcon,
  },
  {
    name: 'Avaliações este Mês',
    value: '28',
    change: '+8%',
    changeType: 'increase',
    icon: DocumentChartBarIcon,
  },
  {
    name: 'Sessões Pendentes',
    value: '5',
    change: '-2%',
    changeType: 'decrease',
    icon: ClockIcon,
  },
  {
    name: 'Taxa de Satisfação',
    value: '98%',
    change: '+1%',
    changeType: 'increase',
    icon: TrendingUpIcon,
  },
]

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="card p-6"
        >
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <stat.icon className="h-8 w-8 text-primary-600" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">
                  {stat.name}
                </dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-gray-900">
                    {stat.value}
                  </div>
                  <div
                    className={`ml-2 flex items-baseline text-sm font-semibold ${
                      stat.changeType === 'increase'
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    {stat.change}
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}