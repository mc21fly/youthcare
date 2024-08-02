import { useState } from "react";
import FieldText from "../components/FieldText/FieldText";
import FieldDate from "../components/FieldDate/FieldDate";
import FieldTextarea from "../components/FieldTextarea/FieldTextarea";
import FieldCheckbox from "../components/FieldCheckbox/FieldCheckbox";
import FieldCheckboxText from "../components/FieldCheckboxText/FieldCheckboxText";

export default function View2({ handleNext, handlePrev }) {
    const [validators, setValidators] = useState([]);

    function handleChange(id, value) {
        const answers = localStorage.getItem("answers");
        const parsed = { ...JSON.parse(answers) };

        parsed[id] = value;
        localStorage.setItem("answers", JSON.stringify(parsed));
    }

    function handleValidation() {
        const result = validators.map(({ validator }) => {
            return validator();
        });

        if (!result.includes(false)) handleNext();
    }

    function addValidator(id, validator) {
        setValidators((prevValidators) => [...prevValidators, { id, validator }]);
    }

    function removeValidator(id) {
        setValidators((prevValidators) => [...prevValidators.filter((validator) => validator.id !== id)]);
    }

    return (
        <>
            <div className='container'>
                <section className='form padding'>
                    <div className='form__header'>
                        <hr />
                        <h2 className='text-blue'>Section 2: About the member’s physical & mental health</h2>
                        <p className='small'>Complete all fields.</p>
                    </div>
                    <div className='form__fields'>
                        <div className='form__fields--row'>
                            <FieldText id='q9' label='Primary care physician' onChange={handleChange} onAddValidator={addValidator} onRemoveValidator={removeValidator} />
                            <FieldDate id='q10' label='Date of last visit' onChange={handleChange} onAddValidator={addValidator} onRemoveValidator={removeValidator} />
                        </div>
                        <div className='form__fields--row'>
                            <FieldText id='q11' label='Dental provider' onChange={handleChange} onAddValidator={addValidator} onRemoveValidator={removeValidator} />
                            <FieldDate id='q12' label='Date of last visit' onChange={handleChange} onAddValidator={addValidator} onRemoveValidator={removeValidator} />
                        </div>
                        <div className='form__fields--row'>
                            <FieldTextarea id='q13' label='List of member’s medications' onChange={handleChange} onAddValidator={addValidator} onRemoveValidator={removeValidator} />
                            <FieldTextarea id='q14' label='Additional treatments or services' onChange={handleChange} onAddValidator={addValidator} onRemoveValidator={removeValidator} />
                        </div>
                        <div className='form__fields--row no-input'>
                            <div className='field'>
                                <label className='small bold'>Physical health</label>
                                <p className='sub-label'>Within the last 12 months, has the member received treatment for, or experienced symptoms related to, any of the following conditions and needs? Check all that apply.</p>
                            </div>
                        </div>
                        <div className='form__fields--row checkbox'>
                            <div className='field'>
                                <FieldCheckbox id='q15' label='Heart condition/high blood pressure' onChange={handleChange} />
                                <FieldCheckbox id='q16' label='Asthma' onChange={handleChange} />
                                <FieldCheckbox id='q17' label='Seizure/epilepsy' onChange={handleChange} />
                                <FieldCheckbox id='q18' label='Failure to thrive' onChange={handleChange} />
                                <FieldCheckbox
                                    id='q19'
                                    label={`Central nervous system/traumatic \n
                                        brain injury/shaken baby`}
                                    onChange={handleChange}
                                />
                                <FieldCheckbox id='q20' label='Broken bones' onChange={handleChange} />
                                <FieldCheckbox id='q21' label='Internal injuries' onChange={handleChange} />
                                <FieldCheckbox id='q22' label='Diabetes' onChange={handleChange} />
                                <FieldCheckbox id='q23' label='Hemophilia' onChange={handleChange} />
                                <FieldCheckbox id='q24' label='Sickle cell disease' onChange={handleChange} />
                                <FieldCheckbox id='q25' label='Cancer' onChange={handleChange} />
                                <FieldCheckbox id='q26' label={`Cerebral palsy/muscular dystrophy/\nmultiple sclerosis/paralysis`} onChange={handleChange} />
                                <FieldCheckbox id='q27' label='Cystic fibrosis' onChange={handleChange} />
                            </div>
                            <div className='field'>
                                <FieldCheckbox id='q28' label='Serious burns that require wound care or surgery' onChange={handleChange} />
                                <FieldCheckbox id='q29' label='IV antibiotics' onChange={handleChange} />
                                <FieldCheckbox id='q30' label='HIV-positive/AIDS' onChange={handleChange} />
                                <FieldCheckbox id='q31' label='Transplant or transplant candidate' onChange={handleChange} />
                                <FieldCheckbox id='q32' label='Hospitalization (within the last 30 days)' onChange={handleChange} />
                                <FieldCheckbox id='q33' label='Pregnancy' onChange={handleChange} />
                                <FieldCheckbox id='q34' label='Private duty nursing/skilled nursing visits' onChange={handleChange} />
                                <FieldCheckbox id='q35' label='Personal care services' onChange={handleChange} />
                                <FieldCheckbox id='q36' label={`Home medical equipment/Durable Medical Equipment (DME) need identified`} onChange={handleChange} />
                                <FieldCheckbox id='q37' label='Hearing or vision loss (excluding eyeglasses)' onChange={handleChange} />
                                <FieldCheckbox id='q38' label='Osteogenesis imperfecta (brittle bone disease)' onChange={handleChange} />
                                <FieldCheckboxText id='q39' label='Any conditions not listed above:' onChange={handleChange} onAddValidator={addValidator} onRemoveValidator={removeValidator} />
                            </div>
                        </div>
                    </div>
                    <div className='form__footer'>
                        <button className='button button--prev' onClick={handlePrev}>
                            Previous
                        </button>
                        <button className='button button--next' onClick={handleValidation}>
                            Next
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}
