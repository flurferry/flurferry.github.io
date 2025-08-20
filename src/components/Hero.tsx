import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-beanbag.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Embrace the
          <span className="block bg-gradient-to-r from-primary-glow to-primary-foreground bg-clip-text text-transparent">
            Fluffy Life
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover premium fleece clothing, ultra-soft blankets, and luxuriously fluffy furniture that transforms your space into a cozy haven.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Shop All Products
          </Button>
          <Button variant="fluffy" size="lg" className="text-lg px-8 py-4">
            Browse Categories
          </Button>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-glow/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-16 h-16 bg-primary/30 rounded-full blur-lg animate-pulse delay-1000" />
        <div className="absolute top-40 right-10 w-12 h-12 bg-primary-foreground/20 rounded-full blur-md animate-pulse delay-500" />
      </div>
    </section>
  );
};

export default Hero;