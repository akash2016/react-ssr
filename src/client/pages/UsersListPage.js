import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions';
import {Helmet} from 'react-helmet';
import requireAuth from '../components/hocs/requireAuth';

class UserList extends Component {
    componentDidMount(){
        this.props.fetchUsers();
    }
    renderUsers(){
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }

    head(){
        return(
            <Helmet>
            <title>Users app</title>
            <meta property='og:title' content='Users app' />
            </Helmet>
        );
    }
    render(){
        return(
            <div>
            {this.head()}
            Here is list of users:
            <ul>{this.renderUsers()}</ul>
            </div>
        );
    }

}

function loadData(store){
return store.dispatch(fetchUsers());
}

function mapStateToProps(state){
  return {users: state.users};
}


export default {
    component: connect(mapStateToProps,{fetchUsers})(requireAuth(UserList)),
    loadData
}