import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Ultra Soft Purple Fleece Hoodie",
    price: 89.99,
    originalPrice: 119.99,
    image: "/lovable-uploads/1bd6e70f-5d78-4265-8702-dbd0316347e4.png",
    category: "Clothing",
    rating: 4.8,
    reviews: 124,
    isNew: true
  },
  {
    id: 2,
    name: "Luxury Fluffy Bean Bag Chair",
    price: 299.99,
    originalPrice: 399.99,
    image: "/lovable-uploads/1bd6e70f-5d78-4265-8702-dbd0316347e4.png",
    category: "Furniture",
    rating: 4.9,
    reviews: 89,
    isSale: true
  },
  {
    id: 3,
    name: "Premium Fleece Throw Blanket",
    price: 59.99,
    originalPrice: 79.99,
    image: "/lovable-uploads/1bd6e70f-5d78-4265-8702-dbd0316347e4.png",
    category: "Blankets",
    rating: 4.7,
    reviews: 156,
    isBestseller: true
  },
  {
    id: 4,
    name: "Cozy Sherpa Lounge Pants",
    price: 49.99,
    image: "/lovable-uploads/1bd6e70f-5d78-4265-8702-dbd0316347e4.png",
    category: "Clothing",
    rating: 4.6,
    reviews: 203,
    isNew: false
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular fluffy essentials
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card 
              key={product.id}
              className="group cursor-pointer overflow-hidden border-0 shadow-soft hover:shadow-card transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <div className="aspect-square bg-gradient-card p-8">
                  <div className="w-full h-full bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary/60 text-sm">Product Image</span>
                  </div>
                </div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  {product.isNew && (
                    <Badge className="bg-primary text-primary-foreground">New</Badge>
                  )}
                  {product.isSale && (
                    <Badge className="bg-destructive text-destructive-foreground">Sale</Badge>
                  )}
                  {product.isBestseller && (
                    <Badge className="bg-accent text-accent-foreground">Bestseller</Badge>
                  )}
                </div>
                
                {/* Wishlist */}
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute top-3 right-3 bg-background/80 hover:bg-background"
                >
                  <Heart className="h-4 w-4" />
                </Button>
                
                {/* Quick add to cart */}
                <div className="absolute inset-x-4 bottom-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Button variant="hero" className="w-full">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Quick Add
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
                <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i}
                        className={`text-xs ${i < Math.floor(product.rating) ? 'text-primary' : 'text-muted-foreground'}`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">
                      ({product.reviews})
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-primary">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="fluffy" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;