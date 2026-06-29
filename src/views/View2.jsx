import { FieldText, FieldDate, FieldTextarea, FieldCheckbox, FieldCheckboxText } from "../components";
import FieldRadio from "../components/FieldRadio/FieldRadio";
import { useValidation } from "../hooks";

export default function View2({ handleNext, handlePrev }) {
    const [validate, Validator] = useValidation();

    return (
        <>
            <div className="container">
                <section className="form padding">
                    <div className="form__header">
                        <hr />
                        <h2 className="text-blue">Section 2: About the member’s physical & behavioral health</h2>
                        <p className="small">Complete all fields.</p>
                    </div>
                    <div className="form__fields">
                        <div className="form__fields--row no-input">
                            <div className="field">
                                <label className="small bold">Physical health</label>
                                <p className="sub-label">In the past 12 months, has the member had any of these health problems? Check all that apply.</p>
                            </div>
                        </div>
                        <div className="form__fields--row checkbox">
                            <div className="field">
                                <FieldCheckbox id="q10" label="Heart condition/high blood pressure" />
                                <FieldCheckbox id="q11" label="Asthma" />
                                <FieldCheckbox id="q12" label="Seizure/epilepsy" />
                                <FieldCheckbox id="q13" label="Failure to thrive" />
                                <FieldCheckbox id="q14" label="Central nervous system/traumatic brain injury/shaken baby" />
                                <FieldCheckbox id="q15" label="Broken bones" />
                                <FieldCheckbox id="q16" label="Internal injuries" />
                                <FieldCheckbox id="q17" label="Diabetes" />
                                <FieldCheckbox id="q18" label="Hemophilia" />
                                <FieldCheckbox id="q19" label="Sickle cell disease" />
                                <FieldCheckbox id="q20" label="Cancer" />
                                <FieldCheckbox id="q21" label="Cerebral palsy/muscular dystrophy/multiple sclerosis/paralysis" />
                                <FieldCheckbox id="q22" label="Cystic fibrosis" />
                                <FieldCheckbox id="q23" label="Serious burns" />
                            </div>
                            <div className="field">
                                <FieldCheckbox id="q24" label="IV antibiotics" />
                                <FieldCheckbox id="q25" label="HIV or AIDS" />
                                <FieldCheckbox id="q26" label="Organ transplant or waiting for a transplant" />
                                <FieldCheckbox id="q27" label="Hospital stay within the past 30 days" />
                                <FieldCheckbox id="q28" label="Pregnancy" />
                                <FieldCheckbox id="q29" label="Ongoing nursing care" />
                                <FieldCheckbox id="q30" label="Help with daily care" />
                                <FieldCheckbox id="q31" label="Medical equipment needed" />
                                <FieldCheckbox id="q32" label="Hearing or vision loss (excluding eyeglasses)" />
                                <FieldCheckbox id="q33" label="Osteogenesis imperfecta (brittle bone disease)" />
                                <FieldCheckbox id="q34" label="Stomach or digestion problems" />
                                <FieldCheckbox id="q35" label="Dental need or condition that requires specialty&nbsp;care" />
                                <FieldCheckbox id="q36" label="Skin conditions" />
                                <FieldCheckboxText id="q37" label="Other conditions not listed above:" validator={Validator} />
                            </div>
                        </div>
                        <div className="form__fields--row no-input">
                            <div className="field">
                                <label className="small bold">Behavioral health</label>
                                <p className="sub-label">In the past 12 months, has the member had any of these concerns? Check all that apply.</p>
                            </div>
                        </div>
                        <div className="form__fields--row checkbox">
                            <div className="field">
                                <FieldCheckbox id="q38" label="Hurting oneself" />
                                <FieldCheckbox id="q39" label="Trying to hurt others" />
                                <FieldCheckbox id="q40" label="Fire-setting behavior" />
                                <FieldCheckbox id="q41" label="Hurting animals" />
                                <FieldCheckbox id="q42" label="Suicide attempt" />
                                <FieldCheckbox id="q43" label="Hospital stay for mental health care" />
                                <FieldCheckbox id="q44" label="Running away or skipping school" />
                                <FieldCheckbox id="q45" label="Trauma related stress" />
                                <FieldCheckbox id="q46" label="Gender identity and/or LGBTQIA+ support or resources&nbsp;needed" />
                                <FieldCheckbox id="q47" label="Autism" />
                                <FieldCheckbox id="q48" label="Learning or developmental disability" />
                            </div>
                            <div className="field">
                                <FieldCheckbox id="q49" label="ADHD/ADD" />
                                <FieldCheckbox id="q50" label="Schizophrenia/schizoaffective disorder" />
                                <FieldCheckbox id="q51" label="Depression/bipolar/affective dysregulation" />
                                <FieldCheckbox id="q52" label="Anxiety" />
                                <FieldCheckbox id="q53" label="Drug or alcohol use" />
                                <FieldCheckbox id="q54" label="Substance exposed infant" />
                                <FieldCheckbox id="q55" label="Concerning sexual behaviors (needs support or&nbsp;guidance)" />
                                <FieldCheckbox id="q56" label="Victim of human trafficking" />
                                <FieldCheckboxText id="q57" label="Other conditions not listed above:" validator={Validator} />
                            </div>
                        </div>
                        <div className="form__fields--row no-input">
                            <div className="field">
                                <label className="small bold" style={{ margin: 0 }}>
                                    Vaccinations
                                </label>
                            </div>
                        </div>
                        <div className="form__fields--row checkbox" style={{ marginBottom: 27 }}>
                            <div className="field">
                                <div className="field">
                                    <label className="small bold">COVID-19 shot (for members age 6+ months)</label>
                                </div>
                                <FieldRadio
                                    id="q58"
                                    options={[
                                        "Member has had the shot",
                                        "Member/caregiver wants more information",
                                        "Member plans to get the shot",
                                        "Member does not plan to get the shot",
                                        "Not sure",
                                    ]}
                                />
                            </div>
                            <div className="field">
                                <div className="field">
                                    <label className="small bold">Flu shot (for members age 6+ months)</label>
                                </div>
                                <FieldRadio
                                    id="q59"
                                    options={[
                                        "Member has had the shot",
                                        "Member/caregiver wants more information",
                                        "Member plans to get the shot",
                                        "Member does not plan to get the shot",
                                        "Not sure",
                                    ]}
                                />
                            </div>
                        </div>
                        <div className="form__fields--row checkbox" style={{ marginBottom: 27 }}>
                            <div className="field">
                                <div className="field">
                                    <label className="small bold">RSV shot (for members age 0-2 years, and pregnant members 32-36 weeks)</label>
                                </div>
                                <FieldRadio
                                    id="q60"
                                    options={[
                                        "Member has had the shot",
                                        "Member/caregiver wants more information",
                                        "Member plans to get the shot",
                                        "Member does not plan to get the shot",
                                        "Not sure",
                                    ]}
                                />
                            </div>
                        </div>
                        <div className="form__fields--row">
                            <div className="field">
                                <i style={{ fontSize: 13 }}>* Vaccination questions apply to youth age 6 months and older</i>
                            </div>
                        </div>
                        <div className="form__fields--row">
                            <FieldTextarea id="q61" label="Additional notes" validator={Validator} notRequired />
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
