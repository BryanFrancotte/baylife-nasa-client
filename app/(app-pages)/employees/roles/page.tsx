import { columns, Role } from "./components/columns";
import DataTable from "./components/data-table";

const data: Role[] = [
  {
    id: "0",
    order: 0,
    name: "Dev",
    permission: "Admin",
    percentage: 100,
  },
  {
    id: "1",
    order: 1,
    name: "Administrateur Général",
    permission: "Coordinator",
    percentage: 100,
  },
  {
    id: "2",
    order: 2,
    name: "Coordinateur Général",
    permission: "Coordinator",
    percentage: 100,
  },
  {
    id: "3",
    order: 3,
    name: "Directeur Ressources Humaines",
    permission: "Coordinator",
    percentage: 100,
  },
  {
    id: "4",
    order: 4,
    name: "Administrateur Service",
    permission: "Employee",
    percentage: 85,
  },
  {
    id: "5",
    order: 5,
    name: "Cercle Administratif",
    permission: "Consultant",
    percentage: 70,
  },
  {
    id: "6",
    order: 6,
    name: "Consultant",
    permission: "Consultant",
    percentage: 0,
  },
];

const RolePage = () => {
  return(
    <>
      <DataTable<Role, unknown> columns={columns} data={data} ></DataTable>
    </>
  )
};

export default RolePage;
