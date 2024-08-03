import { useEffect, useRef, useState } from "react";
import FieldDate from "../FieldDate/FieldDate";
import FieldText from "../FieldText/FieldText";

export default function FieldSelect({ id, label, options, subCond, subLabel, subType, onChange, onAddValidator, onRemoveValidator }) {
    const select = useRef();
    const [showSub, setShowSub] = useState(false);

    useEffect(() => {
        const answers = localStorage.getItem("answers");
        const parsed = JSON.parse(answers);
        if (parsed) {
            const value = parsed[`${id}`];
            if (value) {
                select.current.value = value;
                if (select.current.value === subCond) setShowSub(true);
            }
        }

        if (onAddValidator) onAddValidator(id, validator);

        return () => {
            if (onRemoveValidator) onRemoveValidator(id);
        };
    }, []);

    function handleBlur({ target }) {
        target.style.border = "1px solid #414042";
        target.style.outline = "none";

        if (target.value === "Select") {
            target.style.outline = "2px solid red";
            target.style.border = "1px solid red";
        }
    }

    function handleChange({ target }) {
        if (target.localName === "select") {
            if (target.value === subCond) {
                setShowSub(true);
            } else {
                setShowSub(false);
                onChange(`${id}sub`, "");
            }
        }

        onChange(id, target.value);
    }

    function displaySub() {
        const props = {
            id: `${id}sub`,
            label: subLabel ? subLabel : "Sub-label placeholder",
            onChange: onChange,
            onAddValidator: onAddValidator,
            onRemoveValidator: onRemoveValidator,
        };

        switch (subType) {
            case "date":
                return <FieldDate {...props} />;
            default:
                return <FieldText {...props} />;
        }
    }

    function validator() {
        if (select.current.value === "Select") {
            select.current.style.border = "1px solid red";
            select.current.style.outline = "2px solid red";

            return false;
        }

        return true;
    }

    return (
        <>
            <div className='field custom-select'>
                <label htmlFor={id} className='small bold'>
                    {label ? label : "Label placeholder"}
                </label>
                <select ref={select} name={id} id={id} onChange={handleChange} onBlur={handleBlur}>
                    <option value='Select'>Select</option>
                    {options
                        ? options.map((option, index) => {
                              return (
                                  <option key={index} value={option}>
                                      {option}
                                  </option>
                              );
                          })
                        : null}
                </select>
            </div>
            {showSub ? displaySub() : null}
        </>
    );
}
