"use client"

import * as React from "react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "../shadcn/components/ui/sidebar";
import VersionSwitcher from "./version-switcher";
import NavMain from "./nav-main";
import NavUser from "./nav-user";
import { BookOpen, Bot, Settings2, SquareTerminal } from "lucide-react";

const data = {
  user: {
    name: "Jean Legrand",
    role: "Coordinateur/DRH",
    avatar: "/avatars/shadcn.jpeg",
  },
  versions: [
    {
      name: "pre-alpha",
      logo:"/logo/nasa.svg"
    },
    {
      name: "alpha",
      logo: "/logo/nasa-axiom-logo.svg"
    },
    {
      name: "pre-beta",
      logo: "/logo/nasa-odyssey-logo.svg"
    }
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
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
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    }
  ]
}

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <VersionSwitcher versions={data.versions} defaultVersion={data.versions[0]}/>
      </SidebarHeader>
      <SidebarContent>
        <NavMain navItems={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

export default AppSidebar;