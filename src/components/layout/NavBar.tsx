import React from 'react';
import { Satellite, Home, Bell, Settings, LogOut } from 'lucide-react';
import Button from '../common/Button';

interface NavBarProps {
  isAdmin: boolean;
  currentPage: string;
  onNavigate: (page: string) => void;
  onLogout?: () => void;
}

const NavBar: React.FC<NavBarProps> = ({
  isAdmin,
  currentPage,
  onNavigate,
  onLogout
}) => {
  return (
    <nav className="bg-purple-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Satellite className="h-8 w-8 mr-2" />
            <span className="font-bold text-xl">Space Weather Alerts</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onNavigate('home')}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                currentPage === 'home' 
                  ? 'bg-purple-900 text-white' 
                  : 'text-purple-100 hover:bg-purple-700'
              }`}
            >
              <Home className="h-5 w-5 mr-1" />
              <span className="hidden sm:inline">Home</span>
            </button>
            
            <button
              onClick={() => onNavigate('alerts')}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                currentPage === 'alerts' 
                  ? 'bg-purple-900 text-white' 
                  : 'text-purple-100 hover:bg-purple-700'
              }`}
            >
              <Bell className="h-5 w-5 mr-1" />
              <span className="hidden sm:inline">Alerts</span>
            </button>
            
            <button
              onClick={() => onNavigate('admin')}
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                currentPage === 'admin' 
                  ? 'bg-purple-900 text-white' 
                  : 'text-purple-100 hover:bg-purple-700'
              }`}
            >
              <Settings className="h-5 w-5 mr-1" />
              <span className="hidden sm:inline">Admin</span>
            </button>
            
            {isAdmin && onLogout && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={onLogout}
                className="border-purple-300 text-purple-100 hover:bg-purple-700"
              >
                <LogOut className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;