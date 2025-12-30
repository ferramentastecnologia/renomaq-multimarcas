'use client';

import { FileText, Download, BarChart as BarChartIcon, TrendingUp, Users, Package } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const relatorios = [
  {
    id: 1,
    titulo: 'Vendas por Período',
    descricao: 'Relatório detalhado de vendas por data',
    icon: TrendingUp,
  },
  {
    id: 2,
    titulo: 'OS por Técnico',
    descricao: 'Performance dos técnicos por OS realizadas',
    icon: BarChartIcon,
  },
  {
    id: 3,
    titulo: 'Produtos Mais Vendidos',
    descricao: 'Ranking de produtos com maior volume de vendas',
    icon: Package,
  },
  {
    id: 4,
    titulo: 'Clientes Inadimplentes',
    descricao: 'Lista de clientes com pendências financeiras',
    icon: Users,
  },
  {
    id: 5,
    titulo: 'Estoque Crítico',
    descricao: 'Produtos abaixo do estoque mínimo',
    icon: Package,
  },
  {
    id: 6,
    titulo: 'Faturamento Mensal',
    descricao: 'Consolidado mensal de faturamento',
    icon: FileText,
  },
];

export default function RelatoriosPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Central de Relatórios</h1>
        <p className="text-muted-foreground">
          Gere relatórios personalizados para análise do negócio
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {relatorios.map((relatorio) => {
          const Icon = relatorio.icon;
          return (
            <Card key={relatorio.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{relatorio.titulo}</CardTitle>
                  </div>
                </div>
                <CardDescription className="mt-2">{relatorio.descricao}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <FileText className="mr-2 h-4 w-4" />
                    Visualizar
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="mr-2 h-4 w-4" />
                    Exportar
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
