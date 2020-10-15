import React from 'react';
import met from '../api/met';
import SearchBar from './SearchBar';
import Display from './Display';

class App extends React.Component {
    //initiate state {prop name of the state: value }
    state = { artList: [], selectedArt: null };

    onSearchSubmit = async term => {
        const response = await met.get(`/search?q=${term}`);
        const { objectIDs } = response.data;
        const artList = await Promise.all(objectIDs.map(
            async objId => {
                const objectResponse = await met.get(`/objects/${objId}`);
                return objectResponse.data;
            }
        ));
        this.setState({ artList });
    };


    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <Display artList={this.state.artList} />
            </div>
        );
    }
}

export default App;