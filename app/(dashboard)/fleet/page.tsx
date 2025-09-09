import { Car, columns } from "./components/columns";
import DataTable from "./components/data-table";

const data: Car[] = [
  {
    id: "1",
    order: 1,
    vehicleType: "Gallivanter Baller-STX",
    plate: "EBJ 284",
    mileage: 12000,
    seating: 4,
    storage: 70,
    location: "Garage NASA",
  },
];

const FleetPage = () => {
  return (
    <>
      <DataTable<Car, unknown> columns={columns} data={data} />
    </>
  );
};

export default FleetPage;


