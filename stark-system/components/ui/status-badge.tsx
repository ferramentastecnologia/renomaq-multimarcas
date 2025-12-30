import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type Status = 'aberta' | 'andamento' | 'aguardando_peca' | 'concluida' | 'cancelada' | 'pendente' | 'pago' | 'recebido' | 'vencido' | 'ativo';

const statusConfig = {
  aberta: { label: 'Aberta', className: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' },
  andamento: { label: 'Em Andamento', className: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' },
  aguardando_peca: { label: 'Aguardando Peça', className: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400' },
  concluida: { label: 'Concluída', className: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' },
  cancelada: { label: 'Cancelada', className: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' },
  pendente: { label: 'Pendente', className: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400' },
  pago: { label: 'Pago', className: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' },
  recebido: { label: 'Recebido', className: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' },
  vencido: { label: 'Vencido', className: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' },
  ativo: { label: 'Ativo', className: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' },
};

interface StatusBadgeProps {
  status: Status;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <Badge
      variant="secondary"
      className={cn(config.className, className)}
    >
      {config.label}
    </Badge>
  );
}
