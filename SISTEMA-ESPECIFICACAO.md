# Sistema de Gestão Inteligente - White Label

**Produto:** STARK System
**Desenvolvido por:** Starken Tecnologia LTDA
**Cliente Piloto:** Renomaq Multimarcas
**Versão:** 1.0
**Data:** 29/12/2024

---

## 1. Visão Geral

### 1.1 Conceito
Sistema de gestão empresarial **white label** com inteligência artificial integrada, projetado para empresas de:
- Venda de equipamentos
- Assistência técnica autorizada
- Locação de máquinas

### 1.2 Diferencial Competitivo
- **Agente STARK** - IA integrada para automação completa
- Interface moderna e intuitiva
- 100% na nuvem
- Multi-tenant (white label)
- Automação fiscal completa

### 1.3 Público-Alvo
- Assistências técnicas
- Lojas de equipamentos
- Locadoras de máquinas
- Prestadores de serviço

---

## 2. Arquitetura do Sistema

### 2.1 Stack Tecnológica

```
┌─────────────────────────────────────────────────────────────┐
│                      FRONTEND                                │
│         Next.js 14 + React + TypeScript + Tailwind          │
│              shadcn/ui + Framer Motion                       │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    AGENTE STARK (IA)                        │
│           Claude API / OpenAI + LangChain                   │
│      Automação · Análise · Previsões · Assistente           │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      BACKEND API                            │
│              Next.js API Routes + Prisma ORM                │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      DATABASE                               │
│                 PostgreSQL (Railway)                        │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    INTEGRAÇÕES                              │
│   WhatsApp API · SEFAZ (NF-e) · Bancos · Google Maps       │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Hospedagem
- **Frontend:** Vercel
- **Backend:** Vercel Serverless
- **Banco:** Railway PostgreSQL
- **Storage:** Cloudflare R2 ou AWS S3

---

## 3. Módulos do Sistema

### 3.1 Dashboard Principal
- Visão geral do negócio
- KPIs em tempo real
- Gráficos interativos
- Alertas e notificações
- Chat com STARK (IA)

### 3.2 Módulo Comercial
- **Orçamentos**
  - Criação rápida
  - Templates por tipo de serviço
  - Envio por WhatsApp/Email
  - Conversão para OS/Venda

- **Vendas**
  - PDV simplificado
  - Catálogo de produtos
  - Descontos e promoções
  - Múltiplas formas de pagamento

### 3.3 Módulo Assistência Técnica
- **Ordens de Serviço (OS)**
  - Abertura simplificada
  - Status em tempo real
  - Fotos e anexos
  - Histórico do equipamento
  - Controle de garantia por marca

- **Agendamento**
  - Calendário visual
  - Agenda por técnico
  - Lembretes automáticos (STARK)
  - Manutenção preventiva

### 3.4 Módulo Locação
- **Contratos**
  - Templates personalizáveis
  - Assinatura digital
  - Renovação automática

- **Equipamentos**
  - Disponibilidade em tempo real
  - Check-in / Check-out
  - Histórico de locações

- **Faturamento**
  - Recorrente automático
  - Medição de uso
  - Multas e adicionais

### 3.5 Módulo Estoque
- **Produtos**
  - Cadastro completo
  - Variações (modelo, marca)
  - Código de barras
  - Fotos múltiplas

- **Movimentações**
  - Entradas e saídas
  - Transferências
  - Inventário

- **Alertas (STARK)**
  - Estoque mínimo
  - Previsão de reposição
  - Produtos parados

### 3.6 Módulo Financeiro
- **Contas a Pagar**
  - Cadastro de despesas
  - Recorrências
  - Alertas de vencimento

- **Contas a Receber**
  - Títulos automáticos
  - Cobrança automatizada
  - Baixa automática

- **Fluxo de Caixa**
  - Visão diária/semanal/mensal
  - Previsões (STARK)
  - DRE simplificado

- **Conciliação Bancária**
  - Importação OFX
  - Match automático (STARK)

### 3.7 Módulo Fiscal
- **NF-e (Produto)**
  - Emissão automática
  - Integração SEFAZ
  - XML e DANFE

- **NFS-e (Serviço)**
  - Integração prefeituras
  - Emissão por OS

- **NFC-e (Consumidor)**
  - PDV integrado
  - Contingência offline

### 3.8 Módulo RH (Pessoas)
- **Colaboradores**
  - Cadastro completo
  - Documentos digitais
  - Férias e afastamentos

- **Ponto**
  - Registro digital
  - Banco de horas
  - Relatórios

- **Comissões**
  - Regras por vendedor
  - Cálculo automático (STARK)

### 3.9 Módulo CRM
- **Clientes**
  - Cadastro completo (PF/PJ)
  - Histórico de interações
  - Equipamentos vinculados

- **Leads**
  - Funil de vendas
  - Follow-up automático (STARK)

- **Comunicação**
  - WhatsApp integrado
  - Email marketing
  - SMS

### 3.10 Portal do Cliente
- Acompanhamento de OS
- Histórico de serviços
- Agendamento online
- Segunda via de boletos
- Chat com suporte

---

## 4. Agente STARK (Inteligência Artificial)

### 4.1 Visão Geral

O **STARK** é o assistente de IA integrado ao sistema que automatiza tarefas, fornece insights e interage com os usuários via chat.

```
┌─────────────────────────────────────────────────────────────┐
│                      AGENTE STARK                           │
│                                                             │
│  "Olá! Sou o STARK, seu assistente inteligente.            │
│   Como posso ajudar hoje?"                                  │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 💬 Chat Natural                                      │   │
│  │ 📊 Análise de Dados                                  │   │
│  │ 🤖 Automações                                        │   │
│  │ 📈 Previsões                                         │   │
│  │ 🔔 Alertas Inteligentes                              │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### 4.2 Capacidades do STARK

#### 4.2.1 Assistente Conversacional
- Chat em linguagem natural
- Responde dúvidas sobre o sistema
- Executa comandos por texto
- Gera relatórios sob demanda

**Exemplos de interação:**
```
Usuário: "Stark, qual foi o faturamento do mês?"
STARK: "O faturamento de dezembro foi R$ 45.230,00,
        12% maior que novembro. As vendas de lavadoras
        foram o destaque com R$ 28.000,00."

Usuário: "Abra uma OS para o cliente João Silva"
STARK: "OS #1234 criada para João Silva.
        Qual equipamento será atendido?"

Usuário: "Quais contas vencem essa semana?"
STARK: "Você tem 3 contas vencendo esta semana:
        - Fornecedor X: R$ 1.200 (ter)
        - Energia: R$ 890 (qua)
        - Aluguel: R$ 3.500 (sex)
        Total: R$ 5.590. Saldo disponível: R$ 8.200."
```

#### 4.2.2 Automação Financeira
- **Conciliação automática** - Match de extratos com lançamentos
- **Categorização** - Classifica despesas automaticamente
- **Previsão de caixa** - Projeta fluxo futuro
- **Alertas de vencimento** - Notifica antes do vencimento
- **Cobrança automática** - Envia lembretes de pagamento
- **DRE automático** - Gera demonstrativos

#### 4.2.3 Automação de Estoque
- **Previsão de demanda** - Analisa histórico e sazonalidade
- **Alerta de reposição** - Avisa quando pedir
- **Sugestão de compra** - Indica quantidades ideais
- **Giro de estoque** - Identifica produtos parados
- **Precificação** - Sugere preços baseado no mercado

#### 4.2.4 Automação de RH
- **Cálculo de comissões** - Processa automaticamente
- **Controle de ponto** - Identifica inconsistências
- **Banco de horas** - Calcula e alerta
- **Férias** - Avisa períodos concessivos
- **Aniversários** - Lembra datas importantes

#### 4.2.5 Automação Fiscal
- **Emissão automática** - NF-e ao faturar venda
- **Validação fiscal** - Verifica dados antes de emitir
- **Correção de erros** - Sugere correções
- **Relatórios fiscais** - Gera SPED, livros

#### 4.2.6 Automação Comercial
- **Follow-up** - Lembra de contatar leads
- **Orçamentos** - Cria baseado no histórico
- **Cross-sell** - Sugere produtos complementares
- **Recuperação** - Contata clientes inativos

#### 4.2.7 Análises e Insights
- **Dashboard inteligente** - Destaca o que importa
- **Anomalias** - Detecta padrões estranhos
- **Tendências** - Identifica crescimento/queda
- **Comparativos** - Período atual vs anterior
- **Ranking** - Melhores clientes, produtos, etc.

### 4.3 Interface do STARK

#### Chat Flutuante (sempre disponível)
```
┌─────────────────────────────┐
│  🤖 STARK                 ✕ │
├─────────────────────────────┤
│                             │
│  Olá! Como posso ajudar?    │
│                             │
│  ┌─────────────────────┐    │
│  │ Faturamento do mês  │    │
│  └─────────────────────┘    │
│  ┌─────────────────────┐    │
│  │ Contas a vencer     │    │
│  └─────────────────────┘    │
│  ┌─────────────────────┐    │
│  │ Abrir nova OS       │    │
│  └─────────────────────┘    │
│                             │
├─────────────────────────────┤
│ 💬 Digite sua mensagem...   │
└─────────────────────────────┘
```

#### Painel STARK (tela dedicada)
- Histórico de conversas
- Automações configuradas
- Logs de ações executadas
- Configurações do agente

### 4.4 Automações Programáveis

O usuário pode criar automações personalizadas:

```
QUANDO: [Evento]
SE: [Condição]
ENTÃO: [Ação]
```

**Exemplos:**

1. **Cobrança automática**
   ```
   QUANDO: Título vencer em 3 dias
   SE: Não estiver pago
   ENTÃO: Enviar WhatsApp de lembrete
   ```

2. **Reposição de estoque**
   ```
   QUANDO: Estoque atingir mínimo
   SE: Produto ativo
   ENTÃO: Criar pedido de compra + Notificar gestor
   ```

3. **Follow-up de orçamento**
   ```
   QUANDO: Orçamento com 5 dias sem resposta
   SE: Status = Aguardando
   ENTÃO: Enviar WhatsApp + Agendar ligação
   ```

---

## 5. Telas do Sistema

### 5.1 Autenticação
- Login (email/senha)
- Recuperar senha
- Primeiro acesso
- 2FA (opcional)

### 5.2 Dashboard
- Cards de KPIs
- Gráfico de faturamento
- OS do dia
- Alertas/Notificações
- Chat STARK

### 5.3 Ordens de Serviço
- Lista de OS (filtros, busca)
- Nova OS (wizard)
- Detalhes da OS
- Kanban de status
- Impressão/PDF

### 5.4 Clientes
- Lista de clientes
- Cadastro/Edição
- Perfil do cliente (histórico completo)
- Equipamentos do cliente

### 5.5 Produtos/Estoque
- Catálogo de produtos
- Cadastro/Edição
- Movimentações
- Inventário

### 5.6 Locação
- Contratos ativos
- Novo contrato
- Equipamentos disponíveis
- Calendário de devoluções

### 5.7 Financeiro
- Contas a pagar
- Contas a receber
- Fluxo de caixa
- Conciliação
- DRE

### 5.8 Fiscal
- Notas emitidas
- Emitir NF-e/NFS-e
- Relatórios fiscais

### 5.9 RH/Pessoas
- Colaboradores
- Registro de ponto
- Comissões
- Férias

### 5.10 Configurações
- Empresa
- Usuários
- Permissões
- Integrações
- STARK (automações)
- White label

### 5.11 Portal do Cliente (externo)
- Login do cliente
- Minhas OS
- Meus equipamentos
- Boletos
- Agendamento

---

## 6. Identidade Visual

### 6.1 Cores (Tema Renomaq)

```css
:root {
  /* Primárias */
  --primary: #B22234;
  --primary-dark: #8B1A28;
  --secondary: #FFD100;

  /* Neutras */
  --background: #F8FAFC;
  --card: #FFFFFF;
  --foreground: #1A1A1A;
  --muted: #64748B;
  --border: #E2E8F0;

  /* Status */
  --success: #22C55E;
  --warning: #F59E0B;
  --danger: #EF4444;
  --info: #3B82F6;

  /* STARK */
  --stark: #6366F1;
  --stark-light: #818CF8;
}
```

### 6.2 Tipografia
- **Fonte principal:** Inter
- **Fonte display:** Cal Sans ou Montserrat

### 6.3 Componentes
- Cards com sombra suave
- Bordas arredondadas (8px)
- Ícones: Lucide Icons
- Animações sutis (Framer Motion)

---

## 7. Integrações

### 7.1 WhatsApp Business API
- Envio de mensagens automáticas
- Notificações de OS
- Cobranças
- Atendimento

### 7.2 SEFAZ
- Emissão NF-e
- Consulta de notas
- Cancelamento

### 7.3 Prefeituras (NFS-e)
- Integração por cidade
- Emissão automática

### 7.4 Bancos
- Boletos (API bancária)
- PIX
- Importação OFX

### 7.5 Google
- Maps (geolocalização)
- Calendar (agenda)

---

## 8. Segurança

- Autenticação JWT
- Refresh tokens
- Rate limiting
- HTTPS obrigatório
- Logs de auditoria
- Backup automático
- LGPD compliance

---

## 9. White Label

### 9.1 Personalizações por Cliente
- Logo
- Cores do tema
- Nome do sistema
- Domínio personalizado
- Email do remetente

### 9.2 Branding Starken
- "Powered by Starken Tecnologia"
- Link para site institucional
- Versão e suporte

---

## 10. Roadmap

### Fase 1 - MVP (Lovable)
- [ ] Dashboard
- [ ] OS básico
- [ ] Clientes
- [ ] Estoque básico
- [ ] Chat STARK (simulado)

### Fase 2 - Core
- [ ] Financeiro completo
- [ ] NF-e integração
- [ ] Locação
- [ ] STARK funcional

### Fase 3 - Avançado
- [ ] Portal do cliente
- [ ] RH completo
- [ ] Automações STARK
- [ ] Multi-tenant

### Fase 4 - Scale
- [ ] App mobile
- [ ] Marketplace de integrações
- [ ] API pública

---

*Documento criado em 29/12/2024*
*Starken Tecnologia LTDA*
