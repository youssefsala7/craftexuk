import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';

const countryData = [
  { name: 'United Kingdom', ctr: 0.42, fill: '#94a3b8' }, // Slate 400
  { name: 'India', ctr: 6.43, fill: '#3b82f6' }, // Blue 500
  { name: 'UAE', ctr: 12.58, fill: '#2563eb' }, // Blue 600
];

export const InternationalCTRChart: React.FC = () => {
  return (
    <div className="h-[300px] w-full bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-6 text-center">
        Global Click-Through Rate Anomaly
      </h4>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={countryData}
          margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{fill: '#64748b', fontSize: 12, fontWeight: 600}} 
            dy={10}
          />
          <Tooltip 
             cursor={{fill: '#f8fafc'}}
             contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
             formatter={(value: number) => [`${value}%`, 'Click Through Rate']}
          />
          <Bar dataKey="ctr" radius={[4, 4, 0, 0]} barSize={60}>
             {countryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
             ))}
             <LabelList dataKey="ctr" position="top" formatter={(val: number) => `${val}%`} style={{ fill: '#64748b', fontSize: 12, fontWeight: 'bold' }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="text-center mt-[-20px]">
        <span className="text-[10px] text-slate-400 font-medium">Data Source: Q4 Search Console Audit</span>
      </div>
    </div>
  );
};

export const EfficiencyBarChart: React.FC = () => {
    return (
        <div className="space-y-8 my-8 font-sans">
            {/* Current State */}
            <div>
                <div className="flex justify-between text-sm font-bold text-slate-700 mb-2">
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                        Current Click Efficiency (0.6%)
                    </span>
                    <span className="font-mono text-rose-600">659 Clicks</span>
                </div>
                <div className="h-6 bg-slate-100 rounded-lg overflow-hidden border border-slate-200 relative">
                    <div className="h-full bg-rose-500 w-[20%] relative group cursor-help transition-all duration-500 hover:brightness-110">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-20"></div>
                    </div>
                </div>
                <div className="text-right text-xs text-rose-600 mt-2 font-medium flex justify-end items-center gap-1">
                    You are here (Failing)
                </div>
            </div>

            {/* Goal State */}
            <div>
                <div className="flex justify-between text-sm font-bold text-slate-700 mb-2">
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                        Industry Standard Efficiency (2.5%)
                    </span>
                    <span className="font-mono text-emerald-600">~2,700 Clicks</span>
                </div>
                <div className="h-6 bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                    <div className="h-full bg-emerald-600 w-[80%] relative group cursor-help transition-all duration-500 hover:brightness-110">
                         <div className="absolute right-0 top-0 bottom-0 w-px bg-white/30"></div>
                         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-10"></div>
                    </div>
                </div>
                <div className="text-right text-xs text-emerald-600 mt-2 font-medium">Revenue Goal (Achievable with Copywriting & Technical fixes)</div>
            </div>
        </div>
    );
};