export default function Footer() {
    return (
        <div className="container grey">
            <footer>
                <p>
                    YouthCare complies with applicable Federal civil rights laws and does not discriminate on the basis of race, <br className="mbl-hide" />
                    color, national origin, age, disability, or sex.
                </p>
                <p>
                    &copy; 2024. All rights reserved.{" "}
                    <a
                        href="https://www.ilmeridian.com/privacy-practices.html?utm_source=salesforce&utm_medium=email&utm_campaign=youthcare&utm_term=yc_fosterparents_members&utm_content=hrs"
                        target="_blank"
                    >
                        Privacy Policy
                    </a>
                    &nbsp;{" "}
                    <a
                        href="https://www.ilmeridian.com/terms-conditions.html?utm_source=salesforce&utm_medium=email&utm_campaign=youthcare&utm_term=yc_fosterparents_members&utm_content=hrs"
                        target="_blank"
                    >
                        Terms and Conditions
                    </a>
                </p>
            </footer>
        </div>
    );
}
