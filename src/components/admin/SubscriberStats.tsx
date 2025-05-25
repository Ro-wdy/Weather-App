import React from 'react';
import { Subscriber, UserType } from '../../types';
import Card, { CardHeader, CardContent } from '../common/Card';
import { Users, Radio, Tractor, Server, Users2 } from 'lucide-react';

interface SubscriberStatsProps {
  subscribers: Subscriber[];
}

const SubscriberStats: React.FC<SubscriberStatsProps> = ({ subscribers }) => {
  // Count subscribers by type
  const countByType = subscribers.reduce((acc, subscriber) => {
    const { userType } = subscriber;
    acc[userType] = (acc[userType] || 0) + 1;
    return acc;
  }, {} as Record<UserType, number>);
  
  const statCards = [
    {
      title: 'Total Subscribers',
      count: subscribers.length,
      icon: <Users className="h-8 w-8 text-purple-600" />,
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Pilots',
      count: countByType['Pilot'] || 0,
      icon: <Radio className="h-8 w-8 text-blue-600" />,
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Farmers',
      count: countByType['Farmer'] || 0,
      icon: <Tractor className="h-8 w-8 text-green-600" />,
      bgColor: 'bg-green-50'
    },
    {
      title: 'Telecom Operators',
      count: countByType['Telecom Operator'] || 0,
      icon: <Server className="h-8 w-8 text-orange-600" />,
      bgColor: 'bg-orange-50'
    },
    {
      title: 'General Public',
      count: countByType['General Public'] || 0,
      icon: <Users2 className="h-8 w-8 text-gray-600" />,
      bgColor: 'bg-gray-50'
    }
  ];
  
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-semibold">Subscriber Statistics</h2>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {statCards.map((stat) => (
            <div 
              key={stat.title}
              className={`${stat.bgColor} rounded-lg p-4 flex flex-col items-center justify-center`}
            >
              <div className="mb-2">{stat.icon}</div>
              <h3 className="text-sm font-medium text-gray-600">{stat.title}</h3>
              <p className="text-2xl font-bold">{stat.count}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SubscriberStats;