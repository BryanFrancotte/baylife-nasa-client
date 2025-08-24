import { Button } from "@/app/modules/shared/shadcn/components/ui/button";
import { Car, CarFront } from "lucide-react";

const FleetPage = () => {
  return (
    <>
      <Button>
        test
        <Car />
      </Button>
      <Button>
        test
        <CarFront />
      </Button>
    </>
  );
};

export default FleetPage;
