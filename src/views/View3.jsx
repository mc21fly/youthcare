import { FieldTextarea, FieldCheckbox, FieldCheckboxText } from "../components";
import { useValidation } from "../hooks";

export default function View3({ handleNext, handlePrev }) {
    const [validate, Validator] = useValidation();

    return (
        <>
            <div className="container">
                <section className="form padding">
                    <div className="form__header">
                        <hr />
                        <h2 className="text-blue">Section 3: Additional information</h2>
                        <p className="small">Complete all fields.</p>
                    </div>
                    <div className="form__fields">
                        <div className="form__fields--row no-input">
                            <div className="field">
                                <label className="small bold">Social determinants of health (SDOH)</label>
                                <p className="sub-label">Does the member need assistance with any of the following? Check all that apply. Include an explanation in the notes.</p>
                            </div>
                        </div>
                        <div className="form__fields--row checkbox no-input">
                            <div className="field">
                                <FieldCheckbox id="q71" label="Food" />
                                <FieldCheckbox id="q72" label="Clothing" />
                                <FieldCheckbox id="q73" label="Housing" />
                                <FieldCheckbox id="q74" label="Transportation" />
                                <FieldCheckbox id="q75" label="Education" />
                                <FieldCheckbox id="q76" label="Employment" />
                                <FieldCheckbox id="q77" label="Literacy" />
                            </div>
                            <div className="field">
                                <FieldCheckbox id="q78" label="Social supports" />
                                <FieldCheckbox id="q79" label="Access to healthcare" />
                                <FieldCheckboxText id="q80" label="Other:" />
                                <FieldCheckbox id="q81" label="No SDOH needs reported" />
                            </div>
                        </div>
                        <div className="form__fields--row no-input">
                            <div className="field">
                                <i>
                                    Visit{" "}
                                    <a href="http://www.meridianconnect.findhelp.com" target="_blank">
                                        meridianconnect.findhelp.com
                                    </a>{" "}
                                    to find local resources and support.
                                </i>
                            </div>
                        </div>
                        <div className="form__fields--row">
                            <FieldTextarea id="q82" label="Special educational services received" validator={Validator} />
                        </div>
                        <div className="form__fields--row">
                            <FieldTextarea id="q83" label="Additional notes" validator={Validator} />
                        </div>
                    </div>
                    <div className="form__footer">
                        <button className="button button--prev" onClick={handlePrev}>
                            Previous
                        </button>
                        <button className="button button--next" onClick={() => validate(handleNext)}>
                            Submit
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}
