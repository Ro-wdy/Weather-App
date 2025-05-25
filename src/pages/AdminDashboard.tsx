import React, { useState } from 'react';
import { Card, CardHeader, CardContent, SubscriberStats, AlertForm, SubscriberTable } from '../components';
import { Alert, Subscriber, AlertSeverity, UserType } from '../types';
import { mockSubscribers, mockAlerts } from '../utils/mockData';

const AdminDashboard: React.FC = () => {
  const [subscribers] = useState<Subscriber[]>(mockSubscribers);
  const [alerts, setAlerts] = useState<Alert[]>(mockAlerts);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'subscribers' | 'alerts'>('dashboard');
  
  const handleSendAlert = (data: {
    severity: AlertSeverity;
    message: string;
    targetAudience: UserType[] | 'All';
  }) => {
    const newAlert: Alert = {
      id: `alert-${Date.now()}`,
      severity: data.severity,
      message: data.message,
      timestamp: new Date().toISOString(),
      targetAudience: data.targetAudience
    };
    
    // Add new alert to the beginning of the list
    setAlerts([newAlert, ...alerts]);
    
    // Show notification
    alert(`Alert sent successfully to ${
      data.targetAudience === 'All' 
        ? 'all subscribers' 
        : data.targetAudience.join(', ')
    }`);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">System Owner Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Manage subscribers, send alerts, and monitor system performance.
          </p>
        </div>
        
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`${
                  activeTab === 'dashboard'
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('subscribers')}
                className={`${
                  activeTab === 'subscribers'
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Subscribers
              </button>
              <button
                onClick={() => setActiveTab('alerts')}
                className={`${
                  activeTab === 'alerts'
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Send Alerts
              </button>
            </nav>
          </div>
        </div>
        
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <SubscriberStats subscribers={subscribers} />
            
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold">Recent Alerts</h2>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Message
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Recipients
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Timestamp
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {alerts.slice(0, 5).map((alert) => (
                        <tr key={alert.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                              ${alert.severity === 'Critical' ? 'bg-red-100 text-red-800' : 
                                alert.severity === 'Warning' ? 'bg-orange-100 text-orange-800' : 
                                'bg-yellow-100 text-yellow-800'}`}>
                              {alert.severity}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {alert.message.length > 50 
                              ? `${alert.message.substring(0, 50)}...` 
                              : alert.message}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {Array.isArray(alert.targetAudience) 
                              ? alert.targetAudience.join(', ') 
                              : alert.targetAudience}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(alert.timestamp).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold">System Health</h2>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="rounded-full h-3 w-3 bg-green-500 mr-2"></div>
                      <h3 className="text-sm font-medium text-green-800">Space Weather API</h3>
                    </div>
                    <p className="mt-1 text-sm text-green-700">Operational</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="rounded-full h-3 w-3 bg-green-500 mr-2"></div>
                      <h3 className="text-sm font-medium text-green-800">Africa's Talking SMS API</h3>
                    </div>
                    <p className="mt-1 text-sm text-green-700">Operational</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
        
        {activeTab === 'subscribers' && (
          <div>
            <SubscriberTable subscribers={subscribers} />
          </div>
        )}
        
        {activeTab === 'alerts' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold">Send New Alert</h2>
              </CardHeader>
              <CardContent>
                <AlertForm onSubmit={handleSendAlert} />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold">Alert Templates</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-md p-3 hover:bg-gray-50 cursor-pointer">
                    <h3 className="font-medium text-gray-900">Critical Solar Flare</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Critical Alert: X-class solar flare detected. Potential impact on HF communications and GPS accuracy in the next 24-48 hours.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-md p-3 hover:bg-gray-50 cursor-pointer">
                    <h3 className="font-medium text-gray-900">Geomagnetic Storm Warning</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Warning: G3 geomagnetic storm in progress. Expect communications and navigation systems disruptions. Avoid reliance on GPS for critical operations.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-md p-3 hover:bg-gray-50 cursor-pointer">
                    <h3 className="font-medium text-gray-900">Moderate Radio Blackout</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Watch: R2 radio blackout conditions possible. HF radio may experience intermittent outages on daylight side of Earth.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;