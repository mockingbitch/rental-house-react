export function handleChange(func, event) {
    const targetName = event.target.name;
    const targetValue = event.target.value;
    func((values) => {
        return ({...values, [targetName]: targetValue});
    });
}