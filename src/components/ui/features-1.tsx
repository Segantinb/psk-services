import { Rocket, Users, Package, LineChart, MessageSquare, Target, MapPin, Map, Headphones } from 'lucide-react'

export function Features() {
    return (
        <section className="bg-yellow-400 py-16 md:py-32 dark:bg-yellow-500 relative overflow-hidden">
            {/* Background Gradient Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-400/30 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-yellow-300/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
            </div>

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="max-w-4xl text-3xl md:text-4xl lg:text-5xl font-gelada text-black uppercase mx-auto" style={{ fontWeight: 900 }}>
                        Seu produto na mão das pessoas para experimentação
                    </h1>
                </div>

                {/* Bento Grid - Imagem grande à direita */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                    {/* Coluna Esquerda - Cards */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-min">
                        {/* Coluna 1 - Velocidade e Imagem */}
                        <div className="flex flex-col gap-4">
                            {/* Card 1 - Velocidade */}
                            <div className="rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 p-6 relative overflow-hidden group hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-900 text-xs font-medium mb-3">
                                        Velocidade de Execução
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                        Lançamento em poucas semanas
                                    </h3>
                                    
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <Rocket className="w-4 h-4 text-orange-600" />
                                            <p className="text-sm font-medium text-gray-900">Onboarding guiado</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4 text-orange-600" />
                                            <p className="text-sm font-medium text-gray-900">Equipe dedicada</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Package className="w-4 h-4 text-orange-600" />
                                            <p className="text-sm font-medium text-gray-900">Setup rápido</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card Imagem - Abaixo Velocidade */}
                            <div className="rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 p-6 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 opacity-40" />
                                <img 
                                    src="/gelada/screenshot.png" 
                                    alt="Zé Delivery"
                                    className="w-full h-full object-cover absolute inset-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                {/* Spacer invisível para manter altura */}
                                <div className="relative z-10 opacity-0 pointer-events-none">
                                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3">Spacer</span>
                                    <h3 className="text-xl md:text-2xl font-semibold mb-3">Spacer Text</h3>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4" />
                                            <p className="text-sm font-medium">Item 1</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4" />
                                            <p className="text-sm font-medium">Item 2</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4" />
                                            <p className="text-sm font-medium">Item 3</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Coluna 2 - Insights e Escala */}
                        <div className="flex flex-col gap-4">
                            {/* Card 2 - Insights */}
                            <div className="rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 p-6 relative overflow-hidden group hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-900 text-xs font-medium mb-3">
                                        Resultados em tempo real
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                        Insights que viram decisões
                                    </h3>
                                    
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <LineChart className="w-4 h-4 text-blue-600" />
                                            <p className="text-sm font-medium text-gray-900">Dashboards em tempo real</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MessageSquare className="w-4 h-4 text-blue-600" />
                                            <p className="text-sm font-medium text-gray-900">Feedbacks de consumidores</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Target className="w-4 h-4 text-blue-600" />
                                            <p className="text-sm font-medium text-gray-900">KPIs na sua mão</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 - Escala */}
                            <div className="rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 p-6 relative overflow-hidden group hover:shadow-xl hover:shadow-green-500/20 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <span className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-900 text-xs font-medium mb-3">
                                        Escala Nacional
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                                        Do piloto ao Brasil inteiro
                                    </h3>
                                    
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-green-600" />
                                            <p className="text-sm font-medium text-gray-900">Piloto SP, RJ e MG</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Map className="w-4 h-4 text-green-600" />
                                            <p className="text-sm font-medium text-gray-900">Expansão nacional</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Headphones className="w-4 h-4 text-green-600" />
                                            <p className="text-sm font-medium text-gray-900">Suporte dedicado</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coluna Direita - Imagem Grande */}
                    <div className="lg:col-span-5 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 relative overflow-hidden group hover:shadow-xl transition-all duration-500 min-h-[600px] lg:min-h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 opacity-40" />
                        <img 
                            src="/gelada/BG.png" 
                            alt="Zé Delivery Experience"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    )
}

