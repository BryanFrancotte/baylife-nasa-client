"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "../shadcn/components/ui/sidebar";
import VersionSwitcher from "./version-switcher";
import NavMain from "./nav-main";
import NavUser from "./nav-user";
import {
  BadgeDollarSign,
  Banknote,
  BookOpen,
  Calendar,
  Car,
  LayoutDashboard,
  PencilRuler,
  Users,
} from "lucide-react";
import NavTools from "./nav-tools";

const data = {
  user: {
    name: "Jean Legrand",
    role: "Coordinateur/DRH",
    avatar: "/avatars/shadcn.jpeg",
  },
  versions: [
    {
      name: "pre-alpha",
      logo: "/logo/nasa.svg",
    },
    {
      name: "alpha",
      logo: "/logo/nasa-axiom-logo.svg",
    },
    {
      name: "pre-beta",
      logo: "/logo/nasa-odyssey-logo.svg",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      items: [
        {
          title: "Overview",
          url: "/dashboard",
        },
        {
          title: "Finance",
          url: "#",
        },
        {
          title: "Logistique",
          url: "#",
        },
      ],
    },
    {
      title: "Employees",
      url: "#",
      icon: Users,
      items: [
        {
          title: "Liste",
          url: "/employees",
        },
        {
          title: "Roles",
          url: "/employees/roles",
        },
        {
          title: "Suivi",
          url: "#",
        },
      ],
    },
    {
      title: "Agenda",
      url: "#",
      icon: Calendar,
      items: [
        {
          title: "Voyage",
          url: "#",
        },
        {
          title: "Events",
          url: "#",
        },
      ],
    },
    {
      title: "Flotte",
      url: "#",
      icon: Car,
      items: [
        {
          title: "Liste",
          url: "/fleet",
        },
        {
          title: "Suivit",
          url: "#",
        },
        {
          title: "Entretien",
          url: "#",
        },
        {
          title: "Attribution",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Pôle Voyage",
          url: "#",
        },
        {
          title: "Pôle Events & Commercial",
          url: "#",
        },
        {
          title: "Pôle Logistique",
          url: "#",
        },
      ],
    },
  ],
  navTools: [
    {
      name: "Calculatrice Bilan Financier",
      url: "#",
      icon: BadgeDollarSign,
    },
    {
      name: "Calculatrice Primes",
      url: "#",
      icon: Banknote,
    },
    {
      name: "Calculatrice Stock Nasa",
      url: "#",
      icon: PencilRuler,
    },
  ],
};

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
      </SidebarHeader>
      <SidebarContent>
        <NavMain navItems={data.navMain} />
        <NavTools toolsItems={data.navTools} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
