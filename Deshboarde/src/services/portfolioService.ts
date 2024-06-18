import api from "./api";

export interface Portfolio {
    id: number;
    image: string;
    link: string;
    title: string;

}

export const createPortfolio = async (portfolio: Portfolio) => {
    const quantPortfolios = (await getPortfolio()).length;
    portfolio.id = quantPortfolios;
    const response = await api.post('/portfolios/', portfolio);
    return response.data;
}
export const updatePortfolio = async (portfolio: Portfolio) => {
    const response = await api.put<Portfolio>(`/portfolios/${portfolio.id}`, portfolio);
    return response.data;
}
export const getPortfolio = async () => {
    const response = await api.get<Portfolio[]>('/portfolios/');
    return response.data;
}
export const getPortfolioById = async (id: number) => {
    const response = await api.get<Portfolio>(`/portfolios/${id}`);
    return response.data;
}
export const deletePortfolio = async (portfolio: Portfolio) => {
    const response = await api.delete<Portfolio>(`/Portfolios/${portfolio.id}`);
    return response.data;
}