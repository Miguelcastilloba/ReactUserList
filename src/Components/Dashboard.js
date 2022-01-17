import React from 'react';
import UsersList from './UsersList';
import axios from 'axios';
import '../index.css';





export default class Dashboard extends React.Component {

    

  state = {
    page: 1,
    users: [],
    isLoading: false,
    errorMsg: '',
    isGrid:false
  };

  toggleGrid = () => {
    this.setState(prevState => ({ isGrid: !prevState.isGrid }));
  };
  
 

 
  componentDidMount() {
    this.loadUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.loadUsers();

    }
  }

  loadUsers = () => {
    const { page } = this.state;
  
    this.setState({ isLoading: true });
    axios
      
      .get(`https://reqres.in/api/users?page=${page}`)
      .then((response) => {
        this.setState({ users: response.data.data, errorMsg: '' });
      })
      .catch((error) =>
        this.setState({
          errorMsg: 'Error while loading data. Try again later.'
        })
      )
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  loadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1

    }));

    
 
  };


  loadLess = () => {
    this.setState((prevState) => ({
      page: prevState.page - 1

    }));

    
 
  };

  render() {
    const { users, isLoading, errorMsg, isGrid } = this.state;
 
   

    return (
      <div className={`main-section ${isGrid ? "" : "gridview"}`}>

        <div className='users-title'>
          <h2> Usuarios: </h2>
        <button onClick={this.toggleGrid}>Cambiar Vista</button>
        </div>


        <UsersList users={users} />

     

        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <div className="load-more">

        <button onClick={this.loadLess} >
            {isLoading ? 'Loading...' : 'Anterior'}
          </button>

          <button onClick={this.loadMore} >
            {isLoading ? 'Loading...' : 'Siguiente'}
          </button>
        </div>
      </div>
    );
  }
}