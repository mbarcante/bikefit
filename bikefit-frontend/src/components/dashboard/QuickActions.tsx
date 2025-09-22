'use client'

import { motion } from 'framer-motion'
import {
  PlusIcon,
  DocumentChartBarIcon,
  CalendarIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const actions = [
  {
    name: 'Novo Cliente',
    description: 'Cadastrar um novo cliente',
    href: '/dashboard/clients',
    icon: PlusIcon,
    color: 'bg-primary-500 hover:bg-primary-600',
  },
  {
    name: 'Nova Avaliação',
    description: 'Criar avaliação postural',
    href: '/dashboard/evaluations/new',
    icon: DocumentChartBarIcon,
    color: 'bg-green-500 hover:bg-green-600',
  },
  {
    name: 'Agendar Sessão',
    description: 'Agendar nova sessão',
    href: '/dashboard/schedule',
    icon: CalendarIcon,
    color: 'bg-blue-500 hover:bg-blue-600',
  },
  {
    name: 'Ver Clientes',
    description: 'Gerenciar clientes',
    href: '/dashboard/clients',
    icon: UserGroupIcon,
    color: 'bg-purple-500 hover:bg-purple-600',
  },
]

export default function QuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="card"
    >
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Ações Rápidas</h3>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 gap-4">
          {actions.map((action, index) => (
            <motion.div
              key={action.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            >
              <Link
                href={action.href}
                className="group relative rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-3">
                  <div className={`flex-shrink-0 rounded-lg p-2 ${action.color} transition-colors duration-200`}>
                    <action.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900 group-hover:text-primary-600">
                      {action.name}
                    </p>
                    <p className="text-sm text-gray-500">{action.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}