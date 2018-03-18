import React, {Component} from 'react';

class ProxyTest extends Component {

    constructor() {
        super();
        this.state = {
            text: ''
        }
    }

    componentDidMount() {
        this.tryProxy();
    }

    tryProxy() {
        fetch('/api/proxy_test', null).then(
            res => res.text()
        ).then(value => {
            this.setState({text: value})
        }).catch(() => {
            this.setState({text: 'PROXY_ERROR'});
        });
    }

    render() {
        return (
            <div>{this.state.text}</div>
        );
    }
}

export default ProxyTest;
