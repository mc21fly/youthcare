import { useEffect, useRef } from "react";
import { useStorage } from "../../hooks";

export default function FieldEmail({ id, label, validator }) {
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

    function handleChange({ target }) {
        if (target.value !== "" && !isValidEmail(target.value)) {
            store(id, null);
        } else if (target.value === "") {
            store(id, null);
        } else {
            store(id, target.value);
        }
    }

    function handleBlur({ target }) {
        target.style.border = "1px solid #414042";

        if (target.value !== "" && !isValidEmail(target.value)) {
            target.style.border = "1px solid red";
        }
    }

    function isValidEmail(email) {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }

    function validate() {
        if (!isValidEmail(input.current.value) || input.current.value === "") {
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
            <input ref={input} name={id} id={id} type="text" onChange={handleChange} onBlur={handleBlur} />
        </div>
    );
}
