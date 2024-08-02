import { useEffect, useRef } from "react";

export default function FieldCheckbox({ id, label, onChange, onAddValidator, onRemoveValidator }) {
    const input = useRef();
    const checkbox = useRef();

    useEffect(() => {
        const answers = localStorage.getItem("answers");
        const parsed = JSON.parse(answers);

        if (parsed) {
            const value = parsed[`${id}`];
            if (value) {
                checkbox.current.checked = value;
                input.current.disabled = false;
                input.current.value = parsed[`${id}sub`];
            } else {
                parsed[`${id}`] = false;
                localStorage.setItem("answers", JSON.stringify(parsed));
            }
        }

        if (onAddValidator) onAddValidator(id, validator);

        return () => {
            if (onRemoveValidator) onRemoveValidator(id);
        };
    }, []);

    function handleChange({ target }) {
        onChange(id, target.checked);
        input.current.disabled = !target.checked;
        input.current.style.border = "1px solid #414042";
        input.current.style.outline = "none";

        if (!target.checked) onChange(`${id}sub`, "");
    }

    function handleInput({ target }) {
        onChange(`${id}sub`, target.value !== "" ? target.value : null);
    }

    function handleBlur({ target }) {
        target.style.border = "1px solid #414042";
        target.style.outline = "none";
    }

    function validator() {
        if (checkbox.current.checked && input.current.value === "") {
            input.current.style.border = "1px solid red";
            input.current.style.outline = "2px solid red";
            return false;
        }

        return true;
    }

    return (
        <>
            <div className='field__checkbox'>
                <input type='checkbox' ref={checkbox} name={id} id={id} onChange={handleChange} />
                <label htmlFor={id}>{label ? label : "Label placeholder"}</label>
            </div>
            <div className='field__checkbox--text'>
                <input ref={input} disabled type='text' onChange={handleInput} onBlur={handleBlur} id={`${id}sub`} />
            </div>
        </>
    );
}
