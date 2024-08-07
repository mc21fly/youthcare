import { useEffect, useRef } from "react";
import { useStorage } from "../../hooks";

export default function FieldText({ id, label, validator, numbers }) {
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
        if (numbers) {
            if (input.current.value === "" || !input.current.value.match(/^(\+|)[0-9\-\(\)]*$/g)) {
                input.current.style.border = "1px solid red";
                return false;
            }
        } else {
            if (input.current.value === "" || !input.current.value.match(/^[a-zA-Z0-9\s]*$/g)) {
                input.current.style.border = "1px solid red";
                return false;
            }
        }

        return true;
    }

    return (
        <div className="field">
            <label htmlFor={id} className="small bold">
                {label ? label : "Label placeholder"}
            </label>
            <input ref={input} name={id} id={id} type="text" maxLength="255" onBlur={handleBlur} onChange={handleChange} />
        </div>
    );
}
