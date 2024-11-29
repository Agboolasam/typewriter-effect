import { useEffect, useState } from "react";

function Typewriter() {
    const textArray = [
        document.getElementById("text1").value,
        document.getElementById("text2").value,
        document.getElementById("text3").value,
    ];
    const speed = document.getElementById("speed");
    const [arrayIndex, setArrayIndex] = useState(0);
    const [outputText, setOutputText] = useState("");
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {

        if (arrayIndex < textArray.length) {
            if (textIndex < textArray[arrayIndex].length) {
                const print = setTimeout(() => {
                    setOutputText(prev => prev + textArray[textIndex].charAt(textIndex));
                    setTextIndex(prev => prev + 1);
                }, speed);
                return () => clearTimeout(print);
            } else if (textIndex === textArray[arrayIndex].length) {
                const wipe = setTimeout(() => {
                    setArrayIndex(prev => prev + 1);
                    setTextIndex(0);
                    setOutputText("");
                }, 1000)
                return () => clearTimeout(wipe)
            }
        }
    }, [textIndex, arrayIndex, textArray, speed])
    return (

        <div id="TextArea">
            {outputText}
        </div>
    )
}

export default Typewriter;
