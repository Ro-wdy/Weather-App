import React, { useState } from 'react';
import { Lock } from 'lucide-react';
import { Input, Button, Card, CardHeader, CardContent } from '../components';

interface LoginPageProps {
  onLogin: (password: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!password.trim()) {
      setError('Password is required');
      return;
    }
    
    // In a real app, you would validate against a stored password or use proper auth
    // For demo purposes, we'll use a simple hardcoded password
    if (password === 'admin123') {
      onLogin(password);
    } else {
      setError('Invalid password');
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-purple-100">
            <Lock className="h-6 w-6 text-purple-600" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Admin Access</h2>
          <p className="mt-2 text-sm text-gray-600">
            Please enter the admin password to continue
          </p>
        </div>
        
        <Card className="mt-8">
          <CardContent className="py-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError('');
                  }}
                  error={error}
                  placeholder="Enter admin password"
                  autoComplete="current-password"
                  required
                />
              </div>
              
              <div>
                <Button type="submit" fullWidth>
                  Sign in
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;