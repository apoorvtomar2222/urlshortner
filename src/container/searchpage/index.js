import React, { Component } from 'react';
import { connect } from 'react-redux'

import { searchAndListuser } from '../../action/index'
class Search extends Component {

    constructor(Props) {
        super(Props);
        this.state = {
            searchParam: ''
        }

    }
    onTodoChange(value) {
        this.setState({
            searchParam: value
        });
    }

    submit = () => {
        console.log('Props', this.props);
        console.log('state ius ', this.state.searchParam);
        //this.props.dispatch(searchAndListuser(this.state.searchParam));

    }
    render() {
        return (
            <div>
                <div >
                    <label >Find User</label>
                    <input type="text" className="form-control" id="usr" value={this.state.searchParam} onChange={e => this.onTodoChange(e.target.value)} />
                    <input type='button' onClick={this.submit} value='Search User' />
                </div>
            </div >
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect(state => state, mapDispatchToProps)(Search);