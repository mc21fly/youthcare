import { useLayoutEffect, useEffect, useRef, useState } from "react";
import { useStorage } from "../../hooks";

export default function FieldRadio({ id, options, validator }) {
    const input = useRef();
    const [store, getStored] = useStorage("answers");
    const [checked, setChecked] = useState();

    useLayoutEffect(() => {
        const storedAnswer = getStored(id);
        storedAnswer ? setChecked(storedAnswer) : store(id, "");
    }, []);

    useEffect(() => {
        if (validator) validator.addValidation(id, validate);

        return () => {
            if (validator) validator.removeValidation(id);
        };
    }, []);

    function handleClick({ target }) {
        if (checked === target.value) {
            store(id, "");
            setChecked(null);
        } else {
            store(id, target.value);
            setChecked(target.value);
        }
    }

    function validate() {
        return true;
    }

    return options
        ? options.map((option, index) => {
              return (
                  <div key={index} className="field__radio">
                      <input ref={input} type="radio" name={id} id={`${id}_${index}`} onClick={handleClick} value={option} checked={option === checked ? true : false} readOnly />
                      <label htmlFor={`${id}_${index}`}>{option}</label>
                  </div>
              );
          })
        : null;
}
