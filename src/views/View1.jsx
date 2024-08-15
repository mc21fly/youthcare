import { FieldText, FieldSelect, FieldEmail, FieldDate } from "../components";
import { useValidation } from "../hooks";

export default function View1({ handleNext }) {
    const [validate, Validator] = useValidation();

    return (
        <>
            <div className="container">
                <section className="heading padding">
                    <div className="left">
                        <h1 className="text-blue">
                            Fill out the Personal <br className="mbl-hide" />
                            Wellness Assessment <br className="mbl-hide" />
                            for foster children.
                        </h1>
                    </div>
                    <div className="right">
                        <p>
                            The Personal Wellness Assessment is a short form about the YouthCare member’s health journey. It’s important for us to know about health conditions,
                            recent hospital visits, medications, and more. This way, we can connect foster children with the right care.
                        </p>
                    </div>
                </section>
            </div>
            <div className="container">
                <section className="form padding">
                    <div className="form__header">
                        <hr />
                        <h2 className="text-blue">Section 1: Assessment&nbsp;basics</h2>
                        <p className="small">Complete all fields.</p>
                    </div>
                    <div className="form__fields">
                        <div className="form__fields--row">
                            <FieldDate id="q1" label="Date of assessment" validator={Validator} />
                        </div>
                        <div className="form__fields--row">
                            <FieldText id="q2" label="Member’s chosen name, gender, and/or&nbsp;pronouns" validator={Validator} />
                        </div>
                        <div className="form__fields--row">
                            <FieldText id="q3" label="Name of person completing assessment" validator={Validator} />
                        </div>
                        <div className="form__fields--row">
                            <FieldText id="q4" label="Phone number of person completing assessment" validator={Validator} numbers={true} />
                            <FieldEmail id="q5" label="Email of person completing assessment" validator={Validator} />
                        </div>
                        <div className="form__fields--row">
                            <FieldSelect
                                id="q6"
                                label="Relationship of the person completing this assessment to the YouthCare member"
                                options={[
                                    "Biological parent",
                                    "Foster parent",
                                    "Adoptive parent/legal guardian",
                                    "Caseworker",
                                    "Caseworker supervisor",
                                    "Facility/residential contact",
                                    "Self/member",
                                    "Other",
                                ]}
                                subCond="Other"
                                subLabel="If “Other” please describe"
                                validator={Validator}
                            />
                        </div>
                        <div className="form__fields--row">
                            <FieldSelect
                                id="q7"
                                label="Youth placement at time of assessment"
                                options={[
                                    "Foster home",
                                    "Hospital",
                                    "Group home or care setting",
                                    "Shelter",
                                    "Detention/incarceration",
                                    "Adoptive/guardian home",
                                    "Biological parent",
                                    "Fictive kin (not related by birth or marriage)",
                                    "Transitional living placement",
                                    "Independent living placement",
                                    "Residential Treatment",
                                    "Other",
                                ]}
                                subCond="Other"
                                subLabel="If “Other” please describe"
                                validator={Validator}
                            />
                        </div>
                        <div className="form__fields--row">
                            <FieldSelect
                                id="q8"
                                label="DCFS permanency goal"
                                options={[
                                    "Return home",
                                    "Substitute/foster care pending Termination of Parental Rights (TPR)",
                                    "Guardianship",
                                    "Adoption",
                                    "Independence",
                                    "Cannot be provided for in a home environment",
                                    "Continuing foster care",
                                    "Unknown at this time",
                                    "N/A; permanency hearing has not yet occurred",
                                    "N/A; FYIC (former youth in care)",
                                    "Adoption/guardianship subsidy end date",
                                ]}
                                subCond="Adoption/guardianship subsidy end date"
                                subLabel="Please specify end date"
                                subType="date-future"
                                validator={Validator}
                            />
                        </div>
                    </div>
                    <div className="form__footer">
                        <button className="button button--next" onClick={() => validate(handleNext)}>
                            Next
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}
