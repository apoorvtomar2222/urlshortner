import React, { Component } from 'react';
import { connect } from 'react-redux'

import { searchAndListuser, getUrls } from '../../action/index'
class Search extends Component {

    constructor(Props) {
        super(Props);
        this.state = {
            searchParam: ''
        }

    }
    componentDidMount() {
        this.props.dispatch(getUrls());
    }
    onTodoChange(value) {
        this.setState({
            searchParam: value
        });
    }

    submit = () => {
        console.log('Props', this.props);
        console.log('state ius ', this.state.searchParam);

        this.props.dispatch(searchAndListuser(this.state.searchParam))
            .then()
            .catch((error) => {
                console.log("error", error);

            })

    }

    urlTable = (item) => {
        return (

            <tbody key={item.url}>
                <tr>
                    <td>{item.url}</td>
                    <td>{item.shorturl}</td>
                    <td>{item.hit}</td>
                    <td>{item.time}</td>
                </tr>

            </tbody>

        )
    }
    render() {
        console.log('This props is', this.props.homeReducer);
        return (

            <div className="container">
                <div className="jumbotron">
                    <h1>Url Shortner</h1>

                </div>

                <label >Enter Url</label>
                <input type="text" className="form-control" id="usr" value={this.state.searchParam} onChange={e => this.onTodoChange(e.target.value)} />
                <input type='button' onClick={this.submit} value='Search User' />
                <table className="table table-striped">
                    <thead  >
                        <tr>
                            <th>Url</th>
                            <th>Short Url</th>
                            <th>Hits</th>
                            <th>Created On</th>
                        </tr>
                    </thead>
                    {this.props.homeReducer.search.length > 0 && this.props.homeReducer.search.map(this.urlTable)}
                </table>
            </div>

        );
    }

}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         dispatch: dispatch
//     }
// }

export default connect(state => state, null)(Search);