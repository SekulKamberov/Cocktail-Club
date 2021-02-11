export class CreateDrinkModel {
  constructor (
    public name: string,
    public recipeBy: string,
    public description: string,
    public image: string,
    public price: number,
    public weight: number,
    public ingredients: Array<String>,
    public ingredientsInfo: Array<String>
    ) {
  }
}
