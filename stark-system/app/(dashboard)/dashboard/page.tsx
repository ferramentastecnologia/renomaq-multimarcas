'use client';

import { DollarSign, Wrench, Users, Package, TrendingUp, AlertCircle } from 'lucide-react';
import { KPICard } from '@/components/dashboard/kpi-card';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { StatusBadge } from '@/components/ui/status-badge';
import { ChatStark } from '@/components/stark/chat-stark';
import { mockKPIs, mockOrdemServico, mockContasPagar } from '@/data/mock';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const faturamentoData = [
  { mes: 'Jul', valor: 38000 },
  { mes: 'Ago', valor: 42000 },
  { mes: 'Set', valor: 35000 },
  { mes: 'Out', valor: 48000 },
  { mes: 'Nov', valor: 40000 },
  { mes: 'Dez', valor: 45230 },
];

const vendasCategoria = [
  { name: 'Lavadoras', value: 45, fill: 'hsl(var(--primary))' },
  { name: 'Aspiradores', value: 30, fill: 'hsl(var(--secondary))' },
  { name: 'Peças', value: 25, fill: 'hsl(var(--chart-3))' },
];

export default function DashboardPage() {
  const osHoje = mockOrdemServico.slice(0, 3);
  const contasVencendo = mockContasPagar;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Bem-vindo à Renomaq Multimarcas! Aqui está um resumo do seu negócio.
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-transparent rounded-lg border border-primary/20">
          <div className="flex items-center gap-1.5">
            <span className="text-primary font-bold text-2xl">R</span>
            <span className="font-bold text-base">enormaq</span>
          </div>
          <span className="text-xs text-muted-foreground">Multimarcas</span>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <KPICard
          title="Faturamento do Mês"
          value={`R$ ${mockKPIs.faturamento.valor.toLocaleString('pt-BR')}`}
          icon={DollarSign}
          trend={{
            value: mockKPIs.faturamento.variacao,
            isPositive: mockKPIs.faturamento.isPositive,
          }}
        />
        <KPICard
          title="OS Abertas"
          value={mockKPIs.osAbertas.valor}
          icon={Wrench}
          trend={{
            value: mockKPIs.osAbertas.variacao,
            isPositive: mockKPIs.osAbertas.isPositive,
          }}
        />
        <KPICard
          title="Clientes Ativos"
          value={mockKPIs.clientes.valor}
          icon={Users}
          trend={{
            value: mockKPIs.clientes.variacao,
            isPositive: mockKPIs.clientes.isPositive,
          }}
        />
        <KPICard
          title="Valor em Estoque"
          value={`R$ ${mockKPIs.estoque.valor.toLocaleString('pt-BR')}`}
          icon={Package}
        />
      </div>

      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Faturamento - Últimos 6 Meses</CardTitle>
            <CardDescription>Evolução mensal do faturamento</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={faturamentoData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip
                  formatter={(value) => `R$ ${Number(value).toLocaleString('pt-BR')}`}
                />
                <Line
                  type="monotone"
                  dataKey="valor"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--primary))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Vendas por Categoria</CardTitle>
            <CardDescription>Distribuição de vendas</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={vendasCategoria}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {vendasCategoria.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* OS do Dia */}
        <Card>
          <CardHeader>
            <CardTitle>Ordens de Serviço do Dia</CardTitle>
            <CardDescription>Últimas OS abertas</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Número</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {osHoje.map((os) => (
                  <TableRow key={os.id}>
                    <TableCell className="font-medium">{os.numero}</TableCell>
                    <TableCell>{os.cliente.nome}</TableCell>
                    <TableCell>
                      <StatusBadge status={os.status} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Alertas */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-amber-500" />
                Contas Vencendo Esta Semana
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {contasVencendo.map((conta) => (
                  <div key={conta.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-sm">{conta.descricao}</p>
                      <p className="text-xs text-muted-foreground">
                        Vence em {conta.dataVencimento.toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                    <p className="font-bold">R$ {conta.valor.toLocaleString('pt-BR')}</p>
                  </div>
                ))}
                <div className="border-t pt-3">
                  <p className="text-sm font-bold flex justify-between">
                    <span>Total:</span>
                    <span>R$ {contasVencendo.reduce((acc, c) => acc + c.valor, 0).toLocaleString('pt-BR')}</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/20">
            <CardHeader>
              <CardTitle className="text-sm flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Insight do STARK
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Seu fluxo de caixa está positivo! Considere investir R$ 5.000 em estoque de peças para o próximo mês.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Chat STARK */}
      <ChatStark />
    </div>
  );
}
