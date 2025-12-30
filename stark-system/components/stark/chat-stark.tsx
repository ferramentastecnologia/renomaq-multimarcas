'use client';

import { useState } from 'react';
import { Sparkles, X, Send, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export function ChatStark() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Olá! Sou o STARK, seu assistente inteligente. Como posso ajudar hoje?',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const suggestedActions = [
    'Faturamento do mês',
    'Contas a vencer',
    'Abrir nova OS',
    'Estoque baixo',
  ];

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    // Simular resposta do STARK
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Estou processando sua solicitação...',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, response]);
    }, 1000);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-to-br from-[hsl(var(--stark))] to-[hsl(var(--stark-light))] shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
      >
        <Sparkles className="h-6 w-6 text-white" />
        <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs text-white flex items-center justify-center animate-pulse">
          1
        </span>
      </button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 z-50 w-96 h-[600px] flex flex-col shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[hsl(var(--stark))] to-[hsl(var(--stark-light))]">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border-2 border-white">
            <AvatarFallback className="bg-white text-[hsl(var(--stark))]">
              <Sparkles className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-bold text-white">STARK</h3>
            <p className="text-xs text-white/80 flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              Online
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(false)}
          className="text-white hover:bg-white/20"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              'flex gap-2',
              message.role === 'user' ? 'justify-end' : 'justify-start'
            )}
          >
            {message.role === 'assistant' && (
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-[hsl(var(--stark))] text-white">
                  <Sparkles className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
            )}
            <div
              className={cn(
                'max-w-[80%] rounded-lg px-4 py-2',
                message.role === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted'
              )}
            >
              <p className="text-sm">{message.content}</p>
              <p className="text-xs opacity-50 mt-1">
                {message.timestamp.toLocaleTimeString('pt-BR', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-2 border-t bg-card">
        <div className="flex flex-wrap gap-2">
          {suggestedActions.map((action) => (
            <Button
              key={action}
              variant="outline"
              size="sm"
              className="text-xs"
              onClick={() => setInputValue(action)}
            >
              {action}
            </Button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t bg-card">
        <div className="flex gap-2">
          <Input
            placeholder="Digite sua mensagem..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
            className="flex-1"
          />
          <Button size="icon" variant="ghost">
            <Mic className="h-5 w-5" />
          </Button>
          <Button size="icon" onClick={handleSend}>
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
