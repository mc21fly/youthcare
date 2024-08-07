import { useLayoutEffect, useRef, useState } from "react";
import { useStorage } from "../../hooks";

export default function FieldRadio({ id, options, validator }) {
    const input = useRef();
    const [store, getStored] = useStorage("answers");
    const [checked, setChecked] = useState();

    useLayoutEffect(() => {
        const storedAnswer = getStored(id);
        storedAnswer ? setChecked(storedAnswer) : store(id, "");

        if (validator) validator.addValidation(id, validate);

        return () => {
            if (validator) validator.removeValidation(id);
        };
    }, []);

    function handleChange({ target }) {
        store(id, target.value);
        setChecked(target.value);
    }

    function validate() {
        return true;
    }

    return options
        ? options.map((option, index) => {
              return (
                  <div key={index} className="field__radio">
                      <input ref={input} type="radio" name={id} id={`${id}_${index}`} onChange={handleChange} value={option} checked={option === checked ? true : false} />
                      <label htmlFor={`${id}_${index}`}>{option}</label>
                  </div>
              );
          })
        : null;
}
