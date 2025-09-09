import { fetchRoles } from "../services/role.service";
import { columns, Role } from "./components/columns";
import DataTable from "./components/data-table";

const RolePage = async () => {
  const data = await fetchRoles();
  return(
    <>
      <DataTable<Role, unknown> columns={columns} data={data} ></DataTable>
    </>
  )
};

export default RolePage;
