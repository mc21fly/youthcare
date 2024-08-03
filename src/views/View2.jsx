import { FieldText, FieldDate, FieldTextarea, FieldCheckbox, FieldCheckboxText } from "../components";
import { useValidation } from "../hooks";

export default function View2({ handleNext, handlePrev }) {
    const [validate, Validator] = useValidation();

    return (
        <>
            <div className="container">
                <section className="form padding">
                    <div className="form__header">
                        <hr />
                        <h2 className="text-blue">Section 2: About the member’s physical & mental health</h2>
                        <p className="small">Complete all fields.</p>
                    </div>
                    <div className="form__fields">
                        <div className="form__fields--row">
                            <FieldText id="q9" label="Primary care physician" validator={Validator} />
                            <FieldDate id="q10" label="Date of last visit" validator={Validator} />
                        </div>
                        <div className="form__fields--row">
                            <FieldText id="q11" label="Dental provider" validator={Validator} />
                            <FieldDate id="q12" label="Date of last visit" validator={Validator} />
                        </div>
                        <div className="form__fields--row">
                            <FieldTextarea id="q13" label="List of member’s medications" validator={Validator} />
                            <FieldTextarea id="q14" label="Additional treatments or services" validator={Validator} />
                        </div>
                        <div className="form__fields--row no-input">
                            <div className="field">
                                <label className="small bold">Physical health</label>
                                <p className="sub-label">
                                    Within the last 12 months, has the member received treatment for, or experienced symptoms related to, any of the following conditions and needs?
                                    Check all that apply.
                                </p>
                            </div>
                        </div>
                        <div className="form__fields--row checkbox">
                            <div className="field">
                                <FieldCheckbox id="q15" label="Heart condition/high blood pressure" />
                                <FieldCheckbox id="q16" label="Asthma" />
                                <FieldCheckbox id="q17" label="Seizure/epilepsy" />
                                <FieldCheckbox id="q18" label="Failure to thrive" />
                                <FieldCheckbox
                                    id="q19"
                                    label={`Central nervous system/traumatic \n
                                        brain injury/shaken baby`}
                                />
                                <FieldCheckbox id="q20" label="Broken bones" />
                                <FieldCheckbox id="q21" label="Internal injuries" />
                                <FieldCheckbox id="q22" label="Diabetes" />
                                <FieldCheckbox id="q23" label="Hemophilia" />
                                <FieldCheckbox id="q24" label="Sickle cell disease" />
                                <FieldCheckbox id="q25" label="Cancer" />
                                <FieldCheckbox id="q26" label={`Cerebral palsy/muscular dystrophy/\nmultiple sclerosis/paralysis`} />
                                <FieldCheckbox id="q27" label="Cystic fibrosis" />
                            </div>
                            <div className="field">
                                <FieldCheckbox id="q28" label="Serious burns that require wound care or surgery" />
                                <FieldCheckbox id="q29" label="IV antibiotics" />
                                <FieldCheckbox id="q30" label="HIV-positive/AIDS" />
                                <FieldCheckbox id="q31" label="Transplant or transplant candidate" />
                                <FieldCheckbox id="q32" label="Hospitalization (within the last 30 days)" />
                                <FieldCheckbox id="q33" label="Pregnancy" />
                                <FieldCheckbox id="q34" label="Private duty nursing/skilled nursing visits" />
                                <FieldCheckbox id="q35" label="Personal care services" />
                                <FieldCheckbox id="q36" label={`Home medical equipment/Durable Medical Equipment (DME) need identified`} />
                                <FieldCheckbox id="q37" label="Hearing or vision loss (excluding eyeglasses)" />
                                <FieldCheckbox id="q38" label="Osteogenesis imperfecta (brittle bone disease)" />
                                <FieldCheckboxText id="q39" label="Any conditions not listed above:" validator={Validator} />
                            </div>
                        </div>
                    </div>
                    <div className="form__footer">
                        <button className="button button--prev" onClick={handlePrev}>
                            Previous
                        </button>
                        <button className="button button--next" onClick={() => validate(handleNext)}>
                            Next
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}
