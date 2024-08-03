import { useEffect, useRef } from "react";
import { useStorage } from "../../hooks";

export default function FieldDate({ id, label, onChange, onAddValidator, onRemoveValidator }) {
    const input = useRef();
    const [store, getStored] = useStorage("answers");

    useEffect(() => {
        const storedAnswer = getStored(id);
        storedAnswer ? (input.current.value = storedAnswer) : store(id, null);

        if (onAddValidator) onAddValidator(id, validator);

        return () => {
            if (onRemoveValidator) onRemoveValidator(id);
        };
    }, []);

    function handleChange({ target }) {
        if (target.value !== "" && !isValidDate(target.value)) {
            onChange(id, null);
        } else if (target.value === "") {
            onChange(id, null);
        } else {
            onChange(id, target.value);
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

    function validator() {
        if (!isValidDate(input.current.value) || input.current.value === "") {
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
            <input ref={input} name={id} id={id} type="text" placeholder="MM/DD/YYYY" maxLength="10" onChange={handleChange} onBlur={handleBlur} />
        </div>
    );
}
