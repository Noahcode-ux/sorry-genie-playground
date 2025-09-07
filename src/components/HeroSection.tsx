import heroImage from "@/assets/hero-classroom.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-gentle opacity-90" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          We Are
          <span className="bg-gradient-warm bg-clip-text text-transparent"> Sorry</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
          Dear Teacher, our Grade 7 class wants to sincerely apologize for our behavior. 
          We know we can do better, and we promise to show more respect and kindness.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-warm hover:opacity-90 text-primary-foreground px-8 py-3 rounded-full transition-smooth shadow-soft"
          >
            Read Our Apologies
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-warm-primary text-warm-primary hover:bg-warm-primary hover:text-primary-foreground px-8 py-3 rounded-full transition-smooth"
          >
            Our Promise
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;