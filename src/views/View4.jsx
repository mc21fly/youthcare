export default function View4() {
    return (
        <>
            <div className="container">
                <section className="heading padding">
                    <div className="left">
                        <h1 className="text-blue">
                            Thank you for filling out <br className="mbl-hide" />
                            the Member Personal <br className="mbl-hide" />
                            Wellness Assessment.
                        </h1>
                    </div>
                    <div className="right">
                        <p className="bold">
                            We’ll use the answers to connect your foster <br className="mbl-hide" />
                            child to the care they need.
                        </p>
                        <p>
                            <br />
                            Questions? Give us a call.
                            <br />
                            YouthCare Member Services
                            <br />
                            <a href="tel:8442892264" target="_blank" style={{ textDecoration: "underline" }}>
                                844-289-2264
                            </a>{" "}
                            (TTY:{" "}
                            <a href="tel:711" target="_blank" style={{ textDecoration: "underline" }}>
                                711
                            </a>
                            )<br />
                            Monday–Friday, 8:00 a.m. to 6:00 p.m.
                        </p>
                    </div>
                </section>
            </div>
        </>
    );
}
