import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';
import { AlertsList, Card, CardHeader, CardContent, Button } from '../components';
import { Alert } from '../types';
import { mockAlerts } from '../utils/mockData';

const AlertDashboard: React.FC = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  
  // Mock data loading effect
  useEffect(() => {
    const loadAlerts = () => {
      setIsLoading(true);
      
      // Simulate API call with setTimeout
      setTimeout(() => {
        setAlerts(mockAlerts);
        setLastUpdated(new Date());
        setIsLoading(false);
      }, 1000);
    };
    
    loadAlerts();
  }, []);
  
  const handleRefresh = () => {
    setIsLoading(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      // Randomly add a new alert sometimes
      if (Math.random() > 0.5) {
        const newAlert: Alert = {
          id: `alert-${Date.now()}`,
          severity: Math.random() > 0.7 ? 'Critical' : Math.random() > 0.5 ? 'Warning' : 'Watch',
          message: `New space weather event detected at ${new Date().toLocaleTimeString()}`,
          timestamp: new Date().toISOString(),
          targetAudience: 'All'
        };
        
        setAlerts([newAlert, ...alerts]);
      }
      
      setLastUpdated(new Date());
      setIsLoading(false);
    }, 1000);
  };
  
  // Separate alerts into latest and history
  const latestAlerts = alerts.slice(0, 5);
  const historyAlerts = alerts.slice(5);
  
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Space Weather Alert Feed</h1>
          <p className="mt-2 text-gray-600">
            Stay informed about the latest space weather events and their potential impacts.
          </p>
        </div>
        
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Last updated: {lastUpdated.toLocaleString()}
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            disabled={isLoading}
            className="flex items-center"
          >
            <RefreshCw className={`h-4 w-4 mr-1 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
        
        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-xl font-semibold">Latest Alerts</h2>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="py-12 flex justify-center">
                <div className="animate-pulse flex flex-col items-center">
                  <div className="rounded-full bg-gray-200 h-12 w-12 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-24 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded w-32"></div>
                </div>
              </div>
            ) : latestAlerts.length > 0 ? (
              <div className="space-y-4">
                {latestAlerts.map((alert) => (
                  <div 
                    key={alert.id}
                    className={`border-l-4 p-4 rounded-r-md ${
                      alert.severity === 'Critical' ? 'border-red-500 bg-red-50' :
                      alert.severity === 'Warning' ? 'border-orange-500 bg-orange-50' :
                      'border-yellow-500 bg-yellow-50'
                    }`}
                  >
                    <div className="flex justify-between">
                      <span className="font-medium">
                        {alert.severity === 'Critical' ? '⚠️ ' :
                         alert.severity === 'Warning' ? '🟠 ' : '🟡 '}
                        {alert.severity} Alert
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(alert.timestamp).toLocaleString()}
                      </span>
                    </div>
                    <p className="mt-1">{alert.message}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center text-gray-500">
                No active alerts at this time.
              </div>
            )}
          </CardContent>
        </Card>
        
        <AlertsList 
          alerts={historyAlerts} 
          title="Alert History" 
          emptyMessage="No previous alerts to display"
        />
      </div>
    </div>
  );
};

export default AlertDashboard;