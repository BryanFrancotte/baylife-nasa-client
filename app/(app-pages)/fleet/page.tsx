import { Car, columns } from "./components/columns";
import DataTable from "./components/data-table";

const data: Car[] = [
  {
    id: "1",
    brand: "Gallivanter",
    model: "Baller-STX",
    plate: "EBJ 284",
    seating: 4,
    storage: 70,
    location: "Garage NASA"
  },
  {
    id: "2",
    brand: "Gallivanter",
    model: "Baller-STX",
    plate: "JES 362",
    seating: 4,
    storage: 70,
    location: "Garage NASA"
  },
  {
    id: "3",
    brand: "Gallivanter",
    model: "Baller-STX",
    plate: "MQO 240",
    seating: 4,
    storage: 70,
    location: "Garage NASA"
  },
  {
    id: "4",
    brand: "Gallivanter",
    model: "Baller-STX",
    plate: "MUR 211",
    seating: 4,
    storage: 70,
    location: "Garage NASA"
  },
  {
    id: "5",
    brand: "Benefactor",
    model: "Imperial",
    plate: "CWL 433",
    seating: 4,
    storage: 160,
    location: "Garage NASA"
  }
]

const FleetPage = () => {
  return (
    <>
      <DataTable<Car, unknown> columns={columns} data={data}/>
    </>
  );
};

export default FleetPage;
