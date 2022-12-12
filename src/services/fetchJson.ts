export const fetchJson = async <T>(url: string): Promise<T> => {
    const rawData = await fetch(url);
    const { data } = await rawData.json();
    return data;
};
