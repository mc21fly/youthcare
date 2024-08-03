import { useState } from "react";

export default function useValidation() {
    const [validators, setValidators] = useState([]);

    function addValidation(id, validator) {
        setValidators((prev) => [...prev, { id, validator }]);
    }

    function removeValidation(id) {
        setValidators((prev) => [...prev.filter((validator) => validator.id !== id)]);
    }

    function validate(callback) {
        const result = validators.map(({ validator }) => {
            return validator();
        });

        if (!result.includes(false)) callback();
    }

    return [validate, { addValidation, removeValidation }];
}
