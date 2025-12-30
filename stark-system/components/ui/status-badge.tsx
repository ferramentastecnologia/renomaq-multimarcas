import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type Status = 'aberta' | 'andamento' | 'aguardando_peca' | 'concluida' | 'cancelada' | 'cancelado' | 'pendente' | 'pago' | 'recebido' | 'vencido' | 'ativo';

const statusConfig = {
  aberta: { label: 'Aberta', className: 'badge-blue' },
  andamento: { label: 'Em Andamento', className: 'badge-yellow' },
  aguardando_peca: { label: 'Aguardando Peça', className: 'badge-gray' },
  concluida: { label: 'Concluída', className: 'badge-green' },
  cancelada: { label: 'Cancelada', className: 'badge-red' },
  cancelado: { label: 'Cancelado', className: 'badge-red' },
  pendente: { label: 'Pendente', className: 'badge-yellow' },
  pago: { label: 'Pago', className: 'badge-green' },
  recebido: { label: 'Recebido', className: 'badge-green' },
  vencido: { label: 'Vencido', className: 'badge-red' },
  ativo: { label: 'Ativo', className: 'badge-green' },
};

interface StatusBadgeProps {
  status: Status;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span className={cn(config.className, className)}>
      {config.label}
    </span>
  );
}
