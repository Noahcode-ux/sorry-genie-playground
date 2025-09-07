import { Card } from "@/components/ui/card";

interface ApologyCardProps {
  studentName: string;
  message: string;
  delay?: number;
}

const ApologyCard = ({ studentName, message, delay = 0 }: ApologyCardProps) => {
  return (
    <Card 
      className="p-6 bg-gradient-card shadow-card hover:shadow-soft transition-smooth transform hover:-translate-y-1 border-border"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-warm rounded-full flex items-center justify-center text-primary-foreground font-semibold">
            {studentName.charAt(0)}
          </div>
          <h3 className="font-semibold text-foreground">{studentName}</h3>
        </div>
        <p className="text-muted-foreground leading-relaxed italic">
          "{message}"
        </p>
        <div className="text-right">
          <span className="text-sm text-warm-primary font-medium">Sorry ❤️</span>
        </div>
      </div>
    </Card>
  );
};

export default ApologyCard;