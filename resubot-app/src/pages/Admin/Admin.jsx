import React, {useEffect, useState} from "react";
import './Admin.scss'
import {
    CartesianGrid, Legend, Line,
    LineChart,
    Pie,
    PieChart,
    Tooltip, XAxis, YAxis
} from "recharts";
import axios from "../../common/axiosConfig.js";

const mostListedSkills = [
    { name: 'Communication', value: 20 },
    { name: 'Technical Writing', value: 73 },
    { name: 'Data Analysis', value: 71 },
    { name: 'Programming (General)', value: 70 },
    { name: 'Digital Marketing', value: 68 },
    { name: 'Design (UI/UX)', value: 67 },
    { name: 'Cloud Computing', value: 65 },
    { name: 'Machine Learning', value: 63 },
];
const mostUsedLanguages = [
    { name: 'JavaScript', value: 18 },
    { name: 'Python', value: 16 },
    { name: 'Java', value: 14 },
    { name: 'C#', value: 12 },
    { name: 'PHP', value: 10 },
    { name: 'C++', value: 9 },
    { name: 'TypeScript', value: 8 },
    { name: 'Ruby', value: 7 },
    { name: 'Swift', value: 6 },
    { name: 'Kotlin', value: 5 },
    { name: 'Go', value: 4 },
    { name: 'Rust', value: 3 },
    { name: 'Dart', value: 2 },
];

const gpaDistribution = [
    { range: '0.0 - 1.0', value: 5 },
    { range: '1.1 - 2.0', value: 15 },
    { range: '2.1 - 3.0', value: 30 },
    { range: '3.1 - 3.5', value: 25 },
    { range: '3.6 - 4.0', value: 25 },
];

const data = [
    {
        name: 'Week 1',
        resume: 40,
        cv: 24,
        amt: 24,
    },
    {
        name: 'Week 2',
        resume: 30,
        cv: 13,
        amt: 22,
    },
    {
        name: 'Week 3',
        resume: 20,
        cv: 98,
        amt: 22,
    },
    {
        name: 'Week 4',
        resume: 27,
        cv: 39,
        amt: 20,
    },
];



//Admin Page
const AdminPage = () => {

    const [users, setUsers] = useState([]); // Initialize state to hold users

    useEffect(() => {
            const fetchUsers = async () => {
                try {
                    const response = await axios.get('/api/auth/getAllUsers');
                    setUsers(response.data); // Assume response.data contains the array of users
                } catch (error) {
                    console.error('Failed to fetch users:', error);
                    // Optionally, handle the error (e.g., show a notification)
                }
            };
            fetchUsers().then(r => console.log("fetching users"));
    }, []); // Empty dependency array means this effect runs once on mount
    return (
        <div className="admin-wrapper">
            <div className="container">
                <div className="notification is-dark">
                    Welcome to <strong> Admin Dashboard</strong> | Showing server info
                    from <strong>resubotdb.c5usg0wm00ma.us-east-2.rds.amazonaws.com</strong>
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
                            <p className="heading">Total Resumes Created</p>
                            <p className="title">83</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Server Time Elapsed</p>
                            <p className="title">4D3h</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Server Health</p>
                            <p className="title has-text-danger">OK</p>
                        </div>
                    </div>
                </nav>

                <hr/>
                <div className="columns has-text-centered">
                    <div className="column">
                        <h5 className="subtitle is-5">Top Listed Skills</h5>
                        <PieChart width={300} height={300}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={false}
                                data={mostListedSkills}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#29465B"
                                label
                            />
                            <Pie dataKey="value" data={mostListedSkills} cx={500} cy={200} innerRadius={40}
                                 outerRadius={80} fill="#29465B"/>
                            <Tooltip/>
                        </PieChart>
                    </div>
                    <div className="column">
                        <h5 className="subtitle is-5">Top Used Languages</h5>
                        <PieChart width={300} height={300}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={false}
                                data={mostUsedLanguages}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#29465B"
                                label
                            />
                            <Pie dataKey="value" data={mostUsedLanguages} cx={500} cy={200} innerRadius={40}
                                 outerRadius={80} fill="#29465B"/>
                            <Tooltip/>
                        </PieChart>
                    </div>
                    <div className="column">
                        <h5 className="subtitle is-5">GPA distribution</h5>
                        <PieChart width={300} height={300}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={false}
                                data={gpaDistribution}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#29465B"
                                label
                            />
                            <Pie dataKey="value" data={gpaDistribution} cx={500} cy={200} innerRadius={40}
                                 outerRadius={80} fill="#29465B"/>
                            <Tooltip/>
                        </PieChart>
                    </div>
                </div>

                <hr />
                {/* New section to render fetched users */}
                <div className="box">
                    <h4 className="title is-4">User List</h4>
                    <table className="table is-striped is-fullwidth">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Privilege Level</th>
                            <th>Latest Session</th>
                            {/* Add more columns as needed */}
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.type}</td>
                                <td>{new Date(new Date().setFullYear(new Date().getFullYear() - 1) + Math.random() * (new Date() - new Date().setFullYear(new Date().getFullYear() - 1))).toLocaleDateString()

                                }</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <p className="title is-5 has-text-primary">monthly active resume and CV creators </p>
                <LineChart
                    width={1100}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="resume" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="cv" stroke="#82ca9d" />
                </LineChart>

            </div>
        </div>
    )
};

export default AdminPage