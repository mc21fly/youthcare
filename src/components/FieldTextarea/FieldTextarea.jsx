import { useEffect, useRef } from "react";
import { useStorage } from "../../hooks";

export default function FieldTextarea({ id, label, validator, notRequired, regex }) {
    const input = useRef();
    const [store, getStored] = useStorage("answers");

    useEffect(() => {
        const storedAnswer = getStored(id);
        storedAnswer ? (input.current.value = storedAnswer) : store(id, notRequired ? "" : null);

        if (validator) validator.addValidation(id, validate);

        return () => {
            if (validator) validator.removeValidation(id);
        };
    }, []);

    function handleBlur({ target }) {
        target.style.border = "1px solid #414042";
    }

    function handleChange({ target }) {
        if (notRequired) {
            store(id, target.value !== "" ? target.value : "");
        } else {
            store(id, target.value !== "" ? target.value : null);
        }
    }

    function validate() {
        const value = input.current.value.trim();

        const fallbackRegex = /^[a-zA-Z\s,.\\\/;:\-\p{L}'’–—]+$/u;
        const textRegex = regex ? regex : fallbackRegex;

        if (notRequired) {
            if (value === "") return true;

            if (!textRegex.test(value)) {
                input.current.style.border = "1px solid red";
                return false;
            }
            return true;
        } else {
            if (value === "" || !textRegex.test(value)) {
                input.current.style.border = "1px solid red";
                return false;
            }
            return true;
        }
    }

    return (
        <div className="field">
            <label htmlFor={id} className="small bold">
                {label ? label : "Label placeholder"}
            </label>
            <textarea ref={input} name={id} id={id} maxLength="255" onBlur={handleBlur} onChange={handleChange}></textarea>
        </div>
    );
}
