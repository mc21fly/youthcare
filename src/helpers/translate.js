import dictionary from "../../fields.json";

export default function translate(answers) {
    const translated = {};

    for (const property in answers) {
        const t_name = dictionary[property];

        translated[t_name] = answers[property];
    }

    return translated;
}
