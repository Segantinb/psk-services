import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function GetStartedButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <Button 
      onClick={handleClick}
      className="bg-[#FFC800] hover:bg-[#FFD700] text-black font-gelada uppercase px-8" 
      size="lg"
    >
      Inscreva-se agora
    </Button>
  );
}

