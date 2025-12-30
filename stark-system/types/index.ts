export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'gerente' | 'vendedor' | 'tecnico';
  avatar?: string;
}

export interface Cliente {
  id: string;
  tipo: 'PF' | 'PJ';
  nome: string;
  documento: string;
  email: string;
  telefone: string;
  endereco: {
    rua: string;
    numero: string;
    complemento?: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
  };
  equipamentos?: Equipamento[];
  createdAt: Date;
}

export interface Equipamento {
  id: string;
  clienteId: string;
  marca: 'Kärcher' | 'JactoClean' | 'IPC Brasil' | 'Outros';
  modelo: string;
  serie: string;
  garantiaAte?: Date;
  observacoes?: string;
}

export interface OrdemServico {
  id: string;
  numero: string;
  clienteId: string;
  cliente: Cliente;
  equipamentoId: string;
  equipamento: Equipamento;
  problemaRelatado: string;
  diagnostico?: string;
  status: 'aberta' | 'andamento' | 'aguardando_peca' | 'concluida' | 'cancelada';
  prioridade: 'baixa' | 'normal' | 'alta' | 'urgente';
  tecnicoId?: string;
  tecnico?: User;
  dataAbertura: Date;
  dataConclusao?: Date;
  pecas?: PecaOS[];
  historico?: HistoricoOS[];
  anexos?: string[];
  valorPecas: number;
  valorMaoObra: number;
  valorTotal: number;
  emGarantia: boolean;
}

export interface PecaOS {
  id: string;
  ordemServicoId: string;
  produtoId: string;
  produto: Produto;
  quantidade: number;
  valorUnitario: number;
  valorTotal: number;
}

export interface HistoricoOS {
  id: string;
  ordemServicoId: string;
  usuarioId: string;
  usuario: User;
  acao: string;
  descricao?: string;
  data: Date;
}

export interface Produto {
  id: string;
  sku: string;
  nome: string;
  descricao?: string;
  categoria: 'lavadora' | 'aspirador' | 'enceradeira' | 'varredeira' | 'peca' | 'acessorio';
  marca: string;
  modelo?: string;
  precoCusto: number;
  precoVenda: number;
  estoque: number;
  estoqueMinimo: number;
  foto?: string;
  ativo: boolean;
  locavel: boolean;
}

export interface ContratoLocacao {
  id: string;
  numero: string;
  clienteId: string;
  cliente: Cliente;
  equipamentoId: string;
  equipamento: Produto;
  dataInicio: Date;
  dataFim: Date;
  valorMensal: number;
  diaVencimento: number;
  status: 'ativo' | 'vencido' | 'cancelado' | 'concluido';
  observacoes?: string;
}

export interface ContaPagar {
  id: string;
  descricao: string;
  fornecedor?: string;
  categoria: 'fornecedor' | 'aluguel' | 'energia' | 'agua' | 'internet' | 'salario' | 'outros';
  valor: number;
  dataVencimento: Date;
  dataPagamento?: Date;
  status: 'pendente' | 'pago' | 'vencido' | 'cancelado';
  formaPagamento?: string;
  observacoes?: string;
}

export interface ContaReceber {
  id: string;
  descricao: string;
  clienteId?: string;
  cliente?: Cliente;
  categoria: 'venda' | 'servico' | 'locacao' | 'outros';
  valor: number;
  dataVencimento: Date;
  dataRecebimento?: Date;
  status: 'pendente' | 'recebido' | 'vencido' | 'cancelado';
  formaPagamento?: string;
  observacoes?: string;
}

export interface NotaFiscal {
  id: string;
  numero: string;
  serie: string;
  tipo: 'NFe' | 'NFSe' | 'NFCe';
  clienteId: string;
  cliente: Cliente;
  dataEmissao: Date;
  valorTotal: number;
  status: 'emitida' | 'cancelada' | 'erro';
  chaveAcesso?: string;
  xmlUrl?: string;
  pdfUrl?: string;
}

export interface Colaborador {
  id: string;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  cargo: string;
  dataAdmissao: Date;
  salario: number;
  ativo: boolean;
  userId?: string;
}

export interface Ponto {
  id: string;
  colaboradorId: string;
  colaborador: Colaborador;
  data: Date;
  entrada: string;
  saidaAlmoco?: string;
  voltaAlmoco?: string;
  saida?: string;
  observacoes?: string;
}

export interface KPI {
  label: string;
  value: string | number;
  icon: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export interface MenuItem {
  label: string;
  href: string;
  icon: any;
  badge?: number;
  submenu?: MenuItem[];
}
