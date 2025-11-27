import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LogOut, FileText, User } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-yellow-400">
      {/* Header */}
      <header className="bg-white/60 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-gelada text-black uppercase" style={{ fontWeight: 900 }}>
            Zé Delivery
          </h1>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <p className="text-sm font-medium text-black">{user?.name}</p>
              <p className="text-xs text-gray-700">{user?.email}</p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="bg-white/80 hover:bg-white"
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
          <h2 className="text-3xl md:text-4xl font-gelada text-black uppercase mb-2" style={{ fontWeight: 900 }}>
            Bem-vindo, {user?.name?.split(' ')[0]}!
          </h2>
          <p className="text-lg text-gray-800">
            Área exclusiva do Programa de Inovação Zé Delivery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card de Inscrição */}
          <Card className="bg-white/60 backdrop-blur-xl border-white/20 hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => navigate('/form')}>
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-green-700" />
              </div>
              <CardTitle>Formulário de Inscrição</CardTitle>
              <CardDescription>
                Inscreva sua startup no programa
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-black hover:bg-gray-800">
                Acessar Formulário
              </Button>
            </CardContent>
          </Card>

          {/* Card de Perfil */}
          <Card className="bg-white/60 backdrop-blur-xl border-white/20">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-blue-700" />
              </div>
              <CardTitle>Meu Perfil</CardTitle>
              <CardDescription>
                Gerencie suas informações
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium">Nome:</span> {user?.name}
                </div>
                <div>
                  <span className="font-medium">Email:</span> {user?.email}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card de Status */}
          <Card className="bg-white/60 backdrop-blur-xl border-white/20">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-yellow-700" />
              </div>
              <CardTitle>Status da Inscrição</CardTitle>
              <CardDescription>
                Acompanhe seu processo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-gray-700">
                <p className="font-medium mb-2">Status: Pendente</p>
                <p>Complete o formulário de inscrição para participar do programa.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Informações Adicionais */}
        <Card className="mt-8 bg-white/60 backdrop-blur-xl border-white/20">
          <CardHeader>
            <CardTitle>Sobre o Programa</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-gray-800">
              O Programa de Inovação Zé Delivery oferece uma oportunidade única para startups de bebidas
              testarem seus produtos com milhões de consumidores reais. Complete o formulário de inscrição
              para participar do processo seletivo.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

