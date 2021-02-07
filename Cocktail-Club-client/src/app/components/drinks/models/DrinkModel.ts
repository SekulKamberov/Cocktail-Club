import { ReviewModel } from './ReviewModel'
export class DrinkModel {
    public _id: string
    public name: string
    public recipeBy: string
    public description: string
    public image: string
    public price: number
    public weight: number
    public ingredients: Array<String>
    public ingredientsInfo: Array<String>
    public likes: Array<String>
    public reviews: ReviewModel[]
  }