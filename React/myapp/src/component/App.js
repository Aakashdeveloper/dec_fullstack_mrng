import React,{Component} from 'react';

//const url = "http://localhost:8660/";

class App extends Component{

  constructor(){
    super()

    this.state={
      user:''
    }
  }

  renderUser  = () => {
    if(this.state.user){
      console.log(this.state.user)
      return this.state.user.map((data) => {
        return(
                <tr>
                  <td>{data.name}</td>
                  <td>{data.city}</td>
                  <td>{data.phone}</td>
                </tr>
        )
      })
    }
  }

  render(){
    return (
      <div className="App">
        <h1>This is from NareshIT</h1>
        <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>City</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
              {this.renderUser()}
              </tbody>
          </table>
      </div>
    );
  }

  componentDidMount(){
    fetch('/api/user', {
      method:'GET'
    })
    .then((res) => res.json())
    .then((data) => {
      this.setState({user:data})
    })
  }

}

export default App;
