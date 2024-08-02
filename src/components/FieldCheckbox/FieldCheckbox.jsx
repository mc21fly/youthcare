import { useEffect, useRef } from "react";

export default function FieldCheckbox({ id, label, onChange }) {
    const input = useRef();

    useEffect(() => {
        const answers = localStorage.getItem("answers");
        const parsed = JSON.parse(answers);

        if (parsed) {
            const value = parsed[`${id}`];
            if (value) {
                input.current.checked = value;
            } else {
                parsed[`${id}`] = false;
                localStorage.setItem("answers", JSON.stringify(parsed));
            }
        }
    }, []);

    function handleChange({ target }) {
        onChange(id, target.checked);
    }

    return (
        <div className='field__checkbox'>
            <input type='checkbox' ref={input} name={id} id={id} onChange={handleChange} />
            <label htmlFor={id}>{label ? label : "Label placeholder"}</label>
        </div>
    );
}
