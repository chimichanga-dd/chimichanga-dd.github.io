
import React from "react"

const Welcome = () => {

        return (
            <div className="welcome">
                <div className="name">
                    <span className="first-name">
                        <span className="blinker">></span> David
                    </span>
                    <span className="last-name">
                        Dixon <span className="blinker"> {`<`} </span>
                    </span>
                </div>
                <div id="About" className="mini-about">Former information systems analyst turned
                                            software developer creating projects
                                            with Ruby, Rails, React and much more.
                </div>
            </div>
        )
}

export default Welcome