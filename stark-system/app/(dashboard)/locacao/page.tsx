'use client';

import { Plus, Key } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function LocacaoPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Locação de Equipamentos</h1>
          <p className="text-muted-foreground">Gerencie contratos de locação</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Contrato
        </Button>
      </div>

      <Tabs defaultValue="contratos" className="space-y-4">
        <TabsList>
          <TabsTrigger value="contratos">Contratos</TabsTrigger>
          <TabsTrigger value="equipamentos">Equipamentos</TabsTrigger>
          <TabsTrigger value="calendario">Calendário</TabsTrigger>
        </TabsList>

        <TabsContent value="contratos">
          <Card>
            <CardHeader>
              <CardTitle>Contratos de Locação</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-12">
                <Key className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground text-center">
                  Nenhum contrato de locação ativo no momento.
                </p>
                <Button className="mt-4">Criar Primeiro Contrato</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="equipamentos">
          <Card>
            <CardHeader>
              <CardTitle>Equipamentos Disponíveis para Locação</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center py-8">
                Configure os equipamentos disponíveis para locação no catálogo de produtos.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendario">
          <Card>
            <CardHeader>
              <CardTitle>Calendário de Locações</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center py-8">
                Visualize as devoluções e renovações programadas.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
