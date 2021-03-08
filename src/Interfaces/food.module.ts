export type FoodType = 'Pizza' | 'Sandwich' | 'Frieze'

export interface IFood {
    name: string;
    img: string;
    section: FoodType
}