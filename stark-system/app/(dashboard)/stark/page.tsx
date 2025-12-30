'use client';

import { useState } from 'react';
import { Sparkles, Send, Mic, Settings, TrendingUp, AlertCircle, Zap, Brain, BarChart3, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const suggestedQuestions = [
  { icon: BarChart3, text: 'Qual o faturamento do mês?', category: 'Financeiro' },
  { icon: AlertCircle, text: 'Quais contas vencem esta semana?', category: 'Financeiro' },
  { icon: TrendingUp, text: 'Mostre produtos com estoque baixo', category: 'Estoque' },
  { icon: Zap, text: 'Resumo das OS abertas hoje', category: 'Operacional' },
];

const automations = [
  {
    id: 1,
    name: 'Cobrança Automática',
    description: 'Enviar lembrete 3 dias antes do vencimento',
    active: true,
    executions: 45
  },
  {
    id: 2,
    name: 'Alerta de Estoque',
    description: 'Notificar quando produto atingir estoque mínimo',
    active: true,
    executions: 12
  },
  {
    id: 3,
    name: 'Follow-up de Orçamento',
    description: 'Contatar cliente após 5 dias sem resposta',
    active: false,
    executions: 0
  },
];

const insights = [
  {
    icon: TrendingUp,
    title: 'Crescimento Identificado',
    description: 'Vendas de lavadoras cresceram 18% este mês',
    type: 'success'
  },
  {
    icon: AlertCircle,
    title: 'Atenção Necessária',
    description: '3 clientes estão há mais de 60 dias sem comprar',
    type: 'warning'
  },
  {
    icon: Lightbulb,
    title: 'Recomendação',
    description: 'Aumente o estoque de mangueiras para atender demanda',
    type: 'info'
  },
];

export default function StarkPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Olá! Sou o STARK, seu assistente inteligente da Renomaq. Posso ajudar com análises financeiras, gestão de estoque, automações e muito mais. Como posso ajudar hoje?',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Analisando seus dados... Vou processar essa solicitação e retornar com as informações em instantes.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, response]);
    }, 1000);
  };

  const handleQuestionClick = (question: string) => {
    setInputValue(question);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--stark))] to-[hsl(var(--stark-light))] flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Agente STARK</h1>
              <p className="text-muted-foreground">Assistente de Inteligência Artificial</p>
            </div>
          </div>
        </div>
        <Button variant="outline">
          <Settings className="mr-2 h-4 w-4" />
          Configurações
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Consultas Hoje</p>
                <p className="text-2xl font-bold">28</p>
              </div>
              <Brain className="h-8 w-8 text-[hsl(var(--stark))]" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Automações Ativas</p>
                <p className="text-2xl font-bold">2</p>
              </div>
              <Zap className="h-8 w-8 text-amber-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Insights Gerados</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <Lightbulb className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Tempo Economizado</p>
                <p className="text-2xl font-bold">4.5h</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="chat" className="space-y-4">
        <TabsList>
          <TabsTrigger value="chat">
            <Sparkles className="mr-2 h-4 w-4" />
            Chat
          </TabsTrigger>
          <TabsTrigger value="automations">
            <Zap className="mr-2 h-4 w-4" />
            Automações
          </TabsTrigger>
          <TabsTrigger value="insights">
            <Lightbulb className="mr-2 h-4 w-4" />
            Insights
          </TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            {/* Chat Interface */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Converse com o STARK</CardTitle>
                <CardDescription>Faça perguntas sobre seu negócio e receba respostas inteligentes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Messages */}
                <div className="h-[400px] overflow-y-auto space-y-4 pr-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {message.role === 'assistant' && (
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-gradient-to-br from-[hsl(var(--stark))] to-[hsl(var(--stark-light))] text-white">
                            <Sparkles className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={`max-w-[80%] rounded-lg px-4 py-2 ${
                          message.role === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className="text-xs opacity-50 mt-1">
                          {message.timestamp.toLocaleTimeString('pt-BR', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div className="flex gap-2">
                  <Input
                    placeholder="Digite sua pergunta..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSend();
                    }}
                    className="flex-1"
                  />
                  <Button size="icon" variant="outline">
                    <Mic className="h-4 w-4" />
                  </Button>
                  <Button size="icon" onClick={handleSend}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Suggested Questions */}
            <Card>
              <CardHeader>
                <CardTitle>Perguntas Sugeridas</CardTitle>
                <CardDescription>Clique para começar rapidamente</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {suggestedQuestions.map((question, index) => {
                  const Icon = question.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start h-auto py-3"
                      onClick={() => handleQuestionClick(question.text)}
                    >
                      <div className="flex items-start gap-2">
                        <Icon className="h-4 w-4 mt-0.5 flex-shrink-0 text-[hsl(var(--stark))]" />
                        <div className="text-left">
                          <p className="text-sm font-medium">{question.text}</p>
                          <p className="text-xs text-muted-foreground">{question.category}</p>
                        </div>
                      </div>
                    </Button>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="automations">
          <Card>
            <CardHeader>
              <CardTitle>Automações Configuradas</CardTitle>
              <CardDescription>Gerencie as automações do STARK</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {automations.map((automation) => (
                <div key={automation.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{automation.name}</h4>
                      <Badge variant={automation.active ? 'default' : 'secondary'}>
                        {automation.active ? 'Ativa' : 'Inativa'}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{automation.description}</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      {automation.executions} execuções este mês
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Editar
                  </Button>
                </div>
              ))}
              <Button className="w-full">
                <Zap className="mr-2 h-4 w-4" />
                Criar Nova Automação
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Icon className={`h-5 w-5 ${
                        insight.type === 'success' ? 'text-green-500' :
                        insight.type === 'warning' ? 'text-amber-500' :
                        'text-blue-500'
                      }`} />
                      <CardTitle className="text-base">{insight.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{insight.description}</p>
                    <Button variant="link" className="mt-2 px-0">Ver detalhes →</Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
