'use client';

import { useState } from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { StatusBadge } from '@/components/ui/status-badge';
import { mockOrdemServico, mockClientes } from '@/data/mock';

export default function OrdemServicoPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const osAbertas = mockOrdemServico.filter((os) => os.status === 'aberta');
  const osAndamento = mockOrdemServico.filter((os) => os.status === 'andamento');
  const osConcluidas = mockOrdemServico.filter((os) => os.status === 'concluida');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Ordens de Serviço</h1>
          <p className="text-muted-foreground">
            Gerencie todas as ordens de serviço da sua empresa
          </p>
        </div>
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nova OS
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Nova Ordem de Serviço</DialogTitle>
              <DialogDescription>
                Preencha os dados para criar uma nova ordem de serviço
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="cliente">Cliente *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o cliente" />
                  </SelectTrigger>
                  <SelectContent>
                    {mockClientes.map((cliente) => (
                      <SelectItem key={cliente.id} value={cliente.id}>
                        {cliente.nome}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="equipamento">Equipamento *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o equipamento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Kärcher HD 585 - Série KH585-2024-001</SelectItem>
                    <SelectItem value="2">Kärcher K5 Premium - Série K5-2023-450</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="problema">Descrição do Problema *</Label>
                <Textarea
                  id="problema"
                  placeholder="Descreva o problema relatado pelo cliente..."
                  rows={4}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="tecnico">Técnico Responsável</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Carlos Silva</SelectItem>
                      <SelectItem value="2">João Santos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="prioridade">Prioridade</Label>
                  <Select defaultValue="normal">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="baixa">Baixa</SelectItem>
                      <SelectItem value="normal">Normal</SelectItem>
                      <SelectItem value="alta">Alta</SelectItem>
                      <SelectItem value="urgente">Urgente</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpenDialog(false)}>
                Cancelar
              </Button>
              <Button onClick={() => setOpenDialog(false)}>Criar OS</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por número, cliente ou equipamento..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filtros
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="todas" className="space-y-4">
        <TabsList>
          <TabsTrigger value="todas">
            Todas ({mockOrdemServico.length})
          </TabsTrigger>
          <TabsTrigger value="abertas">
            Abertas ({osAbertas.length})
          </TabsTrigger>
          <TabsTrigger value="andamento">
            Em Andamento ({osAndamento.length})
          </TabsTrigger>
          <TabsTrigger value="concluidas">
            Concluídas ({osConcluidas.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="todas" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Todas as Ordens de Serviço</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Número</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Equipamento</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Data Abertura</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockOrdemServico.map((os) => (
                    <TableRow key={os.id}>
                      <TableCell className="font-medium">{os.numero}</TableCell>
                      <TableCell>{os.cliente.nome}</TableCell>
                      <TableCell>
                        {os.equipamento.marca} {os.equipamento.modelo}
                      </TableCell>
                      <TableCell>
                        <StatusBadge status={os.status} />
                      </TableCell>
                      <TableCell>
                        {os.dataAbertura.toLocaleDateString('pt-BR')}
                      </TableCell>
                      <TableCell>R$ {os.valorTotal.toLocaleString('pt-BR')}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          Ver Detalhes
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="abertas">
          <Card>
            <CardHeader>
              <CardTitle>OS Abertas</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Número</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Equipamento</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {osAbertas.map((os) => (
                    <TableRow key={os.id}>
                      <TableCell className="font-medium">{os.numero}</TableCell>
                      <TableCell>{os.cliente.nome}</TableCell>
                      <TableCell>
                        {os.equipamento.marca} {os.equipamento.modelo}
                      </TableCell>
                      <TableCell>
                        {os.dataAbertura.toLocaleDateString('pt-BR')}
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          Ver Detalhes
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="andamento">
          <Card>
            <CardHeader>
              <CardTitle>OS Em Andamento</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Número</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Técnico</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {osAndamento.map((os) => (
                    <TableRow key={os.id}>
                      <TableCell className="font-medium">{os.numero}</TableCell>
                      <TableCell>{os.cliente.nome}</TableCell>
                      <TableCell>{os.tecnico?.name || '-'}</TableCell>
                      <TableCell>
                        {os.dataAbertura.toLocaleDateString('pt-BR')}
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          Ver Detalhes
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="concluidas">
          <Card>
            <CardHeader>
              <CardTitle>OS Concluídas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center py-8">
                Nenhuma OS concluída encontrada.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
