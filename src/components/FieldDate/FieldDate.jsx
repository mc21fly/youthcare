export default function FieldDate({ id, label }) {
    function handleChange({ target }) {}

    function handleBlur({ target }) {
        target.style.border = "1px solid #414042";
        target.style.outline = "none";

        if (target.value !== "" && !isValidDate(target.value)) {
            target.style.outline = "2px solid red";
            target.style.border = "1px solid red";
        }
    }

    function isValidDate(date) {
        return date.match(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/g);
    }

    return (
        <div className='field'>
            <label htmlFor={id} className='small bold'>
                {label}
            </label>
            <input name={id} id={id} type='text' placeholder='MM/DD/YYYY' maxLength='10' onChange={handleChange} onBlur={handleBlur} />
        </div>
    );
}
