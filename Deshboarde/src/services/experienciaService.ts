import api from "./api";

export interface Experiencia {
    id?: string;
    titulo: string;
    descricao: string;
    tipo: string;
    anoInicio: number | "";
    anoFim: number | "";
}
export const createExperiencia = async (experiencia: Experiencia): Promise<Experiencia> => {
    experiencia.id = ((await getExperiencias()).length + 1).toString();
    const response = await api.post<Experiencia>('/experiencias', experiencia);
    return response.data;
}

export const getExperiencias = async (): Promise<Experiencia[]> => {
    const response = await api.get<Experiencia[]>('/experiencias');
    return response.data;
}
export const getExperienciaById = async (id: number): Promise<Experiencia> => {
    const response = await api.get<Experiencia>(`/experiencias/${id}`);
    return response.data;
}

export const getExperienciaByTipo = async (tipo: string): Promise<Experiencia[]> => {
    const response = await api.get<Experiencia[]>(`/experiencias?tipo=${tipo}`);
    return response.data;
}


export const updateExperiencia = async (experiencia: Experiencia): Promise<Experiencia> => {
    const response = await api.put<Experiencia>(`/experiencias/${experiencia.id}`, experiencia);
    return response.data;
}
export const deleteExperiencia = async (id: string | undefined): Promise<Experiencia> => {
    const response = await api.delete<Experiencia>(`/experiencias/${id}`);
    return response.data;
}
export const createOrUpdateExperiencia = async (experiencia: Experiencia): Promise<Experiencia> => {
    if (experiencia.id === '0')  {
        return createExperiencia(experiencia);
    } else {
        return updateExperiencia(experiencia);
    }
}