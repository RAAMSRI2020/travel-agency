// @ts-nocheck
import  {SidebarComponent} from "@syncfusion/ej2-react-navigations";
import {NavItems} from "./index";

const MobileSidebar = () => {
    let sidebar:SidebarComponent
    const toggleSidebar = ()=>{sidebar.toggle()}
    return (
        <div className='mobile-sidebar wrapper'>
            <header>
                <img
                src="/assets/icons/logo.svg"
                alt="Logo"
                className='size-[30px]'
                />
                <h1>TourVisto</h1>
                <button onClick={toggleSidebar}>
                    <img src="/assets/icons/menu.svg" alt="Menu" className="size-7"/>
                </button>
            </header>

            <SidebarComponent
                width={270}
                ref={(Sidebar)=>sidebar=Sidebar}
                created={()=>sidebar.hide()}
                closeOnDocumentClick={true}
                showBackdrop={true}
                type='over'
            >
                <NavItems handleClick={toggleSidebar}/>
            </SidebarComponent>
        </div>
    )
}
export default MobileSidebar
