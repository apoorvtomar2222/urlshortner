import React, { Component } from 'react';
import { connect } from 'react-redux'

import { searchAndListuser, getUrls } from '../../action/index'
class Search extends Component {

    constructor(Props) {
        super(Props);
        this.state = {
            searchUrl: ''
        }

    }
    componentDidMount() {
        this.props.dispatch(getUrls());
    }
    onTodoChange(value) {
        this.setState({
            searchUrl: value
        });
    }

    submit = () => {
        this.props.dispatch(searchAndListuser(this.state.searchUrl))
            .then(
                this.setState({ searchUrl: '' })
            )
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
        return (

            <div className="container">
                <div className="jumbotron">
                    <h1>Url Shortener</h1>

                </div>

                <label >Enter Url</label>
                <input type="text" className="form-control" id="usr" value={this.state.searchUrl} onChange={e => this.onTodoChange(e.target.value)} />
                <br />

                <input type='button' className='btn btn-success' onClick={this.submit} value='Trim Url' />
                <br />
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