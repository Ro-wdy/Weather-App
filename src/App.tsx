import React, { useState } from 'react';
import { HomePage, SubscriptionPage, AlertDashboard, AdminDashboard, LoginPage } from './pages';
import { NavBar } from './components';

function App() {
  // State for current page and authentication
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  
  // Handle navigation between pages
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    
    // If trying to access admin page, check authentication
    if (page === 'admin' && !isAuthenticated) {
      setCurrentPage('login');
    }
  };
  
  // Handle admin login
  const handleLogin = (password: string) => {
    // In a real app, this would validate against a backend
    if (password) {
      setIsAuthenticated(true);
      setCurrentPage('admin');
    }
  };
  
  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('home');
  };
  
  // Render the appropriate page based on currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'subscribe':
        return <SubscriptionPage />;
      case 'alerts':
        return <AlertDashboard />;
      case 'admin':
        return isAuthenticated ? <AdminDashboard /> : <LoginPage onLogin={handleLogin} />;
      case 'login':
        return <LoginPage onLogin={handleLogin} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };
  
  // Only show NavBar on pages that aren't login or subscribe
  const showNavBar = !['login', 'subscribe'].includes(currentPage);
  
  return (
    <div className="min-h-screen flex flex-col">
      {showNavBar && (
        <NavBar 
          isAdmin={isAuthenticated} 
          currentPage={currentPage} 
          onNavigate={handleNavigate}
          onLogout={handleLogout}
        />
      )}
      <main className="flex-grow">
        {renderPage()}
      </main>
      <footer className="bg-purple-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">© 2025 Space Weather Alert System</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-purple-200 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-purple-200 hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-purple-200 hover:text-white">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;