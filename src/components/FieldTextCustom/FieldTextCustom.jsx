import { useEffect, useRef } from "react";
import { useStorage } from "../../hooks";

export default function FieldTextCustom({ id, label, validator, numbers, customValidation, max, min, onChange, onFocus, error, customRegex }) {
    const input = useRef();
    const [store, getStored] = useStorage("answers");

    useEffect(() => {
        const storedAnswer = getStored(id);
        storedAnswer ? (input.current.value = storedAnswer) : store(id, "");

        if (validator) validator.addValidation(id, validate);

        return () => {
            if (validator) validator.removeValidation(id);
        };
    }, []);

    function handleBlur({ target }) {
        target.style.border = "1px solid #414042";
    }

    function handleChange({ target }) {
        const val = target.value !== "" ? target.value : null;
        store(id, val);

        if (onChange) onChange(val);
    }

    function handleFocus({ target }) {
        target.style.border = "1px solid #414042";

        if (onFocus) onFocus();
    }

    function validate() {
        const value = input.current.value.trim();

        if (customValidation) {
            const isValid = customValidation(value);
            if (!isValid) {
                input.current.style.border = "1px solid red";
                return false;
            }
            if (value === "") {
                input.current.style.border = "1px solid #414042";
                return true;
            }
        }

        if (min && value.length > 0 && value.length < min) {
            input.current.style.border = "1px solid red";
            return false;
        }

        if (max && value.length > max) {
            input.current.style.border = "1px solid red";
            return false;
        }

        const regex = numbers ? /^(\+|)[0-9\-\(\)]*$/g : /^[a-zA-Z0-9\s\,\.\\\/\;\:\-]*$/g;

        if (customRegex) {
            if (value === "" || !value.match(customRegex)) {
                input.current.style.border = "1px solid red";
                return false;
            }
        } else {
            if (value === "" || !value.match(regex)) {
                input.current.style.border = "1px solid red";
                return false;
            }
        }

        input.current.style.border = "1px solid #414042";
        return true;
    }

    return (
        <div className="field">
            <label htmlFor={id} className="small bold">
                {label ? label : "Label placeholder"}
            </label>
            <input ref={input} name={id} id={id} type="text" maxLength={max || "255"} onBlur={handleBlur} onChange={handleChange} onFocus={handleFocus} />
        </div>
    );
}
