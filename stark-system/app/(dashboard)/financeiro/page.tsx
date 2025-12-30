'use client';

import { DollarSign, TrendingUp, TrendingDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { StatusBadge } from '@/components/ui/status-badge';
import { mockContasPagar, mockContasReceber } from '@/data/mock';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const fluxoData = [
  { mes: 'Jul', entradas: 42000, saidas: 28000 },
  { mes: 'Ago', entradas: 48000, saidas: 32000 },
  { mes: 'Set', entradas: 38000, saidas: 30000 },
  { mes: 'Out', entradas: 52000, saidas: 35000 },
  { mes: 'Nov', entradas: 45000, saidas: 31000 },
  { mes: 'Dez', entradas: 50000, saidas: 33000 },
];

export default function FinanceiroPage() {
  const totalReceber = mockContasReceber.reduce((acc, c) => acc + c.valor, 0);
  const totalPagar = mockContasPagar.reduce((acc, c) => acc + c.valor, 0);
  const saldoAtual = 12500;
  const resultado = totalReceber - totalPagar;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Financeiro</h1>
        <p className="text-muted-foreground">Gerencie as finanças da sua empresa</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Saldo Atual</p>
              <p className="text-2xl font-bold">R$ {saldoAtual.toLocaleString('pt-BR')}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">A Receber</p>
              <p className="text-2xl font-bold text-green-600">R$ {totalReceber.toLocaleString('pt-BR')}</p>
              <p className="text-xs text-muted-foreground">{mockContasReceber.length} títulos</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">A Pagar</p>
              <p className="text-2xl font-bold text-red-600">R$ {totalPagar.toLocaleString('pt-BR')}</p>
              <p className="text-xs text-muted-foreground">{mockContasPagar.length} títulos</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">Resultado</p>
              <p className={`text-2xl font-bold ${resultado >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                R$ {resultado.toLocaleString('pt-BR')}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="resumo" className="space-y-4">
        <TabsList>
          <TabsTrigger value="resumo">Resumo</TabsTrigger>
          <TabsTrigger value="pagar">A Pagar</TabsTrigger>
          <TabsTrigger value="receber">A Receber</TabsTrigger>
          <TabsTrigger value="fluxo">Fluxo de Caixa</TabsTrigger>
        </TabsList>

        <TabsContent value="resumo">
          <Card>
            <CardHeader>
              <CardTitle>Entradas x Saídas</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={fluxoData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                  <XAxis dataKey="mes" />
                  <YAxis />
                  <Tooltip formatter={(value) => `R$ ${Number(value).toLocaleString('pt-BR')}`} />
                  <Legend />
                  <Bar dataKey="entradas" fill="hsl(var(--chart-1))" name="Entradas" />
                  <Bar dataKey="saidas" fill="hsl(var(--chart-2))" name="Saídas" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pagar">
          <Card>
            <CardHeader>
              <CardTitle>Contas a Pagar</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Descrição</TableHead>
                    <TableHead>Fornecedor</TableHead>
                    <TableHead>Vencimento</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockContasPagar.map((conta) => (
                    <TableRow key={conta.id}>
                      <TableCell className="font-medium">{conta.descricao}</TableCell>
                      <TableCell>{conta.fornecedor}</TableCell>
                      <TableCell>{conta.dataVencimento.toLocaleDateString('pt-BR')}</TableCell>
                      <TableCell>R$ {conta.valor.toLocaleString('pt-BR')}</TableCell>
                      <TableCell>
                        <StatusBadge status={conta.status} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="receber">
          <Card>
            <CardHeader>
              <CardTitle>Contas a Receber</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Descrição</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Vencimento</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockContasReceber.map((conta) => (
                    <TableRow key={conta.id}>
                      <TableCell className="font-medium">{conta.descricao}</TableCell>
                      <TableCell>{conta.cliente?.nome}</TableCell>
                      <TableCell>{conta.dataVencimento.toLocaleDateString('pt-BR')}</TableCell>
                      <TableCell>R$ {conta.valor.toLocaleString('pt-BR')}</TableCell>
                      <TableCell>
                        <StatusBadge status={conta.status} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fluxo">
          <Card>
            <CardHeader>
              <CardTitle>Fluxo de Caixa Projetado</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center py-8">
                Visualize o fluxo de caixa projetado para os próximos meses.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
