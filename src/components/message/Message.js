import { useEffect, useState } from "react"
import { Fade } from "react-reveal"

export default function Message({children, className, ...props}) {
    const [show, setShow] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setShow(false)
        }, 3000)
    }, [])

    return(
        <Fade left when = {show}>
            <div className = {className}>
                {children}
            </div>
        </Fade>
    )
}