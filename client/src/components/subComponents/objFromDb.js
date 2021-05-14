import React from 'react';
import axios from "axios";

class ObjFromDb extends React.Component {
    constructor() {
        super();
        this.state = {
            test: "Not yet gotten"
        }
    }

    
    

    componentDidMount = () => {
        
        axios.get("http://localhost:5000", {headers: {
            'Content-Type': 'application/json'}}).then(response => {
            console.log(response.data);
            console.log(response.data.name)
            console.log(`Status: ${response.status}`)
            console.log(`Server: ${response.headers.server}`)
            console.log(`Date: ${response.headers.date}`)
            this.setState({
                test: response.data[0].name
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.test}
            </div>
        )
    }
}

export default ObjFromDb;