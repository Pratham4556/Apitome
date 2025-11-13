import { create } from "zustand";
import { persist,createJSONStorage } from "zustand/middleware";


interface SidebarOption{
    name: string
  icon: string
}

interface SidebarStore{
    selectedOption:string,
    options:SidebarOption[],
    setSelectedOption: (option: string) => void
  setOptions: (options: SidebarOption[]) => void
  isSelected: (optionName: string) => boolean
}
const useSideBarStore=create<SidebarStore>()(
    persist(
        (set,get)=>({
            selectedOption:"Overview",
            options:[],
            setSelectedOption:(option:string)=>set({selectedOption:option}),
            setOptions:(options:SidebarOption[])=>set({options}),
            isSelected:(optionName:string)=>{
                const{selectedOption}=get()
                return selectedOption===optionName
            }
        }),{
            name:"Sidebar-Store",
            storage:createJSONStorage(()=>localStorage),
            partialize:(state)=>({selectedOption:state.selectedOption})
        }
    )
)
export default useSideBarStore