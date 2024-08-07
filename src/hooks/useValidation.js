import { useState } from "react";

export default function useValidation() {
    const [validators, setValidators] = useState([]);

    function addValidation(id, validator) {
        setValidators((prev) => [...prev, { id, validator }]);
    }

    function removeValidation(id) {
        setValidators((prev) => [...prev.filter((validator) => validator.id !== id)]);
    }

    function _validate(callback) {
        let firstInvalid = null;

        const result = validators.map(({ id, validator }) => {
            const isValid = validator();

            if (!firstInvalid && !isValid) firstInvalid = id;

            return isValid;
        });

        if (firstInvalid) {
            const element = document.querySelector(`#${firstInvalid}`);
            const y = element.getBoundingClientRect().top + window.scrollY;

            window.scroll({
                top: y - 100,
            });
        }

        if (!result.includes(false)) callback();
    }

    return [_validate, { addValidation, removeValidation }];
}
