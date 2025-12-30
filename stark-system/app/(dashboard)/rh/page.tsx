'use client';

import { Plus, UserCog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function RHPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">RH / Pessoas</h1>
          <p className="text-muted-foreground">Gerencie colaboradores e recursos humanos</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Novo Colaborador
        </Button>
      </div>

      <Tabs defaultValue="colaboradores" className="space-y-4">
        <TabsList>
          <TabsTrigger value="colaboradores">Colaboradores</TabsTrigger>
          <TabsTrigger value="ponto">Registro de Ponto</TabsTrigger>
          <TabsTrigger value="comissoes">Comissões</TabsTrigger>
          <TabsTrigger value="ferias">Férias</TabsTrigger>
        </TabsList>

        <TabsContent value="colaboradores">
          <Card>
            <CardHeader>
              <CardTitle>Lista de Colaboradores</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-12">
                <UserCog className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground text-center">
                  Nenhum colaborador cadastrado ainda.
                </p>
                <Button className="mt-4">Cadastrar Primeiro Colaborador</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ponto">
          <Card>
            <CardHeader>
              <CardTitle>Registro de Ponto</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center py-8">
                Visualize e gerencie os registros de ponto dos colaboradores.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="comissoes">
          <Card>
            <CardHeader>
              <CardTitle>Comissões</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center py-8">
                Configure e calcule comissões de vendas.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ferias">
          <Card>
            <CardHeader>
              <CardTitle>Controle de Férias</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center py-8">
                Gerencie períodos de férias e afastamentos.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
