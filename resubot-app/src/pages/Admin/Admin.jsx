import React from "react";
import './Admin.scss'
import {Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";

const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
];

const data02 = [
    { name: 'Group A', value: 2400 },
    { name: 'Group B', value: 4567 },
    { name: 'Group C', value: 1398 },
    { name: 'Group D', value: 9800 },
    { name: 'Group E', value: 3908 },
    { name: 'Group F', value: 4800 },
];

//Admin Page
const AdminPage = () =>
    (
        <div className="admin-wrapper">
            <div className="container">
                <div className="notification is-dark">
                   Welcome to <strong> Admin Dashboard</strong> | Showing server info from <strong>resubotdb.c5usg0wm00ma.us-east-2.rds.amazonaws.com</strong>
                </div>

                <nav className="level">
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Total Users</p>
                            <p className="title">23</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Total Resumes</p>
                            <p className="title">83</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p class="heading">Server Time Elapsed</p>
                            <p class="title">4D3h</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="heading">Server Health</p>
                            <p class="title has-text-danger">OK</p>
                        </div>
                    </div>
                </nav>

                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data01}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                    <Tooltip />
                </PieChart>



            </div>
        </div>
    )


export default AdminPage