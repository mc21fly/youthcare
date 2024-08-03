import { useEffect, useRef } from "react";
import { useStorage } from "../../hooks";

export default function FieldCheckbox({ id, label, onChange }) {
    const input = useRef();
    const [store, getStored] = useStorage("answers");

    useEffect(() => {
        const storedAnswer = getStored(id);
        storedAnswer ? (input.current.checked = storedAnswer) : store(id, false);
    }, []);

    function handleChange({ target }) {
        onChange(id, target.checked);
    }

    return (
        <div className="field__checkbox">
            <input type="checkbox" ref={input} name={id} id={id} onChange={handleChange} />
            <label htmlFor={id}>{label ? label : "Label placeholder"}</label>
        </div>
    );
}
