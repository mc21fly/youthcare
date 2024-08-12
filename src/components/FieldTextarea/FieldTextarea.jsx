import { useEffect, useRef } from "react";
import { useStorage } from "../../hooks";

export default function FieldTextarea({ id, label, validator }) {
    const input = useRef();
    const [store, getStored] = useStorage("answers");

    useEffect(() => {
        const storedAnswer = getStored(id);
        storedAnswer ? (input.current.value = storedAnswer) : store(id, null);

        if (validator) validator.addValidation(id, validate);

        return () => {
            if (validator) validator.removeValidation(id);
        };
    }, []);

    function handleBlur({ target }) {
        target.style.border = "1px solid #414042";
    }

    function handleChange({ target }) {
        store(id, target.value !== "" ? target.value : null);
    }

    function validate() {
        if (input.current.value === "" || !input.current.value.match(/^[a-zA-Z\s\,\.]*$/g)) {
            input.current.style.border = "1px solid red";
            return false;
        }

        return true;
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
