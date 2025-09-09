import { ColumnDef } from "@tanstack/react-table";

export type Car = {
  id: string;
  order: number;
  vehicleType: string;
  plate: string;
  mileage: number;
  seating: number;
  storage: number;
  location: string;
};

export const columns: ColumnDef<Car>[] = [
  {
    accessorKey: "vehicleType",
    header: "Model"
  },
  {
    accessorKey: "plate",
    header: "Immatriculation"
  },
  {
    accessorKey: "mileage",
    header: "Kilometrage"
  },
  {
    accessorKey: "seating",
    header: "Nombre de place"
  },
  {
    accessorKey: "storage",
    header: "Nombre de stockage"
  },
  {
    accessorKey: "location",
    header: "Garage"
  }
]
