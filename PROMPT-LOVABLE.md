# Prompt para Lovable - STARK System

**Copie o prompt abaixo e cole no Lovable para gerar o sistema:**

---

## PROMPT PRINCIPAL (Cole este primeiro)

```
Crie um sistema de gestão empresarial moderno chamado "STARK System" desenvolvido por "Starken Tecnologia". O sistema é white-label para empresas de venda de equipamentos, assistência técnica e locação de máquinas.

## Design System

### Cores
- Primary: #B22234 (vermelho)
- Secondary: #FFD100 (amarelo)
- Background: #F8FAFC
- Card: #FFFFFF
- Text: #1A1A1A
- Muted: #64748B
- Border: #E2E8F0
- Success: #22C55E
- Warning: #F59E0B
- Danger: #EF4444
- STARK (IA): #6366F1 (roxo)

### Tipografia
- Font: Inter
- Headings: font-semibold
- Body: font-normal

### Estilo
- Bordas arredondadas (rounded-lg)
- Sombras suaves (shadow-sm)
- Cards brancos com borda sutil
- Ícones: Lucide Icons
- Layout clean e moderno
- Animações sutis

## Estrutura do Sistema

### Layout Principal
- Sidebar escura (#1A1A1A) à esquerda com navegação
- Header branco no topo com busca e perfil do usuário
- Área de conteúdo com fundo #F8FAFC
- Chat flutuante do STARK (IA) no canto inferior direito

### Sidebar (fixa, 250px)
Menu com ícones:
- Dashboard (Home icon)
- Ordens de Serviço (Wrench icon)
- Clientes (Users icon)
- Produtos/Estoque (Package icon)
- Locação (Key icon)
- Financeiro (DollarSign icon)
- Fiscal (FileText icon)
- RH/Pessoas (UserCog icon)
- Relatórios (BarChart icon)
- Configurações (Settings icon)

Logo "STARK" no topo da sidebar com gradiente roxo
"Powered by Starken Tecnologia" no rodapé da sidebar

### Header
- Breadcrumb à esquerda
- Barra de busca global no centro
- Notificações (Bell icon) com badge
- Perfil do usuário com avatar e dropdown

## Páginas para Criar

### 1. Página de Login
- Card centralizado na tela
- Logo STARK no topo
- Campos: Email e Senha
- Botão "Entrar" vermelho
- Link "Esqueci minha senha"
- Fundo com gradiente sutil
- "Powered by Starken Tecnologia" no rodapé

### 2. Dashboard
Cards de KPIs no topo (4 colunas):
- Faturamento do Mês (R$ com variação %)
- OS Abertas (número)
- Clientes Ativos (número)
- Estoque (valor total)

Gráfico de linha: Faturamento últimos 6 meses
Gráfico de pizza: Vendas por categoria

Seção "Hoje":
- Lista de OS do dia (5 itens)
- Contas a vencer (3 itens)
- Alertas importantes (se houver)

Chat STARK no canto inferior direito:
- Balão de chat flutuante
- Ícone circular roxo com símbolo de IA
- "Como posso ajudar?" no hover

### 3. Ordens de Serviço
Tabs: "Todas" | "Abertas" | "Em Andamento" | "Concluídas"

Filtros: Data, Status, Técnico, Cliente

Tabela com colunas:
- Número OS
- Cliente
- Equipamento
- Status (badge colorido)
- Técnico
- Data Abertura
- Ações (Ver, Editar)

Botão "Nova OS" vermelho no topo direito

Modal "Nova OS":
- Select Cliente (com busca)
- Select Equipamento do cliente
- Descrição do problema (textarea)
- Técnico responsável
- Prioridade (Baixa/Normal/Alta/Urgente)
- Botões Cancelar e Salvar

### 4. Detalhes da OS
Header com número da OS e status grande
Tabs: Informações | Peças | Histórico | Anexos

Informações:
- Card dados do cliente
- Card dados do equipamento
- Card descrição do problema
- Timeline de status

Ações: Adicionar Peça, Atualizar Status, Finalizar, Imprimir

### 5. Clientes
Barra de busca e filtros
Tabela de clientes:
- Nome/Razão Social
- Documento (CPF/CNPJ)
- Telefone
- Email
- Cidade
- Ações

Botão "Novo Cliente"

Modal de cadastro:
- Tabs: PF | PJ
- Campos de dados pessoais
- Endereço com busca de CEP
- Contatos

### 6. Produtos/Estoque
Tabs: "Produtos" | "Movimentações" | "Inventário"

Grid de produtos (cards):
- Foto do produto
- Nome
- SKU
- Estoque atual
- Preço
- Status (badge)

Filtros: Categoria, Marca, Status

Botão "Novo Produto"

### 7. Financeiro
Tabs: "Resumo" | "A Pagar" | "A Receber" | "Fluxo de Caixa"

Resumo:
- Cards: Saldo, A Receber, A Pagar, Resultado
- Gráfico de barras: Entradas x Saídas
- Lista de vencimentos próximos

A Pagar / A Receber:
- Tabela com filtros de período e status
- Ações: Baixar, Editar, Excluir

Fluxo de Caixa:
- Gráfico de linha projetado
- Tabela dia a dia

### 8. Locação
Tabs: "Contratos" | "Equipamentos" | "Calendário"

Contratos:
- Tabela de contratos ativos
- Status: Ativo, Vencendo, Vencido
- Cliente, Equipamento, Valor, Vencimento

Equipamentos:
- Cards de equipamentos para locação
- Status: Disponível, Locado, Manutenção

Calendário:
- Visão mensal de devoluções
- Cores por status

### 9. Chat STARK (Componente Flutuante)
Botão circular roxo (#6366F1) no canto inferior direito
Ícone de IA/cérebro ou sparkles

Ao clicar, expande para:
- Header "STARK" com botão fechar
- Área de mensagens (scroll)
- Input de texto com botão enviar
- Sugestões rápidas (chips clicáveis)

Mensagem do STARK:
- Avatar circular roxo
- Texto em balão cinza claro
- Timestamp

Mensagem do usuário:
- Alinhada à direita
- Balão vermelho/primary
- Texto branco

## Componentes Reutilizáveis

### Card de KPI
- Título pequeno em muted
- Valor grande em destaque
- Variação % com cor (verde/vermelho)
- Ícone relacionado

### Status Badge
- Cores por status:
  - Aberto: blue
  - Em Andamento: yellow
  - Concluído: green
  - Cancelado: red
  - Vencido: red
  - Pendente: gray

### Data Table
- Header fixo
- Linhas zebradas sutis
- Hover em linha
- Ações na última coluna
- Paginação no rodapé
- Seleção múltipla (checkbox)

### Modal/Dialog
- Overlay escuro
- Card branco centralizado
- Header com título e X
- Body com padding
- Footer com botões alinhados à direita

### Form Fields
- Labels acima do campo
- Placeholder descritivo
- Validação em tempo real
- Mensagem de erro em vermelho

## Responsividade
- Sidebar colapsa em mobile (hamburger menu)
- Cards empilham em telas menores
- Tabelas com scroll horizontal em mobile
- Chat STARK se adapta à tela

## Dados Mock
Crie dados realistas em português brasileiro para:
- 10 clientes (empresas e pessoas)
- 20 produtos (equipamentos de limpeza: lavadoras, aspiradores, etc)
- 15 ordens de serviço em diferentes status
- 10 lançamentos financeiros
- 5 contratos de locação

Use marcas: Kärcher, JactoClean, IPC Brasil
```

---

## PROMPT COMPLEMENTAR 1 - Páginas Adicionais

```
Adicione as seguintes páginas ao sistema STARK:

### 10. Página de Configurações
Tabs: "Empresa" | "Usuários" | "Permissões" | "Integrações" | "STARK"

Empresa:
- Logo upload
- Dados da empresa
- Configurações fiscais
- Certificado digital

Usuários:
- Lista de usuários
- Adicionar/Editar usuário
- Status ativo/inativo

Permissões:
- Perfis de acesso (Admin, Gerente, Vendedor, Técnico)
- Matriz de permissões por módulo

Integrações:
- Cards de integrações disponíveis
- WhatsApp, SEFAZ, Bancos
- Status: Conectado/Desconectado

STARK:
- Automações configuradas
- Adicionar nova automação
- Logs de execução
- Configurações do agente

### 11. Portal do Cliente (área externa)
Layout diferente: Header simples + conteúdo centralizado

- Login do cliente
- Dashboard com OS do cliente
- Lista de equipamentos
- Histórico de serviços
- Segunda via de boletos
- Agendamento de serviço

### 12. Relatórios
Lista de relatórios disponíveis em cards:
- Vendas por período
- OS por técnico
- Produtos mais vendidos
- Clientes inadimplentes
- Estoque crítico
- Faturamento mensal

Filtros de período e formato de exportação (PDF, Excel)

### 13. Página de NF-e
Tabs: "Emitidas" | "Emitir Nova"

Emitidas:
- Tabela de notas
- Número, Cliente, Valor, Status, Data
- Ações: Ver XML, DANFE, Cancelar

Emitir Nova:
- Form completo de nota fiscal
- Seleção de produtos
- Cálculo automático de impostos
- Preview antes de enviar
```

---

## PROMPT COMPLEMENTAR 2 - Detalhes do STARK

```
Expanda o componente de chat STARK com as seguintes funcionalidades visuais:

### Chat STARK Expandido

1. Quando minimizado:
- Botão circular roxo (64x64px)
- Ícone de sparkles ou cérebro
- Badge com número de notificações
- Pulse animation quando há mensagem nova

2. Quando expandido (400x500px):
- Header gradiente roxo (#6366F1 to #818CF8)
- "STARK" em branco, bold
- Status "Online" com dot verde
- Botão minimizar e fechar

3. Área de mensagens:
- Mensagens do STARK à esquerda com avatar
- Mensagens do usuário à direita
- Typing indicator (3 dots animados)
- Timestamps discretos

4. Sugestões rápidas:
- Chips abaixo das mensagens
- "Faturamento do mês"
- "Contas a vencer"
- "Nova OS"
- "Estoque baixo"

5. Input área:
- Campo de texto com placeholder "Digite sua mensagem..."
- Botão de microfone (para futuro voice)
- Botão enviar (roxo)

6. Tela de boas-vindas (primeira interação):
- Ilustração de IA
- "Olá! Sou o STARK, seu assistente inteligente."
- "Posso ajudar com financeiro, estoque, OS e muito mais!"
- Botões de ação rápida

### Notificações do STARK
Modal que aparece no canto:
- Ícone de STARK
- Título da notificação
- Descrição breve
- Botões de ação
- Auto-dismiss após 5s

Tipos:
- Alerta de estoque (warning/yellow)
- Conta vencendo (danger/red)
- OS atrasada (danger/red)
- Meta atingida (success/green)
- Insight/dica (info/blue)
```

---

## PROMPT COMPLEMENTAR 3 - Componentes Extras

```
Adicione estes componentes e melhorias ao sistema STARK:

### Componentes de Form Avançados

1. Select com busca (Combobox):
- Input de busca no topo
- Lista filtrada abaixo
- Loading state
- Empty state
- Selected state com chip

2. Date Range Picker:
- Calendário duplo
- Presets (Hoje, Esta semana, Este mês, etc)
- Input com ícone de calendário

3. File Upload:
- Área de drag and drop
- Lista de arquivos anexados
- Preview de imagens
- Progress bar de upload

4. Rich Text Editor (para descrições):
- Toolbar básica (bold, italic, lista)
- Área de edição limpa

### Empty States
Para cada seção vazia, criar ilustração + mensagem:
- "Nenhuma OS encontrada" + botão criar
- "Nenhum cliente cadastrado" + botão adicionar
- "Estoque vazio" + botão adicionar produto

### Loading States
- Skeleton loaders para cards
- Spinner para botões
- Progress bar para operações longas

### Toasts/Notifications
- Posição: top-right
- Tipos: success, error, warning, info
- Auto-dismiss com progress bar
- Botão de fechar

### Breadcrumbs
- Home > Módulo > Página atual
- Links clicáveis
- Separador com chevron

### Command Palette (Cmd+K)
- Modal de busca global
- Busca em: Clientes, OS, Produtos, Ações
- Atalhos de teclado
- Resultados agrupados por tipo
```

---

## NOTAS IMPORTANTES PARA O LOVABLE

1. **Use shadcn/ui** como base de componentes
2. **Tailwind CSS** para estilos
3. **Lucide React** para ícones
4. **Framer Motion** para animações
5. **React Hook Form** para formulários
6. **Recharts** para gráficos
7. **date-fns** para datas

O sistema deve parecer profissional, moderno e ser intuitivo de usar. Priorize a experiência do usuário com feedback visual em todas as ações.

---

*Prompt criado para Lovable - STARK System v1.0*
*Starken Tecnologia LTDA*
