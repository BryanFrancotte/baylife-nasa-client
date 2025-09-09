"use client";

import { Car, columns } from "./components/columns";
import DataTable from "./components/data-table";
import { useFleet } from "@/features/fleet/hooks/use-fleet";

const FleetPage = () => {
  const { data, isLoading, isError } = useFleet();

  if (isLoading) return <div className="p-4">Loading vehicles...</div>;
  if (isError) return <div className="p-4">Failed to load vehicles.</div>;

  const rows: Car[] = (data?.data || []).map((v: any, idx: number) => ({
    id: v.id ?? String(idx),
    order: v.order ?? idx + 1,
    vehicleType: v.vehicleType ?? v.model ?? "",
    plate: v.plate ?? "",
    mileage: v.mileage ?? 0,
    seating: v.seating ?? 0,
    storage: v.storage ?? 0,
    location: v.location ?? "",
  }));

  return <DataTable<Car, unknown> columns={columns} data={rows} />;
};

export default FleetPage;


