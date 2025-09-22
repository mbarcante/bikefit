'use client'

import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, UserIcon, CalendarIcon } from '@heroicons/react/24/outline'
import { IClient } from '@/types/client'

interface ClientInfoProps {
  client: IClient
}

export default function ClientInfo({ client }: ClientInfoProps) {
  const calculateAge = (birthDate: string) => {
    const today = new Date()
    const birth = new Date(birthDate)
    let age = today.getFullYear() - birth.getFullYear()
    const monthDiff = today.getMonth() - birth.getMonth()
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--
    }
    
    return age
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card p-6"
    >
      <div className="text-center mb-6">
        <div className="mx-auto h-20 w-20 rounded-full bg-primary-100 flex items-center justify-center mb-4">
          <span className="text-2xl font-bold text-primary-700">
            {client.name.charAt(0).toUpperCase()}
          </span>
        </div>
        <h2 className="text-xl font-semibold text-gray-900">{client.name}</h2>
        <p className="text-gray-500">Cliente #{client.id}</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <EnvelopeIcon className="h-5 w-5 text-gray-400" />
          <div>
            <p className="text-sm font-medium text-gray-900">Email</p>
            <p className="text-sm text-gray-500">{client.email}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <PhoneIcon className="h-5 w-5 text-gray-400" />
          <div>
            <p className="text-sm font-medium text-gray-900">Telefone</p>
            <p className="text-sm text-gray-500">{client.cellphone}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <UserIcon className="h-5 w-5 text-gray-400" />
          <div>
            <p className="text-sm font-medium text-gray-900">Informações</p>
            <p className="text-sm text-gray-500">
              {client.sex === 'M' ? 'Masculino' : 'Feminino'}, {calculateAge(client.birthDate)} anos
            </p>
          </div>
        </div>

        {client.profession && (
          <div className="flex items-center space-x-3">
            <UserIcon className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-sm font-medium text-gray-900">Profissão</p>
              <p className="text-sm text-gray-500">{client.profession}</p>
            </div>
          </div>
        )}

        <div className="flex items-center space-x-3">
          <CalendarIcon className="h-5 w-5 text-gray-400" />
          <div>
            <p className="text-sm font-medium text-gray-900">Cliente desde</p>
            <p className="text-sm text-gray-500">
              {new Date(client.createdAt).toLocaleDateString('pt-BR')}
            </p>
          </div>
        </div>

        {client.observations && (
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm font-medium text-gray-900 mb-2">Observações</p>
            <p className="text-sm text-gray-500">{client.observations}</p>
          </div>
        )}
      </div>
    </motion.div>
  )
}