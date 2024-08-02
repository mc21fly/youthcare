import { useState } from "react";

export default function FieldSelect({ id, label, options, subCond, subLabel }) {
    const [showSub, setShowSub] = useState(false);

    function handleBlur({ target }) {
        target.style.border = "1px solid #414042";
        target.style.outline = "none";
    }

    function handleChange({ target }) {
        target.value === subCond ? setShowSub(true) : setShowSub(false);
    }

    return (
        <>
            <div className='field custom-select'>
                <label htmlFor={id} className='small bold'>
                    {label}
                </label>
                <select name={id} id={id} data-select onChange={handleChange} onBlur={handleBlur}>
                    {options.map((option, index) => {
                        return (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        );
                    })}
                </select>
            </div>
            {showSub ? (
                <div className='field'>
                    <label htmlFor={`${id}sub`} className='small bold'>
                        {subLabel ? subLabel : null}
                    </label>
                    <input name={`${id}sub`} data-question type='text' onBlur={handleBlur} />
                </div>
            ) : null}
        </>
    );
}
