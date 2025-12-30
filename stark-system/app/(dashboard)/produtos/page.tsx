'use client';

import { Plus, Search, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { mockProdutos } from '@/data/mock';

export default function ProdutosPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Produtos/Estoque</h1>
          <p className="text-muted-foreground">Gerencie produtos e controle de estoque</p>
        </div>
        <button className="btn-yellow flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Novo Produto
        </button>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar produtos..." className="pl-8" />
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="catalogo" className="space-y-4">
        <TabsList>
          <TabsTrigger value="catalogo">Catálogo</TabsTrigger>
          <TabsTrigger value="movimentacoes">Movimentações</TabsTrigger>
          <TabsTrigger value="inventario">Inventário</TabsTrigger>
        </TabsList>

        <TabsContent value="catalogo">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {mockProdutos.map((produto) => (
              <Card key={produto.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                        <Package className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-base">{produto.nome}</CardTitle>
                        <p className="text-sm text-muted-foreground">{produto.sku}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Marca:</span>
                    <span className="font-medium">{produto.marca}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Estoque:</span>
                    <Badge variant={produto.estoque <= produto.estoqueMinimo ? 'destructive' : 'default'}>
                      {produto.estoque} unidades
                    </Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Preço:</span>
                    <span className="font-bold">R$ {produto.precoVenda.toLocaleString('pt-BR')}</span>
                  </div>
                  <Button variant="outline" className="w-full mt-2">Ver Detalhes</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="movimentacoes">
          <Card>
            <CardHeader>
              <CardTitle>Movimentações de Estoque</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center py-8">
                Nenhuma movimentação recente.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inventario">
          <Card>
            <CardHeader>
              <CardTitle>Inventário</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center py-8">
                Realize um inventário para conferir seu estoque.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
