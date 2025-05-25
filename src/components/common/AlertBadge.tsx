import React from 'react';
import { AlertSeverity } from '../../types';

interface AlertBadgeProps {
  severity: AlertSeverity;
  className?: string;
}

const AlertBadge: React.FC<AlertBadgeProps> = ({ severity, className }) => {
  const baseStyles = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium';
  
  const severityStyles = {
    Critical: 'bg-red-100 text-red-800',
    Warning: 'bg-orange-100 text-orange-800',
    Watch: 'bg-yellow-100 text-yellow-800'
  };
  
  const severityIcons = {
    Critical: '⚠️',
    Warning: '🟠',
    Watch: '🟡'
  };
  
  return (
    <span className={`${baseStyles} ${severityStyles[severity]} ${className}`}>
      <span className="mr-1">{severityIcons[severity]}</span>
      {severity}
    </span>
  );
};

export default AlertBadge;