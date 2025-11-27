import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function GetStartedButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <Button 
      onClick={handleClick}
      className="group relative overflow-hidden bg-[#FFC800] hover:bg-[#FFD700] text-black font-gelada uppercase px-[2.25rem] justify-start" 
      size="lg"
    >
      <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0">
        Inscreva-se agora
      </span>
      <i className="absolute right-1 top-1 bottom-1 rounded-sm z-10 grid w-1/4 place-items-center transition-all duration-500 bg-black/10 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95 text-black">
        <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
      </i>
    </Button>
  );
}

