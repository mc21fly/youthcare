import { FieldTextarea, FieldText, FieldTextCustom, FieldDate, FieldBull, FieldCheckbox, FieldCheckboxText } from "../components";
import FieldRadio from "../components/FieldRadio/FieldRadio";
import { useValidation, useStorage } from "../hooks";
import { useState } from "react";

export default function View3({ handleNext, handlePrev, sending }) {
    const [validate, Validator] = useValidation();
    const [, getStored] = useStorage("answers");

    const [hasId, setHasId] = useState(!!(getStored("q99") || getStored("q100")));
    const [showError, setShowError] = useState(false);

    const handleIdChange = () => {
        const answers = getStored();
        const exists = !!(answers?.q99 || answers?.q100);
        setHasId(exists);

        if (exists) {
            setShowError(false);
        }
    };

    const validateAtLeastOneId = () => {
        const currentAnswers = getStored();
        return !!(currentAnswers?.q99 || currentAnswers?.q100);
    };

    const handleSubmit = () => {
        validate(() => {
            handleNext();
        });

        if (!hasId) {
            setShowError(true);
        }
    };

    const handleFocus = () => {
        setShowError(false);

        const field1 = document.getElementById("q99");
        const field2 = document.getElementById("q100");

        if (field1) field1.style.border = "1px solid #414042";
        if (field2) field2.style.border = "1px solid #414042";
    };

    return (
        <>
            <div className="container">
                <section className="form padding">
                    <div className="form__header">
                        <hr />
                        <h2 className="text-blue">Section 3: Additional information</h2>
                        <p className="small">Complete all fields.</p>
                    </div>
                    <div className="form__fields margin-btm">
                        <div className="form__fields--row no-input">
                            <div className="field">
                                <label className="small bold">Needs at home or in daily life</label>
                                <p className="sub-label">
                                    Please answer these questions as best you can. A YouthCare Care Coordinator may follow up to offer resources and support.
                                </p>
                            </div>
                        </div>
                        <div className="field" style={{ width: "100%" }}>
                            <div className="field">
                                <label className="small bold">Housing (place to live):</label>
                            </div>
                            <FieldRadio
                                id="q103"
                                options={[
                                    "I have a steady place to live",
                                    "I do not want to answer",
                                    "I do not have a steady place to live (for example: staying with others, shelter, outside, car, or park)",
                                ]}
                                side
                            />
                        </div>
                        <div className="field" style={{ width: "100%" }}>
                            <div className="field margin-t15">
                                <label className="small bold">Food:</label>
                            </div>
                            <FieldRadio
                                id="q104"
                                options={[
                                    "In the past 2 months, I (or people I live with) ate less or skipped meals because we did not have enough money for food",
                                    "In the past 2 months, I did not have any problems getting enough food",
                                ]}
                                side
                            />
                        </div>
                        <div className="field" style={{ width: "100%" }}>
                            <div className="field margin-t15">
                                <label className="small bold">Transportation:</label>
                            </div>
                            <FieldRadio
                                id="q105"
                                options={[
                                    "In the past year, not having a ride kept me from doctor visits, work, meetings, or getting things I need for daily life",
                                    "In the past year, I did not have any transportation problems",
                                ]}
                                side
                            />
                        </div>
                        <div className="field" style={{ width: "100%" }}>
                            <div className="field margin-t15">
                                <label className="small bold">Utilities:</label>
                            </div>
                            <FieldRadio
                                id="q106"
                                options={[
                                    "In the past year, a utility company (electric, gas, water, etc.) threatened to shut off service at my home",
                                    "In the past year, I did not have any problems with utilities",
                                    "Utility service has already been shut off at my home",
                                ]}
                                side
                            />
                        </div>
                        <div className="field" style={{ width: "100%" }}>
                            <div className="field margin-t15">
                                <label className="small bold">Safety:</label>
                            </div>
                            <FieldRadio id="q107" options={["I feel safe in my daily life", "I feel unsafe in my daily life"]} side />
                        </div>
                        <div className="field" style={{ width: "100%" }}>
                            <div className="field margin-t15">
                                <label className="small bold">Employment:</label>
                            </div>
                            <FieldRadio id="q108" options={["I do not have a job right now or I do not have steady income", "I do not need help with work or income"]} side />
                        </div>
                        <div className="field" style={{ width: "100%" }}>
                            <div className="field margin-t15">
                                <label className="small bold">Social Support:</label>
                            </div>
                            <FieldRadio id="q109" options={["I never feel alone", "I sometimes feel alone", "I rarely feel alone", "I often feel alone"]} side />
                        </div>
                        <div className="form__fields--row no-input" style={{ marginTop: 20 }}>
                            <div className="field">
                                <label className="small bold">Does the member need help with any of these? Check all that apply.</label>
                                <p className="sub-label">If you check any box, please explain in the notes section.</p>
                            </div>
                        </div>
                        <div className="form__fields--row checkbox no-input">
                            <div className="field">
                                <FieldCheckbox id="q62" label="Food" />
                                <FieldCheckbox id="q63" label="Housing" />
                                <FieldCheckbox id="q64" label="Transportation" />
                                <FieldCheckbox id="q65" label="Utilities" />
                                <FieldCheckbox id="q66" label="Medical care, medicine, medical supplies" />
                                <FieldCheckbox id="q67" label="Dental and/or vision services" />
                                <FieldCheckbox id="q68" label="Help applying for benefits" />
                                <FieldCheckbox id="q69" label="Understanding health information or completing medical forms" />
                                <FieldCheckbox id="q70" label="Help with activities of daily living" />
                                <FieldCheckbox id="q71" label="Childcare/other child-related issues" />
                            </div>
                            <div className="field">
                                <FieldCheckbox id="q72" label="Debt/loan repayment" />
                                <FieldCheckbox id="q73" label="Legal issues" />
                                <FieldCheckbox id="q74" label="Employment" />
                                <FieldCheckbox id="q75" label="GED/Higher Education" />
                                <FieldCheckbox id="q76" label="Access to working telephone" />
                                <FieldCheckbox id="q77" label="Having internet at home" />
                                <FieldCheckboxText id="q78" label="Other:" validator={Validator} regex={/^[a-zA-Z\s,.\\\/;:\-\p{L}'’–—!@#$%^&*()_+={}\[\]|"<>?~`]+$/u} />
                                <FieldCheckbox id="q79" label="Member does not need help" />
                            </div>
                        </div>
                        <div className="form__fields--row no-input">
                            <div className="field">
                                <label className="small bold">Care Gaps</label>
                                <p className="sub-label">Does the member need help with any of these? Check all that apply. If yes, explain what help is needed.</p>
                            </div>
                        </div>
                        <div className="form__fields--row checkbox no-input">
                            <div className="field">
                                <FieldCheckbox id="q80" label="Yearly checkup" />
                                <FieldCheckbox id="q81" label="Annual dental exam" />
                                <FieldCheckbox id="q82" label="Vaccines" />
                                <FieldCheckbox id="q83" label="Diabetes testing" />
                                <FieldCheckbox id="q84" label="Breathing Conditions" />
                                <FieldCheckboxText id="q85" label="Other:" validator={Validator} regex={/^[a-zA-Z\s,.\\\/;:\-\p{L}'’–—!@#$%^&*()_+={}\[\]|"<>?~`]+$/u} />
                            </div>
                        </div>
                        <div className="form__fields--row no-input">
                            <div className="field">
                                <label className="small bold">Benefits</label>
                                <p className="sub-label">YouthCare members can get benefits like:</p>
                            </div>
                        </div>
                        <div className="form__fields--row checkbox no-input" style={{ marginBottom: 0 }}>
                            <div className="field">
                                <FieldBull label="Transportation" />
                                <FieldBull label="My Health Pays rewards" />
                                <FieldBull label="24-hour nurse phone line" />
                                <FieldBull label="Member services" />
                                <FieldBull label="Member portal" />
                            </div>
                            <div className="field">
                                <FieldBull label="Dental" />
                                <FieldBull label="Vision" />
                                <FieldBull label="Health coaching" />
                                <FieldBull label="Telehealth" />
                                <FieldBull label="FindHelp" />
                            </div>
                        </div>
                        <div className="form__fields--row no-input">
                            <div className="field" style={{ width: "100%", maxWidth: 850, display: "inline" }}>
                                For more information, visit the YouthCare benefits webpage to download the{" "}
                                <a
                                    href="https://www.ilyouthcare.com/members/youthcare/resources/member-handbooks-forms.html?utm_source=salesforce&utm_medium=email&utm_campaign=youthcare&utm_term=yc_fosterparents_members&utm_content=handbook#member_handbook"
                                    target="_blank"
                                >
                                    member handbook
                                </a>
                                , or contact Member Services{" "}
                                <a href="tel:8442892264" target="_blank" style={{ color: "#009978", fontWeight: 700 }}>
                                    (844-289-2264)
                                </a>{" "}
                                or the member’s assigned YouthCare Coordinator.
                            </div>
                        </div>
                        <div className="form__fields--row no-input" style={{ marginTop: 35 }}>
                            <div className="field">
                                <label className="small bold">More Information</label>
                            </div>
                        </div>
                        <div className="form__fields--row">
                            <FieldText
                                id="q86"
                                label="Primary care physician"
                                validator={Validator}
                                notRequired={true}
                                regex={/^[a-zA-Z0-9\s,.\\\/;:\-\p{L}'’–—!@#$%^&*()_+={}\[\]|"<>?~`]+$/u}
                            />
                            <FieldDate id="q87" label="Date of last visit" validator={Validator} notRequired={true} />
                        </div>
                        <div className="form__fields--row">
                            <FieldText
                                id="q88"
                                label="Dental provider"
                                validator={Validator}
                                notRequired={true}
                                regex={/^[a-zA-Z0-9\s,.\\\/;:\-\p{L}'’–—!@#$%^&*()_+={}\[\]|"<>?~`]+$/u}
                            />
                            <FieldDate id="q89" label="Date of last visit" validator={Validator} notRequired={true} />
                        </div>
                        <div className="form__fields--row">
                            <FieldTextarea
                                id="q90"
                                label="List of member’s medications"
                                validator={Validator}
                                notRequired={true}
                                regex={/^[a-zA-Z0-9\s,.\\\/;:\-\p{L}'’–—!@#$%^&*()_+={}\[\]|"<>?~`]+$/u}
                            />
                            <FieldTextarea
                                id="q91"
                                label="Additional treatments or services"
                                validator={Validator}
                                notRequired={true}
                                regex={/^[a-zA-Z0-9\s,.\\\/;:\-\p{L}'’–—!@#$%^&*()_+={}\[\]|"<>?~`]+$/u}
                            />
                        </div>
                        <div className="field ">
                            <div className="field">
                                <label className="small">Are there any medical or mental health services the member needs but has not been able to get?</label>
                            </div>
                            <FieldRadio id="q92" options={["No", "Yes; no providers available", "Yes; long waitlist", "Yes; we need help finding providers"]} />
                        </div>
                        <div className="form__fields--row checkbox margin-btm" style={{ marginBottom: 27 }}>
                            <div className="field" style={{ marginTop: 20 }}>
                                <div className="field">
                                    <label className="small">Is the member connected to all the recommended services?</label>
                                </div>
                                <FieldRadio id="q93" options={["Yes", "No"]} />
                            </div>
                            <div className="field margin" style={{ marginTop: 20 }}>
                                <div className="field">
                                    <label className="small">Has the member gone to the recommended appointment(s)?</label>
                                </div>
                                <FieldRadio id="q94" options={["Yes", "No"]} />
                            </div>
                        </div>
                        <div className="form__fields--row checkbox margin-btm" style={{ marginBottom: 27 }}>
                            <div className="field">
                                <div className="field">
                                    <label className="small">
                                        <b>Adult guardianship</b> (for members age 17+)
                                        <br />
                                        Does the member want information about adult guardianship?
                                    </label>
                                </div>
                                <FieldRadio id="q95" options={["Yes", "No"]} />
                            </div>
                            <div className="field">
                                <div className="field margin-tp">
                                    <label className="small">
                                        <b>Advanced directives</b> (for members age 18+)
                                        <br />
                                        Does the member want information about advanced directives?
                                    </label>
                                </div>
                                <FieldRadio id="q96" options={["Yes", "No"]} />
                            </div>
                        </div>
                        <div className="form__fields--row checkbox margin-btm" style={{ marginBottom: 27 }}>
                            <div className="field">
                                <FieldText
                                    id="q97"
                                    label={
                                        <>
                                            Name of Adult Guardian <br className="mbl-hide" />
                                            (Former Youth in Care only):
                                        </>
                                    }
                                    labelThin={true}
                                    validator={Validator}
                                    notRequired={true}
                                />
                            </div>
                            <div className="field margin-t">
                                <div className="field">
                                    <label className="small">Does the member have an 18+ consent order? (Youth in Care only)</label>
                                </div>
                                <FieldRadio id="q98" options={["Yes", "No"]} />
                            </div>
                        </div>
                        <div className="form__fields--row" style={{ marginBottom: 10 }}>
                            <FieldTextCustom
                                id="q99"
                                label="RIN/Medicaid ID"
                                validator={Validator}
                                numbers={true}
                                min={9}
                                max={9}
                                customValidation={validateAtLeastOneId}
                                onChange={handleIdChange}
                                onFocus={handleFocus}
                                error={showError && !hasId}
                                customRegex={/^[0-9]*$/g}
                            />
                            <FieldTextCustom
                                id="q100"
                                label="AMISYS ID/Member ID"
                                validator={Validator}
                                min={9}
                                max={15}
                                customValidation={validateAtLeastOneId}
                                onChange={handleIdChange}
                                onFocus={handleFocus}
                                error={showError && !hasId}
                                customRegex={/^[a-zA-Z0-9]*$/g}
                            />
                        </div>
                        {showError && !hasId && (
                            <div className="form__fields--row no-input">
                                <div className="field" style={{ width: "100%" }}>
                                    <i style={{ color: "red" }}>Please enter the RIN/Medicaid ID OR the&nbsp;AMISYS&nbsp;ID/Member&nbsp;ID.</i>
                                </div>
                            </div>
                        )}
                        <div className="form__fields--row no-input">
                            <div className="field">
                                <i>Incorrect RIN AMISYS ID can delay assessment completion.</i>
                            </div>
                        </div>
                        <div className="form__fields--row">
                            <FieldTextarea
                                id="q101"
                                label="Special educational services received"
                                validator={Validator}
                                notRequired
                                regex={/^[a-zA-Z0-9\s,.\\\/;:\-\p{L}'’–—!@#$%^&*()_+={}\[\]|"<>?~`]+$/u}
                            />
                            <FieldTextarea
                                id="q102"
                                label="Additional notes"
                                validator={Validator}
                                notRequired
                                regex={/^[a-zA-Z0-9\s,.\\\/;:\-\p{L}'’–—!@#$%^&*()_+={}\[\]|"<>?~`]+$/u}
                            />
                        </div>
                    </div>
                    <div className="form__footer">
                        <button className="button button--prev" onClick={handlePrev}>
                            Previous
                        </button>
                        <button className={`button button--next ${sending ? "svg-spinners--ring-resize" : ""}`} onClick={handleSubmit} disabled={sending}>
                            {sending ? "Sending..." : "Submit"}
                        </button>
                    </div>
                    <div className="form__fields--row no-input">
                        <div className="field" style={{ width: "100%", maxWidth: 830, marginTop: 35 }}>
                            <i style={{ fontSize: 14, lineHeight: "150%", display: "inline", letterSpacing: "-2%" }}>
                                If you think a child is being hurt, or might be hurt, because of abuse, neglect, or exploitation, please report it. You can report online at{" "}
                                <a href="https://childabuse.illinois.gov/" target="_blank">
                                    https://childabuse.illinois.gov/
                                </a>
                                . If it is an emergency, call the 24-hour Child Abuse Hotline at 1-800-25-ABUSE{" "}
                                <a href="tel:18002522873" target="_blank" style={{ color: "#009978", fontWeight: 700, whiteSpace: "nowrap" }}>
                                    (1-800-252-2873)
                                </a>
                                . If&nbsp;a&nbsp;child is in immediate danger, call 911 right away.
                            </i>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
