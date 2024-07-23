import api from "./api";

export interface Portfolio {
    id?: string;
    image: string;
    link: string;
    title: string;

}

export const createPortfolio = async (portfolio: Portfolio): Promise<Portfolio> => {
    portfolio.id = ((await getPortfolio()).length + 1).toString();
    const response = await api.post<Portfolio>('/portfolio', portfolio);
    return response.data;
}
export const getPortfolio = async (): Promise<Portfolio[]> => {
    const response = await api.get<Portfolio[]>('/portfolio');
    return response.data;
}
export const deletePortfolio = async (id: string | undefined): Promise<Portfolio> => { 
    const response = await api.delete<Portfolio>(`/portfolio/${id}`);
    return response.data;
}
export const updatePortfolio = async (portfolio: Portfolio) : Promise<Portfolio> =>  {
    const response = await api.put<Portfolio>(`/portfolio/${portfolio.id}`, portfolio);
    return response.data;
}
export const getPortfolioById = async (id: number): Promise<Portfolio> => {
    const response = await api.get<Portfolio>(`/portfolio/${id}`);
    return response.data;
}
export const createOrUpdatePortfolio = async (portfolio: Portfolio): Promise<Portfolio> => {
    if (portfolio.id === '0')  {
        return createPortfolio(portfolio);
    } else {
        return updatePortfolio(portfolio);
    }
}