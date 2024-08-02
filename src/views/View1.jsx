import { useEffect, useState } from "react";
import FieldDate from "../components/FieldDate/FieldDate";

export default function View1({ handleNext }) {
    const [answers, setAnswers] = useState({});

    useEffect(() => {
        const stored = localStorage.getItem("answers_v1");
        const parsed = JSON.parse(stored);

        if (parsed) {
            for (const [key, value] of Object.entries(parsed)) {
                const field = document.querySelector(`#${key}`);

                if (value) {
                    field.parentElement.classList.remove("hidden");
                    field.dataset.hidden = false;
                }

                field.value = value;
            }

            setAnswers(parsed);
        }
    }, []);

    function handleInput(e) {
        const _answers = { ...answers };
        _answers[`${e.target.id}`] = e.target.value;

        setAnswers({ ..._answers });
        localStorage.setItem("answers_v1", JSON.stringify({ ..._answers }));
    }

    function handleSelect(e, condition) {
        const _answers = { ...answers };
        const sub = document.querySelector(`#${e.target.id}sub`);

        if (e.target.value === condition) {
            sub.parentElement.classList.remove("hidden");
            sub.dataset.hidden = "false";

            _answers[`${e.target.id}`] = e.target.value;
        } else {
            sub.parentElement.classList.add("hidden");
            sub.dataset.hidden = "true";

            _answers[`${e.target.id}`] = e.target.value;
            _answers[`${e.target.id}sub`] = null;
        }

        setAnswers({ ..._answers });
        localStorage.setItem("answers_v1", JSON.stringify({ ..._answers }));
    }

    function handleBlur(e) {
        e.target.style.border = "1px solid #414042";
        e.target.style.outline = "none";
    }

    function validate() {
        let isValid = true;
        const questions = document.querySelectorAll("[data-question]");
        const selects = document.querySelectorAll("[data-select]");

        questions.forEach((question) => {
            if (question.value === "" && question.dataset.hidden !== "true") {
                question.style.outline = "2px solid red";
                question.style.border = "1px solid red";
                isValid = false;
            }

            if (question.dataset.date && question.dataset.hidden !== "true" && !isValidDate(question.value)) {
                question.style.outline = "2px solid red";
                question.style.border = "1px solid red";
                isValid = false;
            }
        });

        selects.forEach((select) => {
            if (select.value === "Select") {
                select.style.outline = "2px solid red";
                select.style.border = "1px solid red";
                isValid = false;
            }
        });

        if (isValid) handleNext();
    }

    function isValidDate(date) {
        const match = date.match(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/g);

        if (match) return true;
        return false;
    }

    return (
        <>
            <div className='container'>
                <section className='heading padding'>
                    <div className='left'>
                        <h1 className='text-blue'>
                            Fill out the Personal <br className='mbl-hide' />
                            Wellness Assessment <br className='mbl-hide' />
                            for foster children.
                        </h1>
                    </div>
                    <div className='right'>
                        <p>
                            The Personal Wellness Assessment is a short form about the YouthCare member’s health journey. It’s important for us to know about health conditions, recent hospital visits, medications, and more. This way, we can
                            connect foster children with the right care.
                        </p>
                    </div>
                </section>
            </div>
            <div className='container'>
                <section className='form padding'>
                    <div className='form__header'>
                        <hr />
                        <h2 className='text-blue'>Section 1: Assessment&nbsp;basics</h2>
                        <p className='small'>Complete all fields.</p>
                    </div>
                    <div className='form__fields'>
                        <div className='form__fields--row'>
                            <FieldDate id='q1' label='Date of assessment' />
                            {/* <div className='field'>
                                <label htmlFor='q1' className='small bold'>
                                    Date of assessment
                                </label>
                                <input name='q1' id='q1' data-question data-date type='text' placeholder='MM/DD/YYYY' onChange={handleInput} onBlur={handleBlur} />
                            </div> */}
                        </div>
                        <div className='form__fields--row'>
                            <div className='field'>
                                <label htmlFor='q2' className='small bold'>
                                    Member’s chosen name, gender, and/or&nbsp;pronouns
                                </label>
                                <input name='q2' id='q2' data-question type='text' onChange={handleInput} onBlur={handleBlur} />
                            </div>
                        </div>
                        <div className='form__fields--row'>
                            <div className='field'>
                                <label htmlFor='q3' className='small bold'>
                                    Name of person completing assessment
                                </label>
                                <input name='q3' id='q3' data-question type='text' onChange={handleInput} onBlur={handleBlur} />
                            </div>
                        </div>
                        <div className='form__fields--row'>
                            <div className='field'>
                                <label htmlFor='q4' className='small bold'>
                                    Phone number of person completing assessment
                                </label>
                                <input name='q4' id='q4' data-question type='text' onChange={handleInput} onBlur={handleBlur} />
                            </div>
                            <div className='field'>
                                <label htmlFor='q4sub' className='small bold'>
                                    Email of person completing assessment
                                </label>
                                <input name='q4sub' id='q4sub' data-question type='text' onChange={handleInput} onBlur={handleBlur} />
                            </div>
                        </div>
                        <div className='form__fields--row'>
                            <div className='field custom-select'>
                                <label htmlFor='q5' className='small bold'>
                                    Relationship of the person completing this assessment to the YouthCare member
                                </label>
                                <select name='q5' id='q5' data-select onChange={(e) => handleSelect(e, "Other")} onBlur={handleBlur}>
                                    <option value='Select'>Select</option>
                                    <option value='Biological parent'>Biological parent</option>
                                    <option value='Foster parent'>Foster parent</option>
                                    <option value='Adoptive parent/legal guardian'>Adoptive parent/legal guardian</option>
                                    <option value='Caseworker'>Caseworker</option>
                                    <option value='Caseworker supervisor'>Caseworker supervisor</option>
                                    <option value='Facility/residential contact'>Facility/residential contact</option>
                                    <option value='Self/member'>Self/member</option>
                                    <option value='Other'>Other</option>
                                </select>
                            </div>
                            <div className='field hidden'>
                                <label htmlFor='q5sub' className='small bold'>
                                    If “Other” please describe
                                </label>
                                <input name='q5sub' id='q5sub' data-question data-hidden type='text' onChange={handleInput} onBlur={handleBlur} />
                            </div>
                        </div>
                        <div className='form__fields--row'>
                            <div className='field custom-select'>
                                <label htmlFor='q6' className='small bold'>
                                    Youth placement at time of assessment
                                </label>
                                <select name='q6' id='q6' data-select onChange={(e) => handleSelect(e, "Other")} onBlur={handleBlur}>
                                    <option value='Select'>Select</option>
                                    <option value='Foster home'>Foster home</option>
                                    <option value='Hospital'>Hospital</option>
                                    <option value='Group home or care setting'>Group home or care setting</option>
                                    <option value='Shelter'>Shelter</option>
                                    <option value='Detention/incarceration'>Detention/incarceration</option>
                                    <option value='Adoptive/guardian home'>Adoptive/guardian home</option>
                                    <option value='Biological parent'>Biological parent</option>
                                    <option value='Fictive kin (not related by birth or marriage)'>Fictive kin (not related by birth or marriage)</option>
                                    <option value='Transitional living placement'>Transitional living placement</option>
                                    <option value='Independent living placement'>Independent living placement</option>
                                    <option value='Other'>Other</option>
                                </select>
                            </div>
                            <div className='field hidden'>
                                <label htmlFor='q6sub' className='small bold'>
                                    If “Other” please describe
                                </label>
                                <input name='q6sub' id='q6sub' data-question data-hidden type='text' onChange={handleInput} onBlur={handleBlur} />
                            </div>
                        </div>
                        <div className='form__fields--row'>
                            <div className='field custom-select'>
                                <label htmlFor='q7' className='small bold'>
                                    DCFS permanency goal
                                </label>
                                <select name='q7' id='q7' data-select onChange={(e) => handleSelect(e, "Adoption/guardianship subsidy end date")} onBlur={handleBlur}>
                                    <option value='Select'>Select</option>
                                    <option value='Return home'>Return home</option>
                                    <option value='Substitute/foster care pending Termination of Parental Rights (TPR)'>Substitute/foster care pending Termination of Parental Rights (TPR)</option>
                                    <option value='Guardianship'>Guardianship</option>
                                    <option value='Adoption'>Adoption</option>
                                    <option value='Independence'>Independence</option>
                                    <option value='Cannot be provided for in a home environment'>Cannot be provided for in a home environment</option>
                                    <option value='Continuing foster care'>Continuing foster care</option>
                                    <option value='Unknown at this time'>Unknown at this time</option>
                                    <option value='N/A; permanency hearing has not yet occurred'>N/A; permanency hearing has not yet occurred</option>
                                    <option value='N/A; FYIC (former youth in care)'>N/A; FYIC (former youth in care)</option>
                                    <option value='Adoption/guardianship subsidy end date'>Adoption/guardianship subsidy end date</option>
                                </select>
                            </div>
                            <div className='field hidden'>
                                <label htmlFor='q7sub' className='small bold'>
                                    Please specify end date
                                </label>
                                <input name='q7sub' id='q7sub' data-question data-hidden data-date type='text' placeholder='MM/DD/YYYY' onChange={handleInput} onBlur={handleBlur} />
                            </div>
                        </div>
                    </div>
                    <div className='form__footer'>
                        <button className='button button--next' onClick={validate}>
                            Next
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}
