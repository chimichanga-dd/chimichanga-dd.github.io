
import React from "react"
import Typed from 'react-typed';

class Welcome extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            showSecond: false
        }

        this.updateState = this.updateState.bind(this)
    }

    updateState(bool) {
        this.setState({ showSecond: bool })
    }

    showSecond() {
        if (this.state.showSecond) {
            return <Typed
                strings={['I am a Software Engineer', 'I am a map enthusiast',]}
                typeSpeed={80}
                backDelay={1000}
                backSpeed={40}
                loop
            />
        }
        return null
    }

    render() {

        return (
            <div className="welcome">
                WELCOME!
                <div>
                    <Typed
                        strings={['My name is David Dixon']}
                        typeSpeed={80}
                        onComplete={(self) => {
                            self.cursor.remove();
                            this.updateState(true)
                        }}
                    />
                </div>
                <div>
                    {this.showSecond()}
                </div>
            </div>
        )
    }

}

export default Welcome