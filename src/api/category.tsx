import instance from './instance';
export const list = () => {
    const url = `/categories`;
    return instance.get(url)
}
export const getone = (id:any) => {
    const url = `/category/${id}`;
    return instance.get(url)
}