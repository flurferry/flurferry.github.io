import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import clothingImage from "@/assets/clothing-hero.jpg";
import blanketImage from "@/assets/blanket-hero.jpg";
import furnitureImage from "@/assets/furniture-hero.jpg";

const categories = [
  {
    id: "clothing",
    title: "Fluffy Clothing",
    description: "Cozy fleece jackets, hoodies, and loungewear",
    image: clothingImage,
    count: "24 Products"
  },
  {
    id: "blankets",
    title: "Soft Blankets",
    description: "Ultra-soft throws and luxury bedding",
    image: blanketImage,
    count: "18 Products"
  },
  {
    id: "furniture",
    title: "Fluffy Furniture",
    description: "Bean bags, chairs, and cozy seating",
    image: furnitureImage,
    count: "12 Products"
  }
];

const ProductCategories = () => {
  return (
    <section id="categories" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated collection of premium fluffy products
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card 
              key={category.id}
              className="group cursor-pointer overflow-hidden border-0 shadow-card hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-primary-foreground">
                  <p className="text-sm font-medium opacity-90">{category.count}</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
                <Button variant="fluffy" className="w-full">
                  Explore Collection
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;