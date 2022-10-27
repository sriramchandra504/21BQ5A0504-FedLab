import React,{Component} from 'react';
class ClockFunction extends Component {
    constructor() {
        super();
        this.state = { time: new Date() }; 
    }

    componentDidMount() { 
        this.update = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1 * 1000); 
    }

    componentWillUnmount() { 
        clearInterval(this.update);
    }

    render() {
        const { time } = this.state; 

        return (<div>
            <h1>Digital Clock</h1>
            <h2>
                {time.toLocaleTimeString()}
            </h2>
        </div>);
    }
}
export default ClockFunction;