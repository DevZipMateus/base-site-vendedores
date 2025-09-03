
import CanvasHero from "@/components/CanvasHero";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation to other pages */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        
        
        
      </div>
      
      <CanvasHero />
    </div>
  );
};

export default Index;
