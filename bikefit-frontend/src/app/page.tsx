'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simule o processo de login
    await new Promise(resolve => setTimeout(resolve, 1500))

    router.push('/dashboard')
  }

  return (
    // Fundo com gradiente suave de verde/azul para violeta, transmitindo calma e modernidade
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 dark:from-green-900 dark:via-blue-900 dark:to-purple-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-3xl overflow-hidden p-8 space-y-8 border border-gray-100 dark:border-gray-700 backdrop-blur-md bg-opacity-90 dark:bg-opacity-90"
      >
        <div className="text-center">
          {/* Logo/Ícone com gradiente mais vibrante e relacionado à saúde/bem-estar */}
          <motion.div
            initial={{ scale: 0.7, rotate: -15 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 200 }}
            className="mx-auto h-20 w-20 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center mb-6 shadow-xl"
          >
            {/* Ícone representando movimento, saúde ou energia */}
            <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {/* Ou um ícone mais específico de fisioterapia, como uma coluna, folha, etc. */}
            {/* Exemplo de outro SVG: */}
            {/* <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944c-1.233 0-2.435.227-3.573.687-1.12.454-2.146 1.054-3.046 1.776M14 19.332v-3.332m2-5H8a1 1 0 00-1 1v7a1 1 0 001 1h8a1 1 0 001-1v-7a1 1 0 00-1-1zm-6 4h4" />
               </svg> */}
          </motion.div>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mt-4">
            BikeFit Fisioterapia
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Entre na sua conta para cuidar do seu bem-estar
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-base bg-gray-50 dark:bg-gray-700 dark:text-white transition duration-200"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Senha
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-base bg-gray-50 dark:bg-gray-700 dark:text-white transition duration-200"
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 focus:outline-none transition duration-150"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:checked:bg-green-600"
              />
              <label htmlFor="remember-me" className="ml-2 block text-gray-700 dark:text-gray-300">
                Lembrar de mim
              </label>
            </div>

            <a href="#" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition duration-150">
              Esqueceu a senha?
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.01, boxShadow: "0 8px 25px -5px rgba(16, 185, 129, 0.4)" }} // Sombra verde
            whileTap={{ scale: 0.99 }}
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-base font-semibold text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-60 disabled:cursor-not-allowed transition duration-200 ease-in-out dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-600"
          >
            {isLoading ? (
              <div className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Entrando...
              </div>
            ) : (
              'Entrar'
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}