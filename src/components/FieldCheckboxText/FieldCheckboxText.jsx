import { useEffect, useRef } from "react";
import { useStorage } from "../../hooks";

export default function FieldCheckboxText({ id, label, validator }) {
    const input = useRef();
    const checkbox = useRef();
    const [store, getStored] = useStorage("answers");

    useEffect(() => {
        const storedAnswerCheckbox = getStored(id);
        const storedAnswerCheckboxText = getStored(`${id}sub`);

        if (storedAnswerCheckbox) {
            checkbox.current.checked = storedAnswerCheckbox;
            input.current.value = storedAnswerCheckboxText;
            input.current.disabled = false;
        } else {
            store(id, false);
            store(`${id}sub`, "");
        }

        if (validator) validator.addValidation(id, validate);

        return () => {
            if (validator) validator.removeValidation(id);
        };
    }, []);

    function handleChange({ target }) {
        store(id, target.checked);
        input.current.disabled = !target.checked;
        input.current.style.border = "1px solid #414042";

        if (!target.checked) store(`${id}sub`, "");
    }

    function handleInput({ target }) {
        store(`${id}sub`, target.value !== "" ? target.value : null);
    }

    function handleBlur({ target }) {
        target.style.border = "1px solid #414042";
    }

    function validate() {
        if (checkbox.current.checked && (input.current.value === "" || !input.current.value.match(/^[a-zA-Z\s\,\.\\\/\;\:\-]*$/g))) {
            input.current.style.border = "1px solid red";
            return false;
        }

        return true;
    }

    return (
        <>
            <div className="field__checkbox">
                <input type="checkbox" ref={checkbox} name={id} id={id} onChange={handleChange} />
                <label htmlFor={id}>{label ? label : "Label placeholder"}</label>
            </div>
            <div className="field__checkbox--text">
                <input ref={input} disabled type="text" onChange={handleInput} onBlur={handleBlur} id={`${id}sub`} />
            </div>
        </>
    );
}
