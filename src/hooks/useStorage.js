export default function useStorage(name) {
    function store(key, value) {
        const items = localStorage.getItem(name);
        const parsed = { ...JSON.parse(items) };

        parsed[key] = value;
        localStorage.setItem(name, JSON.stringify(parsed));
    }

    function getStored(key) {
        const items = localStorage.getItem(name);
        const parsed = JSON.parse(items);

        if (parsed && key) {
            return parsed[key];
        }

        return parsed;
    }

    return [store, getStored];
}
