import React, { useState } from 'react';
import { Satellite } from 'lucide-react';
import { SubscriptionForm, Card, CardHeader, CardContent, CardFooter } from '../components';
import { UserType } from '../types';

const SubscriptionPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (data: {
    phoneNumber: string;
    email: string;
    region?: string;
    userType: UserType;
  }) => {
    // Here you would usually send this data to your backend
    console.log('Subscription data:', data);
    
    // Show success message
    setIsSubmitted(true);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center">
            <Satellite className="h-12 w-12 text-purple-600" />
          </div>
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900">
            Subscribe to Space Weather Alerts
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Get timely SMS notifications about solar flares, geomagnetic storms, 
            and other space weather events that may impact communications and technology.
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <h2 className="text-lg font-medium text-gray-900">Your Information</h2>
          </CardHeader>
          
          <CardContent>
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-3 text-lg font-medium text-gray-900">Subscription Successful!</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Thank you! You'll receive SMS alerts when space weather events occur.
                </p>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm text-purple-600 hover:text-purple-500"
                  >
                    Subscribe another number
                  </button>
                </div>
              </div>
            ) : (
              <SubscriptionForm onSubmit={handleSubmit} />
            )}
          </CardContent>
          
          <CardFooter>
            <p className="text-xs text-gray-500">
              By subscribing, you agree to receive SMS notifications about space weather events. 
              Standard message and data rates may apply. You can unsubscribe at any time.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SubscriptionPage;