import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface KPICardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  description?: string;
}

export function KPICard({ title, value, icon: Icon, trend, description }: KPICardProps) {
  return (
    <Card className="card-yellow-border shadow-md hover:shadow-xl transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">{title}</p>
            <p className="text-3xl font-bold text-foreground">{value}</p>
            {trend && (
              <div className="flex items-center gap-1 text-xs">
                {trend.isPositive ? (
                  <div className="badge-yellow flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    <span>+{trend.value}%</span>
                  </div>
                ) : (
                  <div className="badge-red flex items-center gap-1">
                    <TrendingDown className="h-3 w-3" />
                    <span>{trend.value}%</span>
                  </div>
                )}
                <span className="text-muted-foreground ml-1">{description || 'vs mês anterior'}</span>
              </div>
            )}
          </div>
          <div className="icon-box-yellow">
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
