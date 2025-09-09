import { Car, columns } from "./components/columns";
import DataTable from "./components/data-table";
import { fetchFleet } from "./services/fleet.service";

const FleetPage = async () => {
  const data = await fetchFleet();
  console.log(data)
  return (
    <>
      <DataTable<Car, unknown> columns={columns} data={data}/>
    </>
  );
};

export default FleetPage;
