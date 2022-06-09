import React, { Component } from 'react'

class CounterClass extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    decr = () => {
        this.setState({
            count: this.state.count > 0 ? this.state.count - 1 : this.state.count
        })
    }

    incr = () => {
        this.setState({
            count: this.state.count < 10 ? this.state.count + 1 : this.state.count
        })
    }

    render() {
        return (
            <>
                <section className='py-5 mb-5'>
                    <div className="container">
                        <h1 className='text-center'>Class Components</h1>
                        <h2 className='text-center mb-5' style={{ fontSize: "72px" }}>{this.state.count}</h2>
                        <div className="text-center">
                            <button onClick={this.decr} type="button" className="btn btn-lg btn-outline-danger shadow-none mx-1" disabled={this.state.count <= 0}>DECR</button>
                            <button onClick={this.incr} type="button" className="btn btn-lg btn-outline-success shadow-none mx-1" disabled={this.state.count >= 10}>INCR</button>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default CounterClass