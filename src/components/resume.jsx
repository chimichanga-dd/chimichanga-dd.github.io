import React from "react"

const Resume = () => {

  const iframeRef = React.useRef(null)

  React.useEffect( () => {
    iframeRef.current.src = "https://docs.google.com/gview?url=http://github.com/chimichanga-dd/resume/raw/master/David_Dixon_Resume.pdf&embedded=true"
  })

    return (
        <iframe
        ref={iframeRef}
        src="https://docs.google.com/gview?url=http://github.com/chimichanga-dd/resume/raw/master/David_Dixon_Resume.pdf&embedded=true"
            style={{ width: 100 + "%", height: 100 + "%" }}
            frameBorder="0">
        </iframe>
    )
}

export default Resume