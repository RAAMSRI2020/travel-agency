import {Header} from "../../../components";

const Dashboard = () => {
    const user={name:'Sriraam'}
    return (
        <main className='dashboard wrapper'>
            <Header
                title={`Welcome ${user?.name}`}
                description="Track activity, trends and popular destinations in real time"
            />
            dashboard page contents
        </main>


    )
}
export default Dashboard
