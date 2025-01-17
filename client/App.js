import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { client } from './apollo'
import { Font } from 'expo'

import Navigation from './Navigation/SwitchNavigator'

Object.setPrototypeOf = Object.setPrototypeOf || function (obj, proto) {
    obj.__proto__ = proto
    return obj
}
class App extends Component {
    state = {
        fontLoaded: false
    }
    async componentDidMount() {
        await Font.loadAsync({
            montserratRegular: require('./resources/fonts/montserratRegular.ttf'),
            montserratMedium: require('./resources/fonts/montserratMedium.ttf')
        })
        this.setState({ fontLoaded: true })
    }

    render() {
        if (!this.state.fontLoaded) return null
        return (
            <ApolloProvider client={client}>
                <Navigation />
            </ApolloProvider>
        )
    }
}

export default App
