export default function View3({ handleNext, handlePrev }) {
    return (
        <>
            <div className='container'>
                <section className='form padding'>
                    <div className='form__header'>
                        <hr />
                        <h2 className='text-blue'>Section 3: Additional information</h2>
                        <p className='small'>Complete all fields.</p>
                    </div>
                    <div className='form__fields'>
                        <div className='form__fields--row no-input'>
                            <div className='field'>
                                <label className='small bold'>Social determinants of health (SDOH)</label>
                                <p className='sub-label'>Does the member need assistance with any of the following? Check all that apply. Include an explanation in the notes.</p>
                            </div>
                        </div>
                        <div className='form__fields--row checkbox no-input'>
                            <div className='field'>
                                <div className='field__checkbox'>
                                    <input type='checkbox' name='test' id='' />
                                    <label>Food</label>
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' name='test' id='' />
                                    <label>Clothing</label>
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' name='test' id='' />
                                    <label>Housing</label>
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' name='test' id='' />
                                    <label>Transportation</label>
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' name='test' id='' />
                                    <label>Education</label>
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' name='test' id='' />
                                    <label>Employment</label>
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' name='test' id='' />
                                    <label>Literacy</label>
                                </div>
                            </div>
                            <div className='field'>
                                <div className='field__checkbox'>
                                    <input type='checkbox' name='test' id='' />
                                    <label>Social supports</label>
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' name='test' id='' />
                                    <label>Access to healthcare</label>
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' name='test' id='' />
                                    <label>Other:</label>
                                </div>
                                <div className='field__checkbox--text'>
                                    <input type='text' />
                                </div>
                                <div className='field__checkbox'>
                                    <input type='checkbox' name='test' id='' />
                                    <label>No SDOH needs reported</label>
                                </div>
                            </div>
                        </div>
                        <div className='form__fields--row no-input'>
                            <div className='field'>
                                <i>
                                    Visit{" "}
                                    <a href='http://www.meridianconnect.findhelp.com' target='_blank'>
                                        meridianconnect.findhelp.com
                                    </a>{" "}
                                    to find local resources and support.
                                </i>
                            </div>
                        </div>
                        <div className='form__fields--row'>
                            <div className='field'>
                                <label className='small bold'>Special educational services received</label>
                                <textarea></textarea>
                            </div>
                        </div>
                        <div className='form__fields--row'>
                            <div className='field'>
                                <label className='small bold'>Additional notes</label>
                                <textarea></textarea>
                            </div>
                        </div>
                    </div>
                    <div className='form__footer'>
                        <button className='button button--prev' onClick={handlePrev}>
                            Previous
                        </button>
                        <button className='button button--next' onClick={handleNext}>
                            Submit
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
}
