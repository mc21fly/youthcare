import { useEffect, useRef } from "react";
import { useStorage } from "../../hooks";

export default function FieldDate({ id, label, validator, future, notRequired }) {
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

    function handleChange({ target }) {
        if (target.value !== "" && !isValidDate(target.value)) {
            store(id, null);
        } else if (target.value === "") {
            store(id, notRequired ? "" : null);
        } else {
            store(id, target.value);
        }
    }

    function handleBlur({ target }) {
        target.style.border = "1px solid #414042";

        if (target.value !== "" && !isValidDate(target.value)) {
            target.style.border = "1px solid red";
        }
    }

    function isValidDate(date) {
        return date.match(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/g);
    }

    function isFutureDate(date) {
        const input = new Date(date);
        const now = Date.now();

        if (input < now) return false;

        return true;
    }

    function validate() {
        if (notRequired) {
            if (input.current.value !== "" && !isValidDate(input.current.value)) {
                input.current.style.border = "1px solid red";
                return false;
            }

            if (!future) {
                if (input.current.value !== "" && isFutureDate(input.current.value)) {
                    input.current.style.border = "1px solid red";
                    return false;
                }
            }

            return true;
        } else {
            if (!isValidDate(input.current.value) || input.current.value === "") {
                input.current.style.border = "1px solid red";
                return false;
            }

            if (!future) {
                if (input.current.value !== "" && isFutureDate(input.current.value)) {
                    input.current.style.border = "1px solid red";
                    return false;
                }
            }

            return true;
        }
    }

    return (
        <div className="field">
            <label htmlFor={id} className="small bold">
                {label ? label : "Label placeholder"}
            </label>
            <input ref={input} name={id} id={id} type="text" placeholder="MM/DD/YYYY" maxLength="10" onChange={handleChange} onBlur={handleBlur} />
        </div>
    );
}
