

import { ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';
import React from 'react';

// axios.get("http://127.0.0.1:8000/api/apiapp/")

class App extends React.Component {
    state = {
        loading: true,
        users: [],
        error: null
    };
    getFetchUsers() {
        this.setState({
            loading: true
        }, () => {
            fetch("http://127.0.0.1:8000/api/apiapp/")
            .then(res => res.json())
            .then(result => this.setState({
                loading: true,
                users: result
            })).catch(console.log);
        });
    }
    componentDidMount() {
        this.getFetchUsers();
    }
    componentDidUpdate() {
        fetch("http://127.0.0.1:8000/api/apiapp/")
        .then(res => res.json())
        .then(result => this.setState({
            loading: true,
            users: result
        })).catch(console.log);
    }
    render() {
        const {
            users,
            error
        } = this.state;
        console.log(users)
        return (
          <React.Fragment>
          <h1>All Cars</h1>
          {
            error ? <p> { error.message } </p> : null}  
            {
                users.map(user => {
                    const {
                        id,
                        name,
                        price,
                        quantity
                    } = user;
                    return (
                    <div key={id}>
                        <p>ID: {id}</p>
                        <p>Name: {name}</p>
                        <p>Price: {price}</p>
                        <p>Quantity: {quantity}</p>
                        <hr />
                    </div>
                    );
                }
            )
        }
        <ResponsiveContainer width="100%" height="100%" aspect={5}>
            <PieChart width={400} height={400}>
                <Pie dataKey='quantity' data={users} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label/>
                <Tooltip />
                </PieChart>
        </ResponsiveContainer>
    </React.Fragment> );
    }
}

export default App;

