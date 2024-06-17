import api from "./api";

export interface Experiencia {
    id?: string;
    titulo: string;
    descricao: string;
    tipo: string;
    anoInicio: string;
    anoFim: string;
}
export const createExperiencia = async (experiencia: Experiencia) => {
    const quantExperiencias = (await getExperiencias()).length;
    experiencia.id = quantExperiencias.toString();
    const response = await api.post('/experiencias/', experiencia);
    return response.data;
}
export const updateExperiencia = async (experiencia: Experiencia) => {
    const response = await api.put<Experiencia>(`/experiencias/${experiencia.id}`, experiencia);
    return response.data;
}
export const getExperiencias = async () => {
    const response = await api.get<Experiencia[]>('/experiencias/');
    return response.data;
}
export const getExperienciaById = async (id: number) => {
    const response = await api.get<Experiencia>(`/experiencias/${id}`);
    return response.data;
}
export const deleteExperiencia = async (experiencia: Experiencia) => {
    const response = await api.delete<Experiencia>(`/experiencias/${experiencia.id}`);
    return response.data;
}