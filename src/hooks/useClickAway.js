// react hook to detect if the user clicks outside of a referenced react component

import react, { useEffect } from "react";

export default function useCliclAway({ref, onClickAway}) {

    const handleClickAway = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            onClickAway();
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickAway);
        return () => {
            document.removeEventListener("mousedown", handleClickAway);
        };
    });


}


