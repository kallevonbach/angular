export interface IRecipe{
    id: number,
    name: string,
    description: string,
    method: string,
    ingredients: Array<string>,
    preptime: number,
    cookingtime: number,
    isfeatured: boolean,
    estimatedcost: number,
    starrating: number
}