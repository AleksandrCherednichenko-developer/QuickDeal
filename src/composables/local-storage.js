// запись значений
export function setLS (name, value) {
    localStorage.setItem(name, encodeURIComponent(JSON.stringify(value)));
}

// получение значений
export function getLS (name) {
    return JSON.parse(decodeURIComponent(localStorage.getItem(name)));
}

// удаление значений
export function removeLS (name) {
    localStorage.removeItem(name);
}
