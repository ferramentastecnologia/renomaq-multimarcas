'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Wrench,
  Users,
  Package,
  Key,
  DollarSign,
  FileText,
  UserCog,
  BarChart,
  Settings
} from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { href: '/dashboard', icon: Home, label: 'Dashboard' },
  { href: '/os', icon: Wrench, label: 'Ordens de Serviço', badge: 12 },
  { href: '/clientes', icon: Users, label: 'Clientes' },
  { href: '/produtos', icon: Package, label: 'Produtos/Estoque' },
  { href: '/locacao', icon: Key, label: 'Locação' },
  { href: '/financeiro', icon: DollarSign, label: 'Financeiro' },
  { href: '/fiscal', icon: FileText, label: 'Fiscal' },
  { href: '/rh', icon: UserCog, label: 'RH/Pessoas' },
  { href: '/relatorios', icon: BarChart, label: 'Relatórios' },
  { href: '/configuracoes', icon: Settings, label: 'Configurações' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-[hsl(var(--sidebar))] border-r border-[hsl(var(--sidebar-border))]">
      {/* Logo */}
      <div className="flex h-16 items-center justify-center border-b border-[hsl(var(--sidebar-border))] px-6">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[hsl(var(--stark))] to-[hsl(var(--stark-light))]">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="text-[hsl(var(--sidebar-foreground))] font-bold text-xl">STARK</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-[hsl(var(--sidebar-primary))] text-[hsl(var(--sidebar-primary-foreground))]'
                  : 'text-[hsl(var(--sidebar-foreground))] hover:bg-[hsl(var(--sidebar-accent))]'
              )}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[hsl(var(--primary))] text-xs text-white">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-[hsl(var(--sidebar-border))] px-6 py-4">
        <p className="text-xs text-[hsl(var(--sidebar-foreground))]/60 text-center">
          Powered by<br />
          <span className="font-semibold">Starken Tecnologia</span>
        </p>
      </div>
    </aside>
  );
}
