import { Card } from "@/components/ui/card";

const PromiseSection = () => {
  const promises = [
    {
      title: "Listen Better",
      description: "We promise to pay attention when you're teaching and not talk over you.",
      icon: "👂"
    },
    {
      title: "Be Respectful",
      description: "We will treat you and our classmates with kindness and respect.",
      icon: "🤝"
    },
    {
      title: "Follow Rules",
      description: "We understand the classroom rules are there to help everyone learn.",
      icon: "📏"
    },
    {
      title: "Help Each Other",
      description: "We will support our classmates and work together as a team.",
      icon: "💪"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Promise to You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We commit to being better students and creating a positive learning environment for everyone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promises.map((promise, index) => (
            <Card 
              key={index}
              className="p-6 text-center bg-gradient-card shadow-card hover:shadow-soft transition-smooth transform hover:-translate-y-1 border-border"
            >
              <div className="text-4xl mb-4">{promise.icon}</div>
              <h3 className="font-semibold text-foreground mb-3">
                {promise.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {promise.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;