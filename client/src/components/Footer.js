/*import React from 'react';
import axios from 'axios'
import ReactTable from "react-table"; 

let config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

class Footer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
      loading:true
    }
  }
  async getUsersData(){
    const res = await axios.get('http://localhost:5000', config)
    console.log(res.data)
    this.setState({loading:false, users: res.data})
  }
  componentDidMount(){
    this.getUsersData()
  }
  render() {
    const columns = [{  
      Header: 'Name',  
      accessor: 'name' ,
      }
  ]
    return (
      <ReactTable  
      data={this.state.users}  
      columns={columns}  
   />
    )
  }
}

export default Footer;
*/
/*
import React from 'react';
import axios from "axios";
import './footer.css'

class Footer extends React.Component {
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
        return(
            <footer>
            <div className="grid-container-footer">
                <div className="grid-item-footer">
                    <h3>Kontakt</h3>
                    <ul>
                        <li>svennrage@gmail.com</li>
                    </ul>
                </div>
                <div className="grid-item-footer">
                    <h3>rett: {this.state.test} </h3>
                    <ul>
                        
                    </ul>
                </div>
            </div>
            </footer>
            );
    }
}

export default Footer;
*/
import React from 'react';
import './footer.css'

function Footer() {

let email = 'svennrage@gmail.com';

    return(
    <footer>
    <div className="grid-container-footer">
        <div className="grid-item-footer">
            <h3>Kontakt</h3>
            <ul>
                <li>{email}</li>
            </ul>
        </div>
        <div className="grid-item-footer">
            <h3>Om</h3>
            <ul>
                
            </ul>
        </div>
    </div>
    </footer>
    )
}
export default Footer;
