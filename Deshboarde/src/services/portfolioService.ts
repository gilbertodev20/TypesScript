import api from "./api";

export interface Portfolio {
    id: number;
    nome: string;
    imagem: string;
    url: string;
}

export async function updatePortfolio(portfolio: Portfolio): Promise <Portfolio> {
    const response = await api.put <Portfolio> ('/portfolio/1', portfolio)
    return response.data
}
export async function createPortfolio(portfolio: Portfolio): Promise <Portfolio> {
    const response = await api.post <Portfolio> ('/portfolio/1', portfolio)
    return response.data
}
export async function deletePortfolio(portfolio: Portfolio):promise <Portfolio> {
    const response = await api.delete <Portfolio> (`/portfolio/${portfolio.id}`
        return response.data
    )
}