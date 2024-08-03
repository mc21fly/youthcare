import { FieldText, FieldDate, FieldTextarea, FieldCheckbox, FieldCheckboxText } from "../components";
import { useStorage, useValidation } from "../hooks";

export default function View2({ handleNext, handlePrev }) {
    const [validate, addValidator, removeValidator] = useValidation();
    const [store] = useStorage("answers");

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
                            <FieldText id="q9" label="Primary care physician" onChange={store} onAddValidator={addValidator} onRemoveValidator={removeValidator} />
                            <FieldDate id="q10" label="Date of last visit" onChange={store} onAddValidator={addValidator} onRemoveValidator={removeValidator} />
                        </div>
                        <div className="form__fields--row">
                            <FieldText id="q11" label="Dental provider" onChange={store} onAddValidator={addValidator} onRemoveValidator={removeValidator} />
                            <FieldDate id="q12" label="Date of last visit" onChange={store} onAddValidator={addValidator} onRemoveValidator={removeValidator} />
                        </div>
                        <div className="form__fields--row">
                            <FieldTextarea id="q13" label="List of member’s medications" onChange={store} onAddValidator={addValidator} onRemoveValidator={removeValidator} />
                            <FieldTextarea id="q14" label="Additional treatments or services" onChange={store} onAddValidator={addValidator} onRemoveValidator={removeValidator} />
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
                                <FieldCheckbox id="q15" label="Heart condition/high blood pressure" onChange={store} />
                                <FieldCheckbox id="q16" label="Asthma" onChange={store} />
                                <FieldCheckbox id="q17" label="Seizure/epilepsy" onChange={store} />
                                <FieldCheckbox id="q18" label="Failure to thrive" onChange={store} />
                                <FieldCheckbox
                                    id="q19"
                                    label={`Central nervous system/traumatic \n
                                        brain injury/shaken baby`}
                                    onChange={store}
                                />
                                <FieldCheckbox id="q20" label="Broken bones" onChange={store} />
                                <FieldCheckbox id="q21" label="Internal injuries" onChange={store} />
                                <FieldCheckbox id="q22" label="Diabetes" onChange={store} />
                                <FieldCheckbox id="q23" label="Hemophilia" onChange={store} />
                                <FieldCheckbox id="q24" label="Sickle cell disease" onChange={store} />
                                <FieldCheckbox id="q25" label="Cancer" onChange={store} />
                                <FieldCheckbox id="q26" label={`Cerebral palsy/muscular dystrophy/\nmultiple sclerosis/paralysis`} onChange={store} />
                                <FieldCheckbox id="q27" label="Cystic fibrosis" onChange={store} />
                            </div>
                            <div className="field">
                                <FieldCheckbox id="q28" label="Serious burns that require wound care or surgery" onChange={store} />
                                <FieldCheckbox id="q29" label="IV antibiotics" onChange={store} />
                                <FieldCheckbox id="q30" label="HIV-positive/AIDS" onChange={store} />
                                <FieldCheckbox id="q31" label="Transplant or transplant candidate" onChange={store} />
                                <FieldCheckbox id="q32" label="Hospitalization (within the last 30 days)" onChange={store} />
                                <FieldCheckbox id="q33" label="Pregnancy" onChange={store} />
                                <FieldCheckbox id="q34" label="Private duty nursing/skilled nursing visits" onChange={store} />
                                <FieldCheckbox id="q35" label="Personal care services" onChange={store} />
                                <FieldCheckbox id="q36" label={`Home medical equipment/Durable Medical Equipment (DME) need identified`} onChange={store} />
                                <FieldCheckbox id="q37" label="Hearing or vision loss (excluding eyeglasses)" onChange={store} />
                                <FieldCheckbox id="q38" label="Osteogenesis imperfecta (brittle bone disease)" onChange={store} />
                                <FieldCheckboxText
                                    id="q39"
                                    label="Any conditions not listed above:"
                                    onChange={store}
                                    onAddValidator={addValidator}
                                    onRemoveValidator={removeValidator}
                                />
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
