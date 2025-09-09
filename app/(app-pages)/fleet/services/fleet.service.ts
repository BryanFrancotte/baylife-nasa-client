import httpService from "@/app/modules/shared/services/http.service";
import { CarResponse } from "../models/car-response.model";

// Why not working with this ?
// interface Response {
//   cars: CarResponse[]
// }

const fetchFleet = async(): Promise<CarResponse[]> => {
  const response = await httpService.get<CarResponse[]>('/fleet');
  return response;
}

export { fetchFleet };