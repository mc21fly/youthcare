import { useEffect, useRef } from "react";

export default function FieldTextarea({ id, label, onChange, onAddValidator, onRemoveValidator }) {
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

    function handleBlur({ target }) {
        target.style.border = "1px solid #414042";
        target.style.outline = "none";
    }

    function handleChange({ target }) {
        onChange(id, target.value !== "" ? target.value : null);
    }

    function validator() {
        if (input.current.value === "") {
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
            <textarea ref={input} name={id} id={id} maxLength='255' onBlur={handleBlur} onChange={handleChange}></textarea>
        </div>
    );
}
