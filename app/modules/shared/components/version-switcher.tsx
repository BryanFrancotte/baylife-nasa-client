"use client";

import * as React from "react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../shadcn/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../shadcn/components/ui/dropdown-menu";
import { Check, ChevronsUpDown } from "lucide-react";
import Image from "next/image";

const VersionSwitcher = ({
  versions,
  defaultVersion,
}: {
  versions: {
    name: string
    logo: string
  }[];
  defaultVersion: {
    name: string
    logo: string
  };
}) => {
  const [selectedVersion, setSelectedVersion] = React.useState(defaultVersion);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state-open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-10 group-data-[collapsible=icon]:size-8 items-center justify-center rounded-lg">
                <Image src={selectedVersion.logo} width={100} height={100} alt="nasa-logo"/>
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-medium">NASA</span>
                <span className="">v. {selectedVersion.name}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width)"
            align="start"
          >
            {versions.map((version) => (
              <DropdownMenuItem
                key={version.name}
                onSelect={() => setSelectedVersion(version)}
              >
                v {version.name}{" "}
                {version === selectedVersion && <Check className="ml-auto" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default VersionSwitcher;
