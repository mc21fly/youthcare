export default function FieldText({ id, label }) {
    function handleBlur({ target }) {
        target.style.border = "1px solid #414042";
        target.style.outline = "none";
    }

    return (
        <div className='field'>
            <label htmlFor={id} className='small bold'>
                {label}
            </label>
            <input name={id} id={id} type='text' maxLength='255' onBlur={handleBlur} />
        </div>
    );
}
