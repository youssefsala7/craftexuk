import React from 'react';
import { Metric } from '../types';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface MetricCardProps {
  metric: Metric;
  highlight?: boolean;
}

export const MetricCard: React.FC<MetricCardProps> = ({ metric, highlight = false }) => {
  const isNegative = metric.status === 'critical' || metric.status === 'warning';
  
  return (
    <div className={`flex-1 p-6 rounded-lg text-center border-2 transition-all duration-300 ${highlight ? 'bg-white border-rose-600 shadow-lg scale-105' : 'bg-slate-50 border-transparent'}`}>
      <span className={`block text-4xl md:text-5xl font-extrabold mb-2 font-sans tracking-tight ${highlight ? 'text-rose-600' : 'text-slate-900'}`}>
        {metric.value}
      </span>
      <span className="block text-xs font-bold uppercase text-slate-500 tracking-wider mb-3">
        {metric.label}
      </span>
      <div className={`flex items-center justify-center gap-1.5 text-xs font-medium ${isNegative ? 'text-rose-600' : 'text-emerald-600'}`}>
        {metric.trend && (
            <>
                {isNegative ? <TrendingDown className="w-3 h-3" /> : <TrendingUp className="w-3 h-3" />}
                {metric.trend}
            </>
        )}
      </div>
    </div>
  );
};