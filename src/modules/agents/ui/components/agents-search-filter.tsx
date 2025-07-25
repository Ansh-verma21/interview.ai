import { SearchIcon } from "lucide-react";
import { useAgentsFilters } from "../../hooks/use-agents-filters";
import { Input } from "@/components/ui/input";

export const AgentsSearchFilters=()=>{
    const [filters,setfilters]=useAgentsFilters()

    return(
        <div className="relative ">
            <Input placeholder="Filter by name" className="h-9 bg-white w-[200px] pl-7" value={filters.search} onChange={(e)=>setfilters({search:e.target.value})}/>
            <SearchIcon className="size-4 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground"/>
        </div>
    )
}