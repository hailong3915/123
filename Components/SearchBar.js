import { SearchBar } from 'react-native-elements';
import React from "react";

export default class App extends React.Component {
    state = {
        search: '',
    };

    updateSearch = (search) => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;

        return (
            <SearchBar
                placeholder="Search.."
                onChangeText={this.updateSearch}
                value={search}
                containerStyle={{ backgroundColor: '#FFF' }}
                inputStyle={{ backgroundColor: '#FFF', paddingLeft: 10, fontSize: 16 }}
                platform={Platform.OS}
                cancelButtonStyle={{ fontSize: 10 }}

            />
        );
    }
}
