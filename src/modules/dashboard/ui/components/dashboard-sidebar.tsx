"use client"

import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-context-menu";
import { BotIcon, StarIcon, VideoIcon } from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DashboardUserButton } from "./dashboard-user-button";

const firstSection =[{
    icon:VideoIcon,
    label:"Meetings",
    href:"/meetings"
},{
    icon:BotIcon,
    label:"Agents",
    href:"/agents"
}
];

const secondSection =[{
    icon:StarIcon,
    label:"Upgrade",
    href:"/upgrade"
}
];

export const DashboardSidebar = () => {

    const pathname = usePathname();
    
    return (
        <Sidebar>
            <SidebarHeader className="text-sidebar-accent-foreground">
                <Link href="/" className="flex items-center gap-2 px-2 pt-2 ">
                <Image src="/logo.svg" height={36} width={36} alt="Interview.ai" />
                <p className="text 2xl font-semibold">Interview.ai</p>
                </Link>
            </SidebarHeader>
            <div className="px-4 py-2">
                <Separator className="border-t border-[#3D52A0] dark:border-[#EDE8F5] opacity-100"/>

            </div>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {firstSection.map((item) => (
                                <SidebarMenuItem key={item.href}>
                                    <SidebarMenuButton asChild className={cn("h-10 border border-transparent hover:border/10 from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar/50",
                                        pathname === item.href && "bg-linear-to-r/oklch border-[#5D6B68]/10"
                                        )} isActive={pathname === item.href}>
                                        <Link href={item.href}>
                                        <item.icon className="size-5" />
                                        <span className="text-sm font-medium tracking-tight ">{item.label}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <div className="px-4 py-2">
                <Separator className="border-t border-[#3D52A0] dark:border-[#EDE8F5] opacity-100"/>

            </div>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {secondSection.map((item) => (
                                <SidebarMenuItem key={item.href}>
                                    <SidebarMenuButton asChild className={cn("h-10 border border-transparent hover:border/10 from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar/50",
                                        pathname === item.href && "bg-linear-to-r/oklch border-[#5D6B68]/10"
                                        )} isActive={pathname === item.href}>
                                        <Link href={item.href}>
                                        <item.icon className="size-5" />
                                        <span className="text-sm font-medium tracking-tight ">{item.label}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <DashboardUserButton/>
            </SidebarFooter>
        </Sidebar>
    )
        
}