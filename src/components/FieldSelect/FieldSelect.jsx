import { useEffect, useRef, useState } from "react";
import { useStorage } from "../../hooks";

import FieldDate from "../FieldDate/FieldDate";
import FieldText from "../FieldText/FieldText";

export default function FieldSelect({ id, label, options, subCond, subLabel, subType, validator }) {
    const select = useRef();
    const [showSub, setShowSub] = useState(false);
    const [store, getStored] = useStorage("answers");

    useEffect(() => {
        const storedAnswer = getStored(id);

        if (storedAnswer) {
            select.current.value = storedAnswer;

            if (storedAnswer === subCond) setShowSub(true);
        } else {
            store(id, null);
            if (subCond) store(`${id}sub`, null);
        }

        const answers = localStorage.getItem("answers");
        const parsed = JSON.parse(answers);
        if (parsed) {
            const value = parsed[`${id}`];
            if (value) {
                select.current.value = value;
                if (select.current.value === subCond) setShowSub(true);
            }
        }

        if (validator) validator.addValidation(id, validate);

        return () => {
            if (validator) validator.removeValidation(id);
        };
    }, []);

    function handleBlur({ target }) {
        target.style.border = "1px solid #414042";

        if (target.value === "Select") {
            target.style.border = "1px solid red";
        }
    }

    function handleChange({ target }) {
        if (target.localName === "select") {
            if (target.value === subCond) {
                setShowSub(true);
            } else {
                setShowSub(false);
                store(`${id}sub`, "");
            }
        }

        store(id, target.value);
    }

    function displaySub() {
        const props = {
            id: `${id}sub`,
            label: subLabel ? subLabel : "Sub-label placeholder",
            validator: validator,
        };

        switch (subType) {
            case "date":
                return <FieldDate {...props} />;
            case "date-future":
                return <FieldDate {...props} future={true} />;
            default:
                return <FieldText {...props} />;
        }
    }

    function validate() {
        if (select.current.value === "Select") {
            select.current.style.border = "1px solid red";

            return false;
        }

        return true;
    }

    return (
        <>
            <div className="field custom-select">
                <label htmlFor={id} className="small bold">
                    {label ? label : "Label placeholder"}
                </label>
                <select ref={select} name={id} id={id} onChange={handleChange} onBlur={handleBlur}>
                    <option value="Select">Select</option>
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
            {showSub && subCond ? displaySub() : null}
        </>
    );
}
