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
        image: 'https://res.cloudinary.com/sekul-kamberov/image/upload/v1614530792/drinks/Small/fuji-toddy_rcae9k.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'PG-13', 
        recipeBy: 'LAILA GRAINAWI',
        ingredients: ['grapefruit tonic', 'pink peppercorn', 'cardamom bitters'],
        ingredientsInfo: ['1 cocktail courier cucumber syrup (1oz) bottle', '1 q mixers grapefruit (7.5oz) can'],
        description: 'Light floral citrus, cardamom and pepper spice notes meet fresh mouth-watering cucumber in this spirit-free Mocktail.',
        price: 5.90,
        weight: 350,
        image: 'https://res.cloudinary.com/sekul-kamberov/image/upload/v1614530799/drinks/Small/sekul_ph4zom.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'STARGAZER - MOCKTAIL',
        recipeBy: 'RONNIE BERTELLOTTI',
        ingredients: ['passion fruit', 'morita chile', 'hibiscus', 'lime', 'soda'],
        ingredientsInfo: ['1 cinnamon cardamom tea bag', '1 cocktail courier ginger honey (1oz) bottle'],       
        description: 'Want to imbibe this winter without the hangover? Try this perfect spiced sipper that is alcohol-free! Featuring juicy passion fruit, smoky morita chile and tart hibiscus, this is ideal for sipping fireside all season long!',
        price: 8.90,
        weight: 500,
        image: 'https://res.cloudinary.com/sekul-kamberov/image/upload/v1614530802/drinks/Small/sekulkamberov_hpzmst.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'KOMBUCHA COCKTAIL',
        recipeBy: 'COURIER CLASSICS',
        ingredients: ['belvedere vodka', 'kombucha', 'honey', 'lime', 'aromatics'],
        ingredientsInfo: ['1 cocktail courier hibiscus salt (1tsp) packet', '1 cocktail courier passionfruit purée'],
        description: 'Begin New Year with a refreshing, sharp Kombucha cocktail with hint of effervescence and light citrus complemented by Belvedere Vodka, made from only Polska rye, purified water and distilled by fire.',
        price: 24.99,
        weight: 550,
        image: 'https://res.cloudinary.com/sekul-kamberov/image/upload/v1614530788/drinks/Small/belvedere-kombucha-cocktail-cocktail-shot-scaled_3_ssuq9j.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'THE STEADFAST ROSE',
        recipeBy: 'LEAH SCHOENBURG',
        ingredients: ['vodka', 'sparkling wine', 'rose', 'lemon'],
        ingredientsInfo: ['1 scrappy black lemon bitters (0.5oz) bottle', '1 cocktail courier dried rose buds (6) packet'],
        description: 'Celebrate Valentine’s near and far this year, with the Steadfast Rose. An inspired take on a sparkling wine cocktail featuring vodka, lemon, sparkling wine and floral rose. Sip this rosy effervescent cocktail and transport yourself wherever this Valentine’s Day takes you!',
        price: 35.49,
        weight: 560,
        image: 'https://res.cloudinary.com/sekul-kamberov/image/upload/v1614530783/drinks/Small/a-better-place_jtdobz.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'A BETTER PLACE',
        recipeBy: 'ANDY SEYMOUR',
        ingredients: ['gin', 'ginger', 'honey', 'grapefruit', 'tonic'],
        ingredientsInfo: ['1 cocktail courier ginger honey (2oz)', '1 cocktail courier ginger honey syrup (4oz) bottle'],
        description: 'The everyday, classic Gin & Tonic gets a makeover in this winter focused rendition. Featuring the herbal botanicals of gin, the zip of ginger and the warmth of honey will give you a new sense of affection for this classic of the past and present. After all, sometimes even the classics need',
        price: 31.99,
        weight: 501,
        image: 'https://res.cloudinary.com/sekul-kamberov/image/upload/v1614530785/drinks/Small/bacardi-bramble_jitbqm.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'WINTER IN PARADISE',
        recipeBy: 'PHILIP CACCIATORE',
        ingredients: ['vodka', 'spiced honey maple gastrique', 'grilled'],
        ingredientsInfo: ['1 cinnamon sticks (8) packet', '1 scrappy aromatic bitters (0.5oz) bottle', '2 cocktail courier'],
        description: 'Tropical flavors mingle with wintry spices in this ode to a Floridian winter. Bright ruby red grapefruit citrus is underpinned by notes of cinnamon, cardamom, vanilla, honey, maple, and a touch of clove. Grilled grapefruit adds a smoky aromatic.',
        price: 39.91,
        weight: 420,
        image: 'https://res.cloudinary.com/sekul-kamberov/image/upload/v1614530795/drinks/Small/lavender-paloma_vxdhlm.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'SPICE TRADE MULE',
        recipeBy: 'MAXIME BELFAND',
        ingredients: ['vodka', 'chai', 'ginger', 'lemon'],
        ingredientsInfo: ['1 lemon chai cordial (4oz) bottle', '4 q mixers ginger beer (7.5oz) can', '1 cocktail'],
        description: 'Cozy up to the soothing spices of rooibos chai, balanced by refreshing lemon and zingy ginger beer for a worldly take on the Moscow Mule.',
        price: 43.91,
        weight: 420,
        image: 'https://res.cloudinary.com/sekul-kamberov/image/upload/v1614530789/drinks/Small/cointreau_u6z1bm.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'MASALA DAISY',
        recipeBy: 'RONNIE BERTELLOTTI',
        ingredients: ['tequila', 'turmeric', 'ginger', 'honey', 'lemon', 'tropical tea'],
        ingredientsInfo: ['1 bottle cap', '1 tropical passion tea', '2 cocktail courier turmeric ginger honey (4oz) bottles'],
        description: 'Travel to South East Asia with this inspired take on the margarita. Featuring rich turmeric and spicy ginger, this libation will bring up thoughts of spicy dishes undercut by the tropical edge of lemon, honey and a tropical tea!',
        price: 39.11,
        weight: 510,
        image: 'https://res.cloudinary.com/sekul-kamberov/image/upload/v1614530788/drinks/Small/BBQ-Old-Fashioned_8_wcxeao.jpg',
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
        image: 'https://res.cloudinary.com/sekul-kamberov/image/upload/v1614530788/drinks/Small/Belvedere_fu64hs.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'GUATEMALAN SUNSHINE',
        recipeBy: 'PAUL TANGUAY',
        ingredients: ['rum', 'morita chile', 'chocolate bitters', 'lime', 'pineapple'],
        ingredientsInfo: ['1 cocktail courier morita chile syrup (2oz) bottle', '1 cocktail courier morita chile syrup'],
        description: 'Feel the sunshine of a warm Guatemalan day and sip on this smoky, tropical libation featuring a slightly spicy morita chile, ripe pineapple and the subtleties of dark chocolate for an intellectual sipper.',
        price: 39.10,
        weight: 110,
        image: 'https://res.cloudinary.com/sekul-kamberov/image/upload/v1614530798/drinks/Small/saronno_mldxsi.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'BLACKBERRY BRAMBLE',
        recipeBy: 'COURIER CLASSICS',
        ingredients: ['rum', 'blackberry', 'lemon', 'seasoned rim', 'blackberry'],
        ingredientsInfo: ['1 cocktail courier blackberry syrup (4oz) bottle', '1 cocktail courier simple syrup (4oz) bottle', '1 cocktail courier dehydrated lemon wheels (6) packet', '6 lemons'],
        description: 'A riff on this usually gin-based classic, now featuring the crisp taste of white rum, makes an old standby feel all the more spring. Rich and jammy blackberry pairs perfectly with the zip of lemon for a familiar but altogether unique twist. The swap from gin to citrus-forward rum offers a ',
        price: 35.54,
        weight: 540,
        image: 'https://res.cloudinary.com/sekul-kamberov/image/upload/v1614530792/drinks/Small/el-pepino-margarita-recipe_2_bbojme.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'EL PEPINO MARGARITA', 
        recipeBy: 'RONNIE BERTELLOTTI',
        ingredients: ['tequila', 'cucumber', 'lime', 'agave', 'seasoned rim'],
        ingredientsInfo: ['1 celery salt (1tsp) packet', '1 cocktail courier agave nectar (2oz) bottle', '1 cocktail courier'],
        description: 'Who would have thought a Margarita could get more refreshing? We did! With the addition of subtle cucumber, we’ve made the classic margarita that much more of a summer crusher. A tajin, sea salt and black pepper rim brings out the oh so savory notes of this classic riff so, move ovzzzzzzzz',
        price: 35.44,
        weight: 500,
        image: 'https://res.cloudinary.com/sekul-kamberov/image/upload/v1614530797/drinks/Small/masala-daisy_to1ojf.jpg',
        likes: [],
        reviews: []
      },
      {
        name: 'BBQ OLD FASHIONED', 
        recipeBy: 'LAILA GRAINAWI',
        ingredients: ['bulleit bourbon frontier whiskey', 'blueberry', 'smoke'],
        ingredientsInfo: ['1 scrappys black lemon bitters (0.5oz) bottle', '1 cocktail courier blueberry aigre-doux (4oz)'],
        description: 'Flavors of dark berries and complex smoke are offset by a pop of bright citrus. This unique blend in this Old Fashioned riff is like a backyard BBQ in a glass. Kick back and enjoy!',
        price: 79.99,
        weight: 300,
        image: 'https://res.cloudinary.com/sekul-kamberov/image/upload/v1614530793/drinks/Small/guatemalan_recipe_alt_1_vl0lxv.jpg',
        likes: [],
        reviews: []
      }
    ]

    Drinc
      .create(drincSeed)
      .then(() => console.log('Seeded drincs successfully'))
      .catch((error) => console.log(error))
  })
}
