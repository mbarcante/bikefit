'use client'

import { useState, useEffect } from 'react'
import Sidebar from '@/components/layout/Sidebar'
import Header from '@/components/layout/Header'

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false)

    // Use useEffect para aplicar a classe 'dark' ao elemento <html>
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDarkMode])

    const handleThemeToggle = () => {
        setIsDarkMode(prev => !prev)
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <div className="lg:pl-72">
                <Header
                    setSidebarOpen={setSidebarOpen}
                    isDarkMode={isDarkMode}
                    onThemeToggle={handleThemeToggle}
                    // Esta função de clique pode ser implementada ou passada
                    // por um contexto se a ação for global.
                    onNewClientClick={() => console.log('Novo cliente clicado!')}
                />

                <main className="py-6">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}
