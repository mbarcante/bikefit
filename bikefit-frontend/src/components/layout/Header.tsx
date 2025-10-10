'use client'

import { motion } from 'framer-motion'
import { Menu, Transition, MenuItems, MenuItem } from '@headlessui/react'
import { Fragment } from 'react'
import {
  Bars3Icon,
  BellIcon,
  UserCircleIcon,
  SunIcon,
  MoonIcon,
  PlusIcon
} from '@heroicons/react/24/outline'
import { clsx } from 'clsx'

const userNavigation = [
  { name: 'Seu Perfil', href: '#' },
  { name: 'Configurações', href: '#' },
  { name: 'Sair', href: '#' },
]

interface HeaderProps {
  setSidebarOpen: (open: boolean) => void
  isDarkMode: boolean
  onThemeToggle: () => void
  onNewClientClick: () => void
}

export default function Header({ setSidebarOpen, isDarkMode, onThemeToggle, onNewClientClick }: HeaderProps) {
  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 dark:text-gray-300 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Abrir menu lateral</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Título da Página (Visível em Mobile) */}
      <h1 className="text-xl font-bold text-gray-900 dark:text-white sm:hidden flex-1 text-center">Clientes</h1>

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        {/* Título da Página (Visível em Desktop) */}
        <div className="hidden sm:flex flex-col justify-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Clientes
          </h1>
        </div>

        {/* Espaço para alinhar itens à direita */}
        <div className="flex flex-1 justify-end"></div>

        <div className="flex items-center gap-x-4 lg:gap-x-6">
          {/* Botão de Novo Cliente */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={onNewClientClick}
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-xl bg-teal-600 text-white font-semibold text-sm shadow-xl hover:bg-teal-700 transition duration-300 transform"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Novo Cliente
          </motion.button>

          {/* Botão de Alternar Tema */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={onThemeToggle}
            className="p-2 rounded-full text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300 transform"
            title={isDarkMode ? 'Mudar para o tema claro' : 'Mudar para o tema escuro'}
          >
            {isDarkMode ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </motion.button>

          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
          >
            <span className="sr-only">Ver notificações</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Separator */}
          <div
            className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200 dark:lg:bg-gray-700"
            aria-hidden="true"
          />

          {/* Profile dropdown */}
          <Menu as="div" className="relative">
            <Menu.Button className="-m-1.5 flex items-center p-1.5">
              <span className="sr-only">Abrir menu do usuário</span>
              <UserCircleIcon className="h-8 w-8 text-gray-400" />
              <span className="hidden lg:flex lg:items-center">
                <span
                  className="ml-4 text-sm font-semibold leading-6 text-gray-900 dark:text-white"
                  aria-hidden="true"
                >
                  Usuário
                </span>
              </span>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white dark:bg-gray-800 py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                {userNavigation.map((item) => (
                  <MenuItem key={item.name}>
                    {({ active }) => (
                      <a
                        href={item.href}
                        className={clsx(
                          active ? 'bg-gray-50 dark:bg-gray-700' : '',
                          'block px-3 py-1 text-sm leading-6 text-gray-900 dark:text-white'
                        )}
                      >
                        {item.name}
                      </a>
                    )}
                  </MenuItem>
                ))}
              </MenuItems>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  )
}
