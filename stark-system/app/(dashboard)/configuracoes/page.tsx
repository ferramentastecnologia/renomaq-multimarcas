'use client';

import { Building, Users, Shield, Link as LinkIcon, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

export default function ConfiguracoesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Configurações</h1>
        <p className="text-muted-foreground">Gerencie as configurações do sistema</p>
      </div>

      <Tabs defaultValue="empresa" className="space-y-4">
        <TabsList>
          <TabsTrigger value="empresa">
            <Building className="mr-2 h-4 w-4" />
            Empresa
          </TabsTrigger>
          <TabsTrigger value="usuarios">
            <Users className="mr-2 h-4 w-4" />
            Usuários
          </TabsTrigger>
          <TabsTrigger value="permissoes">
            <Shield className="mr-2 h-4 w-4" />
            Permissões
          </TabsTrigger>
          <TabsTrigger value="integracoes">
            <LinkIcon className="mr-2 h-4 w-4" />
            Integrações
          </TabsTrigger>
          <TabsTrigger value="stark">
            <Sparkles className="mr-2 h-4 w-4" />
            STARK
          </TabsTrigger>
        </TabsList>

        <TabsContent value="empresa">
          <Card>
            <CardHeader>
              <CardTitle>Dados da Empresa</CardTitle>
              <CardDescription>Informações fiscais e cadastrais da empresa</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="razao">Razão Social</Label>
                  <Input id="razao" defaultValue="RENOMAQ ELETRO MECANICA LTDA" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="fantasia">Nome Fantasia</Label>
                  <Input id="fantasia" defaultValue="Renomaq Multimarcas" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="cnpj">CNPJ</Label>
                    <Input id="cnpj" defaultValue="12.345.678/0001-90" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="ie">Inscrição Estadual</Label>
                    <Input id="ie" placeholder="000.000.000" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input id="telefone" defaultValue="(47) 3323-3959" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="contato@renomaqmulti.com.br" />
                </div>
              </div>
              <Separator />
              <div className="flex justify-end gap-2">
                <Button variant="outline">Cancelar</Button>
                <Button>Salvar Alterações</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="usuarios">
          <Card>
            <CardHeader>
              <CardTitle>Gerenciar Usuários</CardTitle>
              <CardDescription>Adicione e gerencie usuários do sistema</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button>
                  <Users className="mr-2 h-4 w-4" />
                  Adicionar Usuário
                </Button>
                <p className="text-sm text-muted-foreground">
                  1 usuário ativo
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="permissoes">
          <Card>
            <CardHeader>
              <CardTitle>Perfis de Acesso</CardTitle>
              <CardDescription>Configure permissões por perfil</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Administrador</p>
                    <p className="text-sm text-muted-foreground">Acesso total ao sistema</p>
                  </div>
                  <Button variant="outline" size="sm">Editar</Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Gerente</p>
                    <p className="text-sm text-muted-foreground">Acesso a módulos operacionais</p>
                  </div>
                  <Button variant="outline" size="sm">Editar</Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Técnico</p>
                    <p className="text-sm text-muted-foreground">Acesso a OS e clientes</p>
                  </div>
                  <Button variant="outline" size="sm">Editar</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integracoes">
          <Card>
            <CardHeader>
              <CardTitle>Integrações</CardTitle>
              <CardDescription>Configure integrações com serviços externos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">WhatsApp Business</p>
                      <p className="text-sm text-muted-foreground">Envie notificações e mensagens</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Conectar</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <LinkIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">SEFAZ</p>
                      <p className="text-sm text-muted-foreground">Emissão de NF-e</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Configurar</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stark">
          <Card>
            <CardHeader>
              <CardTitle>Configurações do STARK</CardTitle>
              <CardDescription>Configure o assistente inteligente</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Ativar STARK</p>
                    <p className="text-sm text-muted-foreground">Habilitar assistente de IA</p>
                  </div>
                  <Button variant="outline" size="sm">Ativado</Button>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium mb-2">Automações Configuradas</h4>
                  <p className="text-sm text-muted-foreground">
                    Nenhuma automação configurada ainda.
                  </p>
                  <Button variant="outline" className="mt-4">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Criar Automação
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
