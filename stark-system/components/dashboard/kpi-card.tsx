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
    <Card className="border-l-4 border-l-accent shadow-md hover:shadow-xl transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">{title}</p>
            <p className="text-3xl font-bold text-foreground">{value}</p>
            {trend && (
              <div className="flex items-center gap-1 text-xs">
                {trend.isPositive ? (
                  <div className="flex items-center gap-1 bg-accent/20 px-2 py-1 rounded-full">
                    <TrendingUp className="h-3 w-3 text-accent-foreground" />
                    <span className="font-bold text-accent-foreground">
                      +{trend.value}%
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 bg-primary/20 px-2 py-1 rounded-full">
                    <TrendingDown className="h-3 w-3 text-primary" />
                    <span className="font-bold text-primary">
                      {trend.value}%
                    </span>
                  </div>
                )}
                <span className="text-muted-foreground ml-1">{description || 'vs mês anterior'}</span>
              </div>
            )}
          </div>
          <div className="rounded-xl bg-gradient-to-br from-accent to-accent/80 p-3 shadow-lg">
            <Icon className="h-6 w-6 text-accent-foreground" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
