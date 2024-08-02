import { useEffect, useState } from "react";

export default function View2({ handleNext, handlePrev }) {
    const [answers, setAnswers] = useState({});
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        const stored = localStorage.getItem("answers_v2");
        const parsed = JSON.parse(stored);

        if (parsed) {
            for (const [key, value] of Object.entries(parsed)) {
                const field = document.querySelector(`#${key}`);

                if (key.startsWith("q11c")) {
                    field.checked = value;

                    if (key === "q11c25i") {
                        field.value = value;
                    }

                    if (key === "q11c25") {
                        setIsDisabled(!value);
                    }
                } else {
                    field.value = value;
                }
            }

            setAnswers(parsed);
        }
    }, []);

    function handleInput(e) {
        const _answers = {
            ...answers,
        };
        _answers[`${e.target.id}`] = e.target.value;

        setAnswers({
            ..._answers,
        });
        localStorage.setItem(
            "answers_v2",
            JSON.stringify({
                ..._answers,
            })
        );
    }

    function handleCheckmark(e, callback) {
        const _answers = {
            ...answers,
        };
        _answers[`${e.target.id}`] = e.target.checked;

        if (callback) {
            callback(e.target.checked);
        }

        setAnswers({
            ..._answers,
        });
        localStorage.setItem(
            "answers_v2",
            JSON.stringify({
                ..._answers,
            })
        );
    }

    function q11c25(value) {
        document.querySelector("#q11c25i").disabled = !value;
    }

    function handleBlur(e) {
        e.target.style.border = "1px solid #414042";
        e.target.style.outline = "none";
    }

    function validate() {
        let isValid = true;
        const questions = document.querySelectorAll("[data-question]");
        const checkboxes = document.querySelectorAll("[data-checkbox]");

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

        checkboxes.forEach((checkbox) => {
            if (!checkbox.checked) {
                const answers = localStorage.getItem("answers_v2");
                const parsed = JSON.parse(answers);

                const q = {};
                q[`${checkbox.id}`] = false;

                localStorage.setItem(
                    "answers_v2",
                    JSON.stringify({
                        ...parsed,
                        ...q,
                    })
                );
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
                <section className='form padding'>
                    <div className='form__header'>
                        <hr />
                        <h2 className='text-blue'>Section 2: About the member’s physical & mental health</h2>
                        <p className='small'>Complete all fields.</p>
                    </div>
                    <div className='form__fields'>
                        <div className='form__fields--row'>
                            <div className='field'>
                                <label htmlFor='q8' className='small bold'>
                                    Primary care physician
                                </label>
                                <input name='q8' id='q8' data-question type='text' onChange={handleInput} onBlur={handleBlur} />
                            </div>
                            <div className='field'>
                                <label htmlFor='q8sub' className='small bold'>
                                    Date of last visit
                                </label>
                                <input name='q8sub' id='q8sub' data-question data-date type='text' placeholder='MM/DD/YYYY' onChange={handleInput} onBlur={handleBlur} />
                            </div>
                        </div>
                        <div className='form__fields--row'>
                            <div className='field'>
                                <label htmlFor='q9' className='small bold'>
                                    Dental provider
                                </label>
                                <input name='q9' id='q9' data-question type='text' onChange={handleInput} onBlur={handleBlur} />
                            </div>
                            <div className='field'>
                                <label htmlFor='q9sub' className='small bold'>
                                    Date of last visit
                                </label>
                                <input name='q9sub' id='q9sub' data-question data-date type='text' placeholder='MM/DD/YYYY' onChange={handleInput} onBlur={handleBlur} />
                            </div>
                        </div>
                        <div className='form__fields--row'>
                            <div className='field'>
                                <label htmlFor='q10' className='small bold'>
                                    List of member’s medications
                                </label>
                                <textarea name='q10' id='q10' data-question onChange={handleInput} onBlur={handleBlur}></textarea>
                            </div>
                            <div className='field'>
                                <label htmlFor='q10sub' className='small bold'>
                                    Additional treatments or services
                                </label>
                                <textarea name='q10sub' id='q10sub' data-question onChange={handleInput} onBlur={handleBlur}></textarea>
                            </div>
                        </div>
                        <div className='form__fields--row no-input'>
                            <div className='field'>
                                <label className='small bold'>Physical health</label>
                                <p className='sub-label'>Within the last 12 months, has the member received treatment for, or experienced symptoms related to, any of the following conditions and needs? Check all that apply.</p>
                            </div>
                        </div>
                        <div className='form__fields--row checkbox'>
                            <div className='field'>
                                <div className='field__checkbox'>
                                    <input type='checkbox' data-checkbox onChange={handleCheckmark} name='q11c1' id='q11c1' />
                                    <label htmlFor='q11c1'>Heart condition/high blood pressure</label>
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' data-checkbox onChange={handleCheckmark} name='q11c2' id='q11c2' />
                                    <label htmlFor='q11c2'>Asthma</label>
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' data-checkbox onChange={handleCheckmark} name='q11c3' id='q11c3' />
                                    <label htmlFor='q11c3'>Seizure/epilepsy</label>
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' data-checkbox onChange={handleCheckmark} name='q11c4' id='q11c4' />
                                    <label htmlFor='q11c4'>Failure to thrive</label>
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' data-checkbox onChange={handleCheckmark} name='q11c5' id='q11c5' />
                                    <label htmlFor='q11c5'>
                                        Central nervous system/traumatic <br />
                                        brain injury/shaken baby
                                    </label>
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' data-checkbox onChange={handleCheckmark} name='q11c6' id='q11c6' />
                                    <label htmlFor='q11c6'>Broken bones</label>
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' data-checkbox onChange={handleCheckmark} name='q11c7' id='q11c7' />
                                    <label htmlFor='q11c7'>Internal injuries</label>
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' data-checkbox onChange={handleCheckmark} name='q11c8' id='q11c8' />
                                    <label htmlFor='q11c8'>Diabetes</label>
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' data-checkbox onChange={handleCheckmark} name='q11c9' id='q11c9' />
                                    <label htmlFor='q11c9'>Hemophilia</label>
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' data-checkbox onChange={handleCheckmark} name='q11c10' id='q11c10' />
                                    <label htmlFor='q11c10'>Sickle cell disease</label>
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' data-checkbox onChange={handleCheckmark} name='q11c11' id='q11c11' />
                                    <label htmlFor='q11c11'>Cancer</label>
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' data-checkbox onChange={handleCheckmark} name='q11c12' id='q11c12' />
                                    <label htmlFor='q11c12'>
                                        Cerebral palsy/muscular dystrophy/
                                        <br />
                                        multiple sclerosis/paralysis
                                    </label>
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' data-checkbox onChange={handleCheckmark} name='q11c13' id='q11c13' />
                                    <label htmlFor='q11c13'>Cystic fibrosis</label>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='field__checkbox'>
                                    <input type='checkbox' data-checkbox onChange={handleCheckmark} name='q11c14' id='q11c14' />
                                    <label htmlFor='q11c14'>Serious burns that require wound care or surgery</label>
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' data-checkbox onChange={handleCheckmark} name='q11c15' id='q11c15' />
                                    <label htmlFor='q11c15'>IV antibiotics</label>
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' data-checkbox onChange={handleCheckmark} name='q11c16' id='q11c16' />
                                    <label htmlFor='q11c16'>HIV-positive/AIDS</label>
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' data-checkbox onChange={handleCheckmark} name='q11c17' id='q11c17' />
                                    <label htmlFor='q11c17'>Transplant or transplant candidate</label>
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' data-checkbox onChange={handleCheckmark} name='q11c18' id='q11c18' />
                                    <label htmlFor='q11c18'>Hospitalization (within the last 30 days)</label>
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' data-checkbox onChange={handleCheckmark} name='q11c19' id='q11c19' />
                                    <label htmlFor='q11c19'>Pregnancy</label>
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' data-checkbox onChange={handleCheckmark} name='q11c20' id='q11c20' />
                                    <label htmlFor='q11c20'>Private duty nursing/skilled nursing visits</label>
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' data-checkbox onChange={handleCheckmark} name='q11c21' id='q11c21' />
                                    <label htmlFor='q11c21'>Personal care services</label>
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' data-checkbox onChange={handleCheckmark} name='q11c22' id='q11c22' />
                                    <label htmlFor='q11c22'>
                                        Home medical equipment/Durable <br />
                                        Medical Equipment (DME) need identified
                                    </label>
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' data-checkbox onChange={handleCheckmark} name='q11c23' id='q11c23' />
                                    <label htmlFor='q11c23'>Hearing or vision loss (excluding eyeglasses)</label>
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' data-checkbox onChange={handleCheckmark} name='q11c24' id='q11c24' />
                                    <label htmlFor='q11c24'>Osteogenesis imperfecta (brittle bone disease)</label>
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' data-checkbox onChange={(e) => handleCheckmark(e, q11c25)} name='q11c25' id='q11c25' />
                                    <label htmlFor='q11c25'>Any conditions not listed above:</label>
                                </div>
                                <div className='field__checkbox--text'>
                                    <input type='text' name='q11c25i' id='q11c25i' disabled={isDisabled} onChange={handleInput} onBlur={handleBlur} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='form__footer'>
                        <button className='button button--prev' onClick={handlePrev}>
                            Previous
                        </button>
                        <button className='button button--next' onClick={validate}>
                            Next
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}
