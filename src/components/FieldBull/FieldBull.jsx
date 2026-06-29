import { useEffect, useRef } from "react";

export default function FieldBull({ label }) {
    return (
        <div className="field__bull">
            <label>{label ? label : "Label placeholder"}</label>
        </div>
    );
}
