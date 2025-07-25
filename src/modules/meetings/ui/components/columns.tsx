"use client"

import { ColumnDef } from "@tanstack/react-table"

import { GeneratedAvatar } from "@/components/generated-avatar"
import { CircleCheckIcon, CircleXIcon, ClockArrowUpIcon, ClockFadingIcon, CornerDownRightIcon, LoaderIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { MeetingGetMany } from "../../types"

import { cn, formatDuration } from "@/lib/utils"
import { format } from "date-fns"



// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.



const statusIconMap={
  upcoming: ClockArrowUpIcon,
  active:LoaderIcon,
  completed: CircleCheckIcon,
  processing: LoaderIcon,
  cancelled: CircleXIcon
}

const statusColorMap={
  upcoming: "bg-yellow-500/20 text-yellow-800 border-yellow-800/5",
  active:"bg-blue-500/20 text-blue-800 border-blue-800/5",
  completed: "bg-green-500/20 text-green-800 border-green-800/5",
  processing: "bg-gray-500/20 text-gray-800 border-gray-800/5",
  cancelled: "bg-rose-300/20 text-rose-800 border-rose-800/5"
}

export const columns: ColumnDef<MeetingGetMany[number]>[] = [
  {
    accessorKey: "name",
    header: "Meeting Name",
    cell:({row})=>(
        <div className="flex flex-col gap-y-1">
          <span className="font-semibold capitalize">{row.original.name}</span>
            
            <div className="flex items-center gap-x-2">
                <div className="flex items-center gap-x-1.5">
                  <div className="flex items-center gap-x-1">
                    <CornerDownRightIcon className="size-3 text-muted-foreground"/>
                    <span className="text-sm text-muted-foreground max-w-[200px] truncate capitalize">{row.original.agent.name}</span>
                </div>
                </div>
                <GeneratedAvatar seed={row.original.agent.name} varient="botttsNeutral" className="size-4"/>
                <span className="text-sm text-muted-foreground">{row.original.startedAt? format(row.original.startedAt,"MMM d"):""}</span>
            </div>
        </div>
    )
  },
  {
    accessorKey:"status",
    header:"Status",
    cell:({row})=>{
      const Icon =statusIconMap[row.original.status as keyof typeof statusIconMap];
      return(
        <Badge variant={"outline"} className={cn(
          "capitalize [&>svg]:size-4 text-muted-foreground",statusColorMap[row.original.status as keyof typeof statusIconMap ]
        )}>
          <Icon className={
          cn(
            row.original.status==="processing" && "animate-spin"
          )}/>
          {row.original.status}
        </Badge>
      )
    },
    
  },
  {
      accessorKey:"duration",
      header:"duration",
      cell:({row})=>(
        <Badge variant={"outline"} className={
          "capitalize [&>svg]:size-4 flex items-center gap-x-2"}>
            <ClockFadingIcon className="text-blue-700"/>
            {row.original.duration?formatDuration(row.original.duration):"No duration"}

        </Badge>
      )
    }
  
]