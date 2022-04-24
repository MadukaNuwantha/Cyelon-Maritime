import React, { Component } from 'react'

export class Loader extends Component {
    render() {
        return (
            <div>
                <div id="loader" class="show">
                    <div class="loader"></div>
                </div>
            </div>
        )
    }
}

export default Loader