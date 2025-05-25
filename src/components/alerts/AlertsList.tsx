import React from 'react';
import { Alert } from '../../types';
import AlertCard from './AlertCard';

interface AlertsListProps {
  alerts: Alert[];
  title: string;
  emptyMessage?: string;
}

const AlertsList: React.FC<AlertsListProps> = ({ 
  alerts, 
  title, 
  emptyMessage = 'No alerts to display'
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      
      {alerts.length > 0 ? (
        <div className="space-y-3">
          {alerts.map((alert) => (
            <AlertCard key={alert.id} alert={alert} />
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <p className="text-gray-600">{emptyMessage}</p>
        </div>
      )}
    </div>
  );
};

export default AlertsList;