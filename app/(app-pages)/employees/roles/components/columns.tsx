"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Role = {
  id: string;
  order: number;
  name: string;
  permission: string;
  percentage: number;
};

export const columns: ColumnDef<Role>[] = [
  {
    accessorKey: "order",
    header: "Ordre",
  },
  {
    accessorKey: "name",
    header: "Nom",
  },
  {
    accessorKey: "permission",
    header: "Permission"
  },
  {
    accessorKey: "percentage",
    header: "Poucentage"
  }
]