export interface Metric {
  label: string;
  value: string;
  status: 'good' | 'critical' | 'warning' | 'neutral';
  trend?: string;
  icon?: any;
}

export interface ChartData {
  name: string;
  value: number;
  fill?: string;
}

export interface RoadmapStep {
  day: string;
  title: string;
  description: string;
  actionItem?: string;
}

export interface TechnicalIssue {
  issue: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  finding: string;
  fix: string;
}