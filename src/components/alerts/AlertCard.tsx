import React from 'react';
import { AlertBadge } from '../common';
import { Alert } from '../../types';

interface AlertCardProps {
  alert: Alert;
}

const AlertCard: React.FC<AlertCardProps> = ({ alert }) => {
  const { severity, message, timestamp, targetAudience } = alert;
  
  // Format the timestamp
  const formattedDate = new Date(timestamp).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  });
  
  // Set border color based on severity
  const borderColorClass = {
    Critical: 'border-l-4 border-red-500',
    Warning: 'border-l-4 border-orange-500',
    Watch: 'border-l-4 border-yellow-500'
  }[severity];
  
  return (
    <div className={`bg-white rounded-lg shadow-sm p-4 mb-4 ${borderColorClass}`}>
      <div className="flex justify-between items-start mb-2">
        <AlertBadge severity={severity} />
        <span className="text-xs text-gray-500">{formattedDate}</span>
      </div>
      
      <p className="text-gray-800 mb-2">{message}</p>
      
      <div className="text-xs text-gray-600">
        Target: {Array.isArray(targetAudience) 
          ? targetAudience.join(', ') 
          : targetAudience}
      </div>
    </div>
  );
};

export default AlertCard;