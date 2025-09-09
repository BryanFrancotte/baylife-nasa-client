import httpService from "@/app/modules/shared/services/http.service";
import { RoleResponse } from "../models/role-response.model";

const fetchRoles = async(): Promise<RoleResponse[]> => {
  const response = await httpService.get<RoleResponse[]>("/role");
  return response;
}

export { fetchRoles };