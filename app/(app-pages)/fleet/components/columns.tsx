import { ColumnDef } from "@tanstack/react-table";

export type Car = {
  id: string;
  brand: string;
  model: string;
  plate: string;
  seating: number;
  storage: number;
  location: string;
};

export const columns: ColumnDef<Car>[] = [
  {
    accessorKey: "brand",
    header: "Marque"
  },
  {
    accessorKey: "model",
    header: "Model"
  },
  {
    accessorKey: "plate",
    header: "Immatriculation"
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
