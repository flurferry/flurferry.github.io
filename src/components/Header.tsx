import { Button } from "@/components/ui/button";
import { ShoppingBag, User, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/1bd6e70f-5d78-4265-8702-dbd0316347e4.png" 
              alt="Flurferry Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#clothing" className="text-foreground hover:text-primary transition-colors">
              Clothing
            </a>
            <a href="#blankets" className="text-foreground hover:text-primary transition-colors">
              Blankets
            </a>
            <a href="#furniture" className="text-foreground hover:text-primary transition-colors">
              Furniture
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Admin</span>
            </Button>
            <Button variant="outline" size="sm">
              <ShoppingBag className="h-4 w-4" />
              <span className="hidden sm:inline">Cart (0)</span>
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;