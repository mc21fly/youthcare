import { FieldTextarea, FieldCheckbox, FieldCheckboxText } from "../components";
import { useValidation } from "../hooks";

export default function View3({ handleNext, handlePrev, sending }) {
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
                                <FieldCheckbox id="q63" label="Food" />
                                <FieldCheckbox id="q64" label="Clothing" />
                                <FieldCheckbox id="q65" label="Housing" />
                                <FieldCheckbox id="q66" label="Transportation" />
                                <FieldCheckbox id="q67" label="Education" />
                                <FieldCheckbox id="q68" label="Employment" />
                                <FieldCheckbox id="q69" label="Literacy" />
                            </div>
                            <div className="field">
                                <FieldCheckbox id="q70" label="Social supports" />
                                <FieldCheckbox id="q71" label="Access to healthcare" />
                                <FieldCheckboxText id="q72" label="Other:" validator={Validator} />
                                <FieldCheckbox id="q73" label="No SDOH needs reported" />
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
                            <FieldTextarea id="q75" label="Additional notes" validator={Validator} notRequired />
                        </div>
                    </div>
                    <div className="form__footer">
                        <button className="button button--prev" onClick={handlePrev}>
                            Previous
                        </button>
                        <button className={`button button--next ${sending ? "svg-spinners--ring-resize" : ""}`} onClick={() => validate(handleNext)} disabled={sending}>
                            {sending ? "Sending..." : "Submit"}
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}
