# Identidade Visual - Renomaq Multimarcas

**Data da Análise:** 29/12/2024
**Site:** https://renomaqmulti.com.br

---

## Paleta de Cores

### Cores Principais

| Cor | Código Sugerido | Uso |
|-----|-----------------|-----|
| **Vermelho Renomaq** | `#B22234` | Logo, destaques, CTAs principais |
| **Amarelo Vibrante** | `#FFD100` | Fachada, backgrounds de destaque, banners |
| **Preto** | `#1A1A1A` | Textos, menu, rodapé |
| **Branco** | `#FFFFFF` | Fundos, textos sobre escuro |
| **Cinza Escuro** | `#333333` | Botões secundários, textos |
| **Cinza Claro** | `#F5F5F5` | Backgrounds de seções |

### Cores Secundárias

| Cor | Código Sugerido | Uso |
|-----|-----------------|-----|
| **Laranja/Âmbar** | `#E8A33C` | Botões "Saiba Mais", CTAs secundários |
| **Verde** | `#25D366` | WhatsApp, detalhes de sucesso |
| **Verde Escuro** | `#006633` | Detalhes decorativos (colunas fachada) |

---

## Logo

### Descrição
- **"R"** em destaque na cor vermelha (bordô)
- **"enomaq"** em preto, fonte sem serifa
- **"Multimarcas"** abaixo, menor, em preto

### Variações
- Logo principal: Vermelho + Preto (para fundos claros)
- Logo invertido: Vermelho + Branco (para fundos escuros)

---

## Tipografia

### Fontes Utilizadas no Site
- **Títulos:** Sans-serif bold (similar a Montserrat ou Open Sans Bold)
- **Corpo:** Sans-serif regular
- **Menu:** Maiúsculas, peso médio

### Sugestão para o Sistema
| Uso | Fonte | Peso |
|-----|-------|------|
| Títulos H1 | Montserrat | Bold (700) |
| Títulos H2-H3 | Montserrat | SemiBold (600) |
| Corpo de texto | Open Sans | Regular (400) |
| Botões | Montserrat | Medium (500) |
| Labels/Small | Open Sans | Regular (400) |

---

## Elementos Visuais

### Botões
- **Primário:** Fundo vermelho (#B22234), texto branco, border-radius: 4px
- **Secundário:** Fundo laranja (#E8A33C), texto branco, border-radius: 25px (pill)
- **Terciário:** Fundo cinza escuro (#333), texto branco

### Cards/Categorias
- Fundo branco com sombra suave
- Imagem do produto em destaque
- Botão de categoria em cinza escuro

### Header
- Barra superior preta com informações de contato
- Logo à esquerda
- Menu horizontal à direita
- Item ativo em vermelho com fundo

### Footer
- Fundo preto/cinza muito escuro (#1A1A1A)
- Texto em cinza claro
- Ícones de redes sociais

### WhatsApp Button
- Floating button verde (#25D366)
- Posição: canto inferior direito
- Sempre visível

---

## Fachada da Loja

A fachada física é uma importante referência visual:

```
┌─────────────────────────────────────────┐
│          FUNDO AMARELO (#FFD100)        │
│                                         │
│    ┌─────────────────────────────┐      │
│    │      Renomaq                │      │
│    │      (vermelho)             │      │
│    │                             │      │
│    │  • Venda                    │      │
│    │  • Locação                  │      │
│    │  • Assistência Autorizada   │      │
│    │                             │      │
│    │      ☎ 3323-3959            │      │
│    └─────────────────────────────┘      │
│                                         │
│  ▌                               ▌      │
│  ▌ (colunas verdes)              ▌      │
│                                         │
└─────────────────────────────────────────┘
```

---

## Marcas Parceiras (Cores de Referência)

| Marca | Cor Principal | Uso no Sistema |
|-------|---------------|----------------|
| **Kärcher** | Amarelo (#FFD700) + Preto | Tags, filtros |
| **JactoClean** | Azul + Branco | Tags, filtros |
| **IPC Brasil** | Vermelho + Azul | Tags, filtros |

---

## Aplicação no Sistema

### Dashboard / Painel Administrativo
```css
:root {
  /* Cores Principais */
  --primary: #B22234;       /* Vermelho Renomaq */
  --primary-dark: #8B1A28;  /* Vermelho escuro */
  --secondary: #FFD100;     /* Amarelo */
  --accent: #E8A33C;        /* Laranja/Âmbar */

  /* Neutros */
  --black: #1A1A1A;
  --gray-dark: #333333;
  --gray-medium: #666666;
  --gray-light: #F5F5F5;
  --white: #FFFFFF;

  /* Status */
  --success: #28A745;
  --warning: #FFC107;
  --danger: #DC3545;
  --info: #17A2B8;

  /* WhatsApp */
  --whatsapp: #25D366;
}
```

### Exemplo de Uso
- **Sidebar:** Fundo preto (#1A1A1A) com texto branco
- **Header:** Fundo branco com logo e borda sutil
- **Botão Principal:** Vermelho (#B22234)
- **Botão Secundário:** Laranja (#E8A33C)
- **Alertas de Sucesso:** Verde
- **Cards:** Fundo branco com sombra suave

---

## Ícones

### Estilo Recomendado
- Linha fina (outline) ou preenchido sólido
- Consistência visual
- Sugestões: Lucide Icons, Heroicons, ou Phosphor Icons

### Ícones Principais Necessários
- 🔧 Assistência Técnica / OS
- 📦 Estoque / Produtos
- 🏷️ Vendas
- 📋 Contratos / Locação
- 👥 Clientes
- 💰 Financeiro
- 📊 Dashboard / Relatórios
- ⚙️ Configurações

---

## Imagens e Fotos

### Estilo
- Fotos reais dos equipamentos (Kärcher, JactoClean, IPC)
- Imagens de uso profissional (indústrias, limpeza)
- Técnicos trabalhando

### Tratamento
- Fundos neutros quando possível
- Boa iluminação
- Foco no equipamento

---

## Responsividade

### Breakpoints Sugeridos
| Dispositivo | Breakpoint |
|-------------|------------|
| Mobile | < 768px |
| Tablet | 768px - 1024px |
| Desktop | > 1024px |

---

## Resumo Executivo

A identidade visual da Renomaq é **profissional e industrial**, com:

1. **Vermelho** como cor de autoridade e destaque
2. **Amarelo** para chamar atenção (herança da fachada e Kärcher)
3. **Preto/Cinza** para profissionalismo
4. **Branco** para clareza e limpeza

O sistema deve transmitir:
- **Confiança** (30 anos de mercado)
- **Profissionalismo** (assistência autorizada)
- **Praticidade** (fácil de usar)
- **Solidez** (empresa estabelecida)

---

*Documento gerado em 29/12/2024*
