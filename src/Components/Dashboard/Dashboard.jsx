import React from 'react'
// Components
import Card from './components/Card';
import PerformanceChart from './charts/PerformanceChart'
import ProjectsChart from './charts/ProjectsChart'
import TableOfEmployees from './workersTable/TableOfEmployees';
// Icons
import { CgPerformance } from 'react-icons/cg'
import { IoMdPersonAdd } from 'react-icons/io' 
import { AiFillProject, AiFillMoneyCollect} from 'react-icons/ai'


export default function Dashboard() {
    return (
        <React.Fragment>
            <div className="cards d-flex flex-wrap justify-content-around">
                <Card title="Total Projects" value="250" icon={<AiFillProject/>} increasementPercent="33.3%" time="Since Last Month"/>
                <Card title="New Clients" value="30" icon={<IoMdPersonAdd/>} increasementPercent="40%" time="Since Last Month"/>
                <Card title="Sales" value="150" icon={<AiFillMoneyCollect/>} increasementPercent="50%" time="Since Last Month"/>
                <Card title="Performance" value="200%" icon={<CgPerformance/>} increasementPercent="100%" time="Since Last Month"/>
            </div>
            <div className="charts d-flex flex-wrap justify-content-around">
                <div>
                    <PerformanceChart/>
                </div>
                <div>
                    <ProjectsChart/>
                </div>
            </div>
            <TableOfEmployees/>
        </React.Fragment>
    )
}
