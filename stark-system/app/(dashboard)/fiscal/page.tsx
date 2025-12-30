'use client';

import { Plus, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function FiscalPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Fiscal</h1>
          <p className="text-muted-foreground">Gerencie notas fiscais e documentos</p>
        </div>
        <button className="btn-yellow flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Emitir Nota
        </button>
      </div>

      <Tabs defaultValue="emitidas" className="space-y-4">
        <TabsList>
          <TabsTrigger value="emitidas">Notas Emitidas</TabsTrigger>
          <TabsTrigger value="emitir">Emitir Nova</TabsTrigger>
          <TabsTrigger value="relatorios">Relatórios Fiscais</TabsTrigger>
        </TabsList>

        <TabsContent value="emitidas">
          <Card>
            <CardHeader>
              <CardTitle>Notas Fiscais Emitidas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center py-12">
                <FileText className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground text-center">
                  Nenhuma nota fiscal emitida ainda.
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Configure a integração com SEFAZ nas configurações.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="emitir">
          <Card>
            <CardHeader>
              <CardTitle>Emitir Nova Nota Fiscal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center py-8">
                Configure a integração fiscal antes de emitir notas.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="relatorios">
          <Card>
            <CardHeader>
              <CardTitle>Relatórios Fiscais</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Button variant="outline" className="justify-start">
                  Livro de Entrada e Saída
                </Button>
                <Button variant="outline" className="justify-start">
                  SPED Fiscal
                </Button>
                <Button variant="outline" className="justify-start">
                  Relatório de Impostos
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
