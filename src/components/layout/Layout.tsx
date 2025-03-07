
import React from 'react';
import Sidebar from './Sidebar';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen max-h-screen w-full flex-col lg:flex-row overflow-hidden bg-background">
      <Sidebar />
      <main className="flex-1 flex flex-col h-full w-full overflow-hidden">
        <div className="p-3 md:p-4 flex justify-end border-b">
          {user && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleLogout}
              className="flex items-center gap-2 micro-bounce"
            >
              <LogOut size={16} />
              <span className="hidden md:inline">Sair</span>
            </Button>
          )}
        </div>
        <div className="flex-1 overflow-auto w-full relative p-4 md:p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
