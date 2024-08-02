import { useEffect, useRef } from "react";

export default function FieldEmail({ id, label, onChange, onAddValidator, onRemoveValidator }) {
    const input = useRef();

    useEffect(() => {
        const answers = localStorage.getItem("answers");
        const parsed = JSON.parse(answers);

        if (parsed) {
            const value = parsed[`${id}`];
            if (value) input.current.value = value;
        }

        if (onAddValidator) onAddValidator(id, validator);

        return () => {
            if (onRemoveValidator) onRemoveValidator(id);
        };
    }, []);

    function handleChange({ target }) {
        if (target.value !== "" && !isValidEmail(target.value)) {
            onChange(id, null);
        } else if (target.value === "") {
            onChange(id, null);
        } else {
            onChange(id, target.value);
        }
    }

    function handleBlur({ target }) {
        target.style.border = "1px solid #414042";
        target.style.outline = "none";

        if (target.value !== "" && !isValidEmail(target.value)) {
            target.style.outline = "2px solid red";
            target.style.border = "1px solid red";
        }
    }

    function isValidEmail(email) {
        return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }

    function validator() {
        if (!isValidEmail(input.current.value) || input.current.value === "") {
            input.current.style.border = "1px solid red";
            input.current.style.outline = "2px solid red";
            return false;
        }

        return true;
    }

    return (
        <div className='field'>
            <label htmlFor={id} className='small bold'>
                {label ? label : "Label placeholder"}
            </label>
            <input ref={input} name={id} id={id} type='text' onChange={handleChange} onBlur={handleBlur} />
        </div>
    );
}
