import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LogOut, FileText, User, Check, Lock, Circle, Building2, Shield, Lightbulb, Package, Truck, ClipboardCheck, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [formProgress, setFormProgress] = useState<{[key: number]: 'completed' | 'in-progress' | 'locked' | 'pending'}>({
    0: 'in-progress',
    1: 'locked',
    2: 'locked',
    3: 'locked',
    4: 'locked',
    5: 'locked',
    6: 'locked',
    7: 'locked',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    // Carregar o progresso do localStorage
    const savedProgress = localStorage.getItem('formProgress');
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      const updatedProgress = { ...progress };
      
      // Se a elegibilidade foi completada, desbloquear etapas 1-6
      if (progress[0] === 'completed') {
        for (let i = 1; i <= 6; i++) {
          if (updatedProgress[i] === 'locked') {
            updatedProgress[i] = 'pending';
          }
        }
      }
      
      // Verificar se todas as etapas 0-6 estão completas para desbloquear o Aceite Final (step 7)
      const allPreviousCompleted = [0, 1, 2, 3, 4, 5, 6].every(i => updatedProgress[i] === 'completed');
      if (allPreviousCompleted) {
        updatedProgress[7] = 'pending';
      } else {
        // Manter bloqueado se não tiver todas completas
        if (updatedProgress[7] !== 'completed') {
          updatedProgress[7] = 'locked';
        }
      }
      
      setFormProgress(updatedProgress);
    } else {
      // Inicializar com estado zerado se não houver progresso salvo
      setFormProgress({
        0: 'in-progress',
        1: 'locked',
        2: 'locked',
        3: 'locked',
        4: 'locked',
        5: 'locked',
        6: 'locked',
        7: 'locked',
      });
    }
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleClearData = () => {
    if (confirm('Tem certeza que deseja apagar todos os dados do formulário? Esta ação não pode ser desfeita.')) {
      localStorage.removeItem('formProgress');
      localStorage.removeItem('formData');
      
      // Resetar o progresso para o estado inicial
      setFormProgress({
        0: 'in-progress',
        1: 'locked',
        2: 'locked',
        3: 'locked',
        4: 'locked',
        5: 'locked',
        6: 'locked',
        7: 'locked',
      });
      
      window.location.reload();
    }
  };

  const formSteps = [
    { 
      id: 0, 
      title: "Elegibilidade", 
      description: "Verificação inicial",
      icon: Shield,
      color: "bg-blue-500/20",
      iconColor: "text-blue-700",
      borderColor: "border-blue-500"
    },
    { 
      id: 1, 
      title: "Dados da Startup", 
      description: "Informações da empresa",
      icon: Building2,
      color: "bg-purple-500/20",
      iconColor: "text-purple-700",
      borderColor: "border-purple-500"
    },
    { 
      id: 2, 
      title: "Documentação", 
      description: "Upload de documentos",
      icon: FileText,
      color: "bg-orange-500/20",
      iconColor: "text-orange-700",
      borderColor: "border-orange-500"
    },
    { 
      id: 3, 
      title: "Inovação", 
      description: "Diferencial do produto",
      icon: Lightbulb,
      color: "bg-yellow-500/20",
      iconColor: "text-yellow-700",
      borderColor: "border-yellow-500"
    },
    { 
      id: 4, 
      title: "Produtos", 
      description: "Cadastro de produtos",
      icon: Package,
      color: "bg-green-500/20",
      iconColor: "text-green-700",
      borderColor: "border-green-500"
    },
    { 
      id: 5, 
      title: "Operação", 
      description: "Logística e estoque",
      icon: Truck,
      color: "bg-teal-500/20",
      iconColor: "text-teal-700",
      borderColor: "border-teal-500"
    },
    { 
      id: 6, 
      title: "Condições do Piloto", 
      description: "Termos e disponibilidade",
      icon: ClipboardCheck,
      color: "bg-indigo-500/20",
      iconColor: "text-indigo-700",
      borderColor: "border-indigo-500"
    },
    { 
      id: 7, 
      title: "Aceite Final", 
      description: "Confirmação e envio",
      icon: CheckCircle2,
      color: "bg-pink-500/20",
      iconColor: "text-pink-700",
      borderColor: "border-pink-500"
    },
  ];

  const getStepIcon = (stepId: number) => {
    const status = formProgress[stepId];
    if (status === 'completed') return <Check className="w-5 h-5" />;
    if (status === 'locked') return <Lock className="w-5 h-5" />;
    if (status === 'in-progress') return <Circle className="w-5 h-5" />;
    return <Circle className="w-5 h-5 opacity-50" />;
  };

  const completedSteps = Object.values(formProgress).filter(s => s === 'completed').length;
  const progressPercentage = (completedSteps / formSteps.length) * 100;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-gelada text-[#333333] uppercase" style={{ fontWeight: 900 }}>
            Zé Delivery
          </h1>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <p className="text-sm font-medium text-[#333333]">{user?.name}</p>
              <p className="text-xs text-gray-600">{user?.email}</p>
            </div>
            <Button
              onClick={handleClearData}
              variant="outline"
              className="border-red-300 text-red-600 hover:bg-red-50 hidden md:inline-flex"
            >
              Limpar Dados
            </Button>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-gray-300 hover:bg-gray-50"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-gelada text-[#333333] uppercase mb-2" style={{ fontWeight: 900 }}>
            Bem-vindo, {user?.name?.split(' ')[0]}!
          </h2>
          <p className="text-lg text-gray-700">
            Complete seu formulário de inscrição para participar do programa
          </p>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8 bg-white border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-[#333333]">
              <span>Progresso da Inscrição</span>
              <span className="text-2xl font-gelada">{completedSteps}/{formSteps.length}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#FFC800] transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <p className="text-sm text-gray-700 mt-2">
              {completedSteps === formSteps.length 
                ? "🎉 Formulário completo! Aguardando envio final." 
                : `Complete as etapas restantes para enviar sua inscrição.`}
            </p>
          </CardContent>
        </Card>

        {/* Form Steps Grid */}
        <div className="mb-8">
          <h3 className="text-2xl font-gelada text-[#333333] uppercase mb-4" style={{ fontWeight: 900 }}>
            Etapas do Formulário
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {formSteps.map((step) => {
              const status = formProgress[step.id];
              const Icon = step.icon;
              
              return (
                <Card 
                  key={step.id}
                  className={cn(
                    "bg-white border-2 transition-all duration-300 cursor-pointer hover:scale-105 shadow-sm",
                    status === 'completed' && "border-green-500 bg-green-50",
                    status === 'in-progress' && `${step.borderColor} ring-2 ring-offset-2 ring-[#FFC800]`,
                    status === 'pending' && "border-gray-300",
                    status === 'locked' && "opacity-60 cursor-not-allowed hover:scale-100 border-gray-200"
                  )}
                  onClick={() => {
                    if (status !== 'locked') {
                      navigate(`/form?step=${step.id}`);
                    }
                  }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-2">
                      <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", step.color)}>
                        <Icon className={cn("w-5 h-5", step.iconColor)} />
                      </div>
                      <div className={cn(
                        "w-6 h-6 rounded-full flex items-center justify-center text-xs",
                        status === 'completed' && "bg-green-500 text-white",
                        status === 'in-progress' && "bg-[#FFC800] text-[#333333]",
                        status === 'pending' && "bg-gray-200 text-gray-600",
                        status === 'locked' && "bg-gray-300 text-gray-600"
                      )}>
                        {getStepIcon(step.id)}
                      </div>
                    </div>
                    <CardTitle className="text-base">{step.title}</CardTitle>
                    <CardDescription className="text-xs">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="text-xs font-medium">
                      {status === 'completed' && (
                        <span className="text-green-600 flex items-center gap-1">
                          <Check className="w-3 h-3" /> Completo
                        </span>
                      )}
                      {status === 'in-progress' && (
                        <span className="text-[#333333] flex items-center gap-1">
                          <Circle className="w-3 h-3" /> Em andamento
                        </span>
                      )}
                      {status === 'pending' && (
                        <span className="text-gray-600 flex items-center gap-1">
                          <Circle className="w-3 h-3" /> Disponível
                        </span>
                      )}
                      {status === 'locked' && (
                        <span className="text-gray-500 flex items-center gap-1">
                          <Lock className="w-3 h-3" /> Bloqueado
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card de Perfil */}
          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-[#333333]">Meu Perfil</CardTitle>
              <CardDescription className="text-gray-600">
                Gerencie suas informações
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-gray-700">
                <div>
                  <span className="font-medium text-[#333333]">Nome:</span> {user?.name}
                </div>
                <div>
                  <span className="font-medium text-[#333333]">Email:</span> {user?.email}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Informações do Programa */}
          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-[#333333]">Sobre o Programa</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">
                O Programa de Inovação Zé Delivery oferece uma oportunidade única para startups de bebidas
                testarem seus produtos com milhões de consumidores reais.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


