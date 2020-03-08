
import React from "react"
import Typed from 'react-typed';

const lastName = () => (
    <Typed
        strings={["Dixon"]}
        typeSpeed={30}
        backDelay={2000}
        loop
    />
)



class Welcome extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            showLastName: false,
            firstLoop: true
        }
        this.updateState = this.updateState.bind(this)
    }

    updateState(attr, bool) {
        this.setState({ [attr]: bool })
    }

    showLastName() {

        let lastName = this.state.firstLoop ? "Dixon" : "^1000Dixon"

        if (this.state.showLastName) {
            return <Typed
                strings={[lastName]}
                typeSpeed={80}
                backDelay={3000}
                backSpeed={40}
                onComplete={() => this.updateState("firstLoop", false)}
                loop
            />
        }
        return null
    }

    render() {

        let firstName = <Typed
            strings={["> David "]}
            typeSpeed={80}
            onComplete={(self) => {
                self.cursor.remove(); this.updateState("showLastName", true)}}
        />

        return (
            <div className="welcome">
                <div className="name">
                    {firstName} {this.showLastName()}
                </div>
                <div className="mini-about">Former GIS practitioner turned
                                            Software engineer who is creating projects
                                            with Ruby, Rails, React and much more.
                </div>
            </div>
        )



}





}

export default Welcome