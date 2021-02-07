const mongoose = require('mongoose')

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let drincSchema = new mongoose.Schema({
  name: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE, unique: [true, 'Drinc already exists.']},
  recipeBy: {type: mongoose.Schema.Types.String},
  ingredients: [{type: mongoose.Schema.Types.String}],
  ingredientsInfo: [{type: mongoose.Schema.Types.String}],
  weight: {type: mongoose.Schema.Types.Number, required: REQUIRED_VALIDATION_MESSAGE},
  description: {type: mongoose.Schema.Types.String},
  price: {type: mongoose.Schema.Types.Number, required: REQUIRED_VALIDATION_MESSAGE},
  image: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE},
  likes: [{type: mongoose.Schema.Types.String}],
  reviews: [{type: mongoose.Schema.Types.ObjectId, default: [], ref: 'Review'}]
})

let Drinc = mongoose.model('Drinc', drincSchema)

module.exports = Drinc
module.exports.seedDrincs = () => {
  Drinc.find({}).then(drincs => {
    if (drincs.length > 0) return

    const drincSeed = [
      {
        name: 'FUJI TODDY',
        recipeBy: 'RONNIE BERTELLOTTI',
        ingredients: ['cinnamon cardamom tea', 'apple', 'ginger', 'honey', 'lemon'],
        ingredientsInfo: ['1 cinnamon cardamom tea bag', '1 cocktail courier ginger honey (1oz) bottle', '1 martinelli gold medal 100% apple juice (10oz) bottle', '1 cocktail courier dehydrated lemon wheels (2) packet', '1 lemon'],
        description: 'The moniker of Japan’s largest peak lends its namesake to an apple developed in Fujisaki, Japan and now to this cold weather inspired libation. Featuring warm cinnamon and cardamom, paired with ginger, honey, lemon and of course apple will take you away to the breathtaking beauty of Mt. Fu',
        price: 39.90,
        weight: 450,
        image: 'https://www.cocktailcourier.com/wp-content/uploads/2020/11/fuji-toddy-1-scaled-800x1200.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'PG-13', 
        recipeBy: 'LAILA GRAINAWI',
        ingredients: ['grapefruit tonic', 'pink peppercorn', 'cardamom bitters', 'cucumber'],
        ingredientsInfo: ['1 cocktail courier cucumber syrup (1oz) bottle', '1 q mixers grapefruit (7.5oz) can', '1 scrappy cardamom bitters (0.5oz) bottle', '1 pink peppercorns (12) packet'],
        description: 'Light floral citrus, cardamom and pepper spice notes meet fresh mouth-watering cucumber in this spirit-free Mocktail.',
        price: 5.90,
        weight: 350,
        image: 'https://www.cocktailcourier.com/wp-content/uploads/2017/12/pg-13-reshoot-hero-scaled-800x1200.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'STARGAZER - MOCKTAIL',
        recipeBy: 'RONNIE BERTELLOTTI',
        ingredients: ['passion fruit', 'morita chile', 'hibiscus', 'lime', 'soda', 'hibiscus salt'],
        ingredientsInfo: ['1 cinnamon cardamom tea bag', '1 cocktail courier ginger honey (1oz) bottle', '1 martinelli gold medal 100% apple juice (10oz) bottle', '1 cocktail courier dehydrated lemon wheels (2) packet', '1 lemon'],       
        description: 'Want to imbibe this winter without the hangover? Try this perfect spiced sipper that is alcohol-free! Featuring juicy passion fruit, smoky morita chile and tart hibiscus, this is ideal for sipping fireside all season long!',
        price: 8.90,
        weight: 500,
        image: 'https://www.cocktailcourier.com/wp-content/uploads/2020/10/stargazer-reshoot-airbrush-scaled-800x1200.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'KOMBUCHA COCKTAIL',
        recipeBy: 'COURIER CLASSICS',
        ingredients: ['belvedere vodka', 'kombucha', 'honey', 'lime', 'aromatics', 'belvedere coupe glasses'],
        ingredientsInfo: ['1 cocktail courier hibiscus salt (1tsp) packet', '1 cocktail courier passionfruit purée (1oz) bottle', '1 hibiscus tea bags', '1 hibiscus tea bags', '1 q mixers club soda (7.5oz) can', '2 limes'],
        description: 'Begin New Year with a refreshing, sharp Kombucha cocktail with hint of effervescence and light citrus complemented by Belvedere Vodka, made from only Polska rye, purified water and distilled by fire.',
        price: 24.99,
        weight: 550,
        image: 'https://www.cocktailcourier.com/wp-content/uploads/2021/01/belvedere-kombucha-cocktail-cocktail-shot-scaled-800x1200.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'THE STEADFAST ROSE',
        recipeBy: 'LEAH SCHOENBURG',
        ingredients: ['vodka', 'sparkling wine', 'rose', 'lemon', 'black lemon bitters'],
        ingredientsInfo: ['1 scrappy black lemon bitters (0.5oz) bottle', '1 cocktail courier dried rose buds (6) packet', '1 cocktail courier rose syrup (4oz) bottle', '2 lemons'],
        description: 'Celebrate Valentine’s near and far this year, with the Steadfast Rose. An inspired take on a sparkling wine cocktail featuring vodka, lemon, sparkling wine and floral rose. Sip this rosy effervescent cocktail and transport yourself wherever this Valentine’s Day takes you!',
        price: 35.49,
        weight: 560,
        image: 'https://www.cocktailcourier.com/wp-content/uploads/2018/04/Steadfast-Rose-800x1200.webp',
        likes: [],
        reviews: []
      },
      {
        name: 'A BETTER PLACE',
        recipeBy: 'ANDY SEYMOUR',
        ingredients: ['gin', 'ginger', 'honey', 'grapefruit', 'tonic'],
        ingredientsInfo: ['1 cocktail courier ginger honey (2oz) bottle', '1 cocktail courier ginger honey syrup (4oz) bottle', '2 grapefruit(s)', '2 q mixers tonic water (7.5oz) cans', '1 cocktail courier candied ginger (8) packet'],
        description: 'The everyday, classic Gin & Tonic gets a makeover in this winter focused rendition. Featuring the herbal botanicals of gin, the zip of ginger and the warmth of honey will give you a new sense of affection for this classic of the past and present. After all, sometimes even the classics need',
        price: 31.99,
        weight: 501,
        image: 'https://www.cocktailcourier.com/wp-content/uploads/2020/01/a-better-place_hero-reshoot-scaled-800x1200.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'WINTER IN PARADISE',
        recipeBy: 'PHILIP CACCIATORE',
        ingredients: ['vodka', 'spiced honey maple gastrique', 'grilled grapefruit', 'aromatic bitters', 'cinnamon'],
        ingredientsInfo: ['1 cinnamon sticks (8) packet', '1 scrappy aromatic bitters (0.5oz) bottle', '2 cocktail courier winter spiced honey maple gastrique (4oz) bottles', '3 grapefruits', '1 cinnamon - ground (1tsp) packet'],
        description: 'Tropical flavors mingle with wintry spices in this ode to a Floridian winter. Bright ruby red grapefruit citrus is underpinned by notes of cinnamon, cardamom, vanilla, honey, maple, and a touch of clove. Grilled grapefruit adds a smoky aromatic.',
        price: 39.91,
        weight: 420,
        image: 'https://www.cocktailcourier.com/wp-content/uploads/2018/12/img_3687-800x1200.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'SPICE TRADE MULE',
        recipeBy: 'MAXIME BELFAND',
        ingredients: ['vodka', 'chai', 'ginger', 'lemon'],
        ingredientsInfo: ['1 lemon chai cordial (4oz) bottle', '4 q mixers ginger beer (7.5oz) can', '1 cocktail courier dehydrated lemon wheels (8) packet', '4 lemons'],
        description: 'Cozy up to the soothing spices of rooibos chai, balanced by refreshing lemon and zingy ginger beer for a worldly take on the Moscow Mule.',
        price: 43.91,
        weight: 420,
        image: 'https://www.cocktailcourier.com/wp-content/uploads/2017/10/Spice-Trade-Mule-800x1200.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'MASALA DAISY',
        recipeBy: 'RONNIE BERTELLOTTI',
        ingredients: ['tequila', 'turmeric', 'ginger', 'honey', 'lemon', 'tropical tea'],
        ingredientsInfo: ['1 bottle cap', '1 tropical passion tea', '2 cocktail courier turmeric ginger honey (4oz) bottles', '6 lemons'],
        description: 'Travel to South East Asia with this inspired take on the margarita. Featuring rich turmeric and spicy ginger, this libation will bring up thoughts of spicy dishes undercut by the tropical edge of lemon, honey and a tropical tea!',
        price: 39.11,
        weight: 510,
        image: 'https://www.cocktailcourier.com/wp-content/uploads/2020/11/masala-daisy-1-scaled-800x1200.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'SARONNO SOUR',
        recipeBy: 'RONNIE BERTELLOTTI',
        ingredients: ['whiskey', 'slated vanilla honey', 'grapefruit', 'amaretto'],
        ingredientsInfo: ['1 cocktail courier salted vanilla honey (4oz) bottle', '1 nutmeg (1tsp) packet', '2 grapefruits'],
        description: 'Head to northern Italy to the birthplace of amaretto: Saronno. Harnessing the intricate and rich flavors of amaretto and pairing them with uplifting grapefruit, this take on the sour is sure to whisk you away to the Mediterranean peninsula in no time! With a bit of whiskey and warm vanill.',
        price: 31.90,
        weight: 400,
        image: 'https://www.cocktailcourier.com/wp-content/uploads/2020/11/saronno-sour-1-scaled-800x1200.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'GUATEMALAN SUNSHINE',
        recipeBy: 'PAUL TANGUAY',
        ingredients: ['rum', 'morita chile', 'chocolate bitters', 'lime', 'pineapple'],
        ingredientsInfo: ['1 cocktail courier morita chile syrup (2oz) bottle', '1 cocktail courier morita chile syrup (4oz) bottle', '1 scrappys chocolate bitters (0.5oz) bottle', '2 dark chocolate square', '2 dole pineapple juice (6oz) cans', '8 limes'],
        description: 'Feel the sunshine of a warm Guatemalan day and sip on this smoky, tropical libation featuring a slightly spicy morita chile, ripe pineapple and the subtleties of dark chocolate for an intellectual sipper.',
        price: 39.10,
        weight: 110,
        image: 'https://www.cocktailcourier.com/wp-content/uploads/2018/11/guatemalan_recipe-800x1200.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'BLACKBERRY BRAMBLE',
        recipeBy: 'COURIER CLASSICS',
        ingredients: ['rum', 'blackberry', 'lemon'],
        ingredientsInfo: ['1 cocktail courier blackberry syrup (4oz) bottle', '1 cocktail courier simple syrup (4oz) bottle', '1 cocktail courier dehydrated lemon wheels (6) packet', '6 lemons'],
        description: 'A riff on this usually gin-based classic, now featuring the crisp taste of white rum, makes an old standby feel all the more spring. Rich and jammy blackberry pairs perfectly with the zip of lemon for a familiar but altogether unique twist. The swap from gin to citrus-forward rum offers a ',
        price: 35.54,
        weight: 540,
        image: 'https://www.cocktailcourier.com/wp-content/uploads/2020/03/blackberry-bramble-alt.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'EL PEPINO MARGARITA', 
        recipeBy: 'RONNIE BERTELLOTTI',
        ingredients: ['tequila', 'cucumber', 'lime', 'agave', 'seasoned rim'],
        ingredientsInfo: ['1 celery salt (1tsp) packet', '1 cocktail courier agave nectar (2oz) bottle', '1 cocktail courier cucumber syrup (2oz) bottle', '1 cocktail courier tajin, black pepper and sea salt rimmer (1tsp) packet', '1 cocktail courier dehydrated cucumbers (6) packet', '6 limes'],
        description: 'Who would have thought a Margarita could get more refreshing? We did! With the addition of subtle cucumber, we’ve made the classic margarita that much more of a summer crusher. A tajin, sea salt and black pepper rim brings out the oh so savory notes of this classic riff so, move ovzzzzzzzz',
        price: 35.44,
        weight: 500,
        image: 'https://www.cocktailcourier.com/wp-content/uploads/2019/06/el-pepino-margarita-alt-800x1200.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'BBQ OLD FASHIONED', 
        recipeBy: 'LAILA GRAINAWI',
        ingredients: ['bulleit bourbon frontier whiskey', 'blueberry aigre-doux', 'smoke', 'brûléed lemo'],
        ingredientsInfo: ['1 scrappys black lemon bitters (0.5oz) bottle', '1 cocktail courier blueberry aigre-doux (4oz) bottle', '1 cocktail courier dehydrated lemon wheels (6) packet', '1 wood smoking chips (6) packet'],
        description: 'Flavors of dark berries and complex smoke are offset by a pop of bright citrus. This unique blend in this Old Fashioned riff is like a backyard BBQ in a glass. Kick back and enjoy!',
        price: 79.99,
        weight: 300,
        image: 'https://www.cocktailcourier.com/wp-content/uploads/2018/05/BBQ-Old-Fashioned-800x1200.jpg',
        likes: [],
        reviews: []
      }
    ]

    Drinc
      .create(drincSeed)
      .then(() => console.log('Seeded drincs successfully.'))
      .catch((error) => console.log(error))
  })
}
