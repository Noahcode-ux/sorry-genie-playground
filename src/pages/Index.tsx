import HeroSection from "@/components/HeroSection";
import ApologyCard from "@/components/ApologyCard";
import PromiseSection from "@/components/PromiseSection";
import apologyNote from "@/assets/apology-note.jpg";

const Index = () => {
  const apologies = [
    {
      name: "Sarah M.",
      message: "I'm sorry for talking during your lesson about fractions. I know it was disruptive and I should have raised my hand instead.",
    },
    {
      name: "Mike T.",
      message: "Sorry for not turning in my homework on time. I promise to be more organized and ask for help when I need it.",
    },
    {
      name: "Emma K.",
      message: "I apologize for being rude when you asked me to put my phone away. You were just trying to help me focus.",
    },
    {
      name: "Josh L.",
      message: "I'm sorry for making jokes during the test. I know it wasn't fair to other students who were trying to concentrate.",
    },
    {
      name: "Maya P.",
      message: "Sorry for arguing back when you corrected my behavior. I should have listened and learned from your guidance.",
    },
    {
      name: "Alex R.",
      message: "I apologize for not participating in group work. I know my classmates were counting on me and I let them down.",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      {/* Apology Messages Section */}
      <section className="py-16 px-6 bg-gradient-gentle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Personal Apologies from Your Students
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each of us wants to take responsibility for our actions and express how sorry we truly are.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apologies.map((apology, index) => (
              <ApologyCard
                key={index}
                studentName={apology.name}
                message={apology.message}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      <PromiseSection />

      {/* Final Message Section */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src={apologyNote} 
              alt="Handwritten apology note" 
              className="w-64 h-64 mx-auto rounded-lg shadow-card object-cover"
            />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Thank You for Being Patient With Us
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
            We know being a teacher isn't easy, especially when students like us make mistakes. 
            Thank you for not giving up on us and for always believing we can do better. 
            We promise to make you proud and show you the respect you deserve.
          </p>
          
          <div className="text-2xl font-semibold bg-gradient-warm bg-clip-text text-transparent">
            From your Grade 7 Class ❤️
          </div>
          
          <div className="mt-8 text-sm text-muted-foreground">
            P.S. We really do appreciate everything you do for us!
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
