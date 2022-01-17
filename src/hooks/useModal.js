import useCliclAway from "hooks/useClickAway";
import react, { useEffect } from "react";
import { Fade, Slide, Zoom } from "react-reveal";
import "./useModal.css";
import useWindowDimensions from "./useWindowDimensions";

export default function useModal(){
    const [show, setShow] = react.useState(true);
    const ref = react.useRef();
    const { height, width } = useWindowDimensions();
    const toggle = () => {
        if(width < 700){
            setShow(prev => !prev);
        }   
    }

    useEffect(() => {
        if(!show && width > 700){
            setShow(true);
        }
    }, [show, width]);

    useCliclAway({ref, onClickAway: toggle});

    

    const Modal = ({children}) => {
        if(!show) return null;

        return(
            <Zoom left>
                <div  className="modal-container" ref={ref}>
                    {children}
                </div>
            </Zoom>
        )};

    return [Modal, toggle];
}