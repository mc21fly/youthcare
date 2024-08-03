import { useState } from "react";

export default function useValidation() {
    const [validators, setValidators] = useState([]);

    function addValidator(id, validator) {
        setValidators((prev) => [...prev, { id, validator }]);
    }

    function removeValidator(id) {
        setValidators((prev) => [...prev.filter((validator) => validator.id !== id)]);
    }

    function validate(callback) {
        const result = validators.map(({ validator }) => {
            return validator();
        });

        if (!result.includes(false)) callback();
    }

    return [validate, addValidator, removeValidator];
}
