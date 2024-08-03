export default function useStorage(name) {
    function store(key, value) {
        const items = localStorage.getItem(name);
        const parsed = { ...JSON.parse(items) };

        parsed[key] = value;
        localStorage.setItem(name, JSON.stringify(parsed));
    }

    function getStored() {
        const items = localStorage.getItem(name);

        return JSON.parse(items);
    }

    return [store, getStored];
}
