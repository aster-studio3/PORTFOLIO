/* ===== EDIT YOUR WORK HERE =====
   1) CATEGORIES: your industries. Each one gets its own page (category.html?c=slug).
      slug   = short lowercase name used in links (no spaces)
      cover  = image or video shown on the category tile (optional)
   2) WORK: every photo or video you made.
      category = the slug of its industry
      featured = true  -> also shown in "Selected work" on the home page
      type     = "image" or "video"
      ratio    = "4/5", "1/1", "16/9" or "9/16"
      src      = file path, e.g. "assets/work/cola.mp4"   poster = video thumbnail (optional)
   Empty src shows a colored placeholder. */
const CATEGORIES=[
 {slug:"beauty",name:"Beauty",blurb:"Skincare, fragrance and cosmetics visuals with a premium finish.",cover:"assets/🎀🎀🎀🎀🎀 (1).jpg"},
 {slug:"fashion",name:"Fashion",blurb:"Campaign films and lookbooks for clothing and accessory brands.",cover:"assets/Luxury Burgundy Handbag for Women_edited.jpg"},
 {slug:"food",name:"Food & Drink",blurb:"Appetizing ads for restaurants, cafés and beverage brands.",cover:"assets/Indulgent strawberry cheesecake freakshake with whipped cream and cookie crumble.jpg"},
 {slug:"Homeware",name:"Homeware",blurb:"Interior styling, product showcases and cinematic home decor visuals.",cover:"assets/Coquette Bow Teacup ☕🎀 Coffee Girlie Aesthetic _ Amazon find _ coffee mug.jpg"},
 {slug:"Jewelry",name:"Jewelry",blurb:"Luxury product showcases and elegant cinematic campaigns for jewelry brands.",cover:"assets/🩶🩶.jpg"},
 {slug:"sports",name:"Fitness & Sports",blurb:"Dynamic promotional films for fitness brands, sports products and activewear.",cover:"assets/Pink Stanley Cup _ Tennis Product Photograp.jpg"},
 {slug:"Perfume",name:"Perfume",blurb:"Elegant fragrance campaigns and cinematic visuals for luxury perfume brands.",cover:"assets/Miss Dior Cherie Blooming Bouquet 100 мл — ніжний квітковий аромат_edited.jpg"},
 {slug:"Pet Products",name:"Pet Products",blurb:"Creative product commercials and engaging visuals for pet brands and accessories.",cover:"assets/А Ваш котик заценил уже корм _Холка__.jpg"},
];
const WORK=[
//  {title:"Cold Brew Launch",brand:"Brand name",category:"food",type:"image",ratio:"5/8",src:"assets/Indulgent strawberry cheesecake freakshake with whipped cream and cookie crumble.jpg",poster:"",featured:true},
//  {title:"Evening Menu",brand:"Brand name",category:"food",type:"image",ratio:"4/5",src:""},
//  {title:"Burger Hero Shot",brand:"Brand name",category:"food",type:"image",ratio:"16/9",src:""},
//  {title:"Summer Collection Film",brand:"Brand name",category:"fashion",type:"image",ratio:"5/8",src:"assets/Luxury Burgundy Handbag for Women_edited.jpg",poster:"",featured:true},
//  {title:"Street Lookbook",brand:"Brand name",category:"fashion",type:"image",ratio:"4/5",src:""},
 {title:"Signature Fragrance",brand:"Brand name",category:"beauty",type:"image",ratio:"9/16",src:"assets/Visual_editor_portfolio_showcase…_cc3e808e_2K.png",featured:true},
 {title:"Glow Serum Campaign",brand:"Brand name",category:"beauty",type:"image",ratio:"9/16",src:"assets/Visual_editor_portfolio_showcase…_cc83cd97_2K.png",poster:""},
  {title:"Glow Serum Campaign",brand:"Brand name",category:"beauty",type:"image",ratio:"9/16",src:"assets/Visual_editor_portfolio_layout_s…_b396a58e_2K.png",poster:""},

//  {title:"Skyline Residences",brand:"Brand name",category:"Homeware",type:"image",ratio:"5/8",src:"assets/Coquette Bow Teacup ☕🎀 Coffee Girlie Aesthetic _ Amazon find _ coffee mug.jpg",featured:true},
//  {title:"Smart Watch Reveal",brand:"Brand name",category:"Jewelry",type:"image",ratio:"5/8",src:"assets/🩶🩶.jpg",poster:"",featured:true},
//  {title:"New Model Showcase",brand:"Brand name",category:"sports",type:"image",ratio:"5/8",src:"assets/Pink Stanley Cup _ Tennis Product Photograp.jpg",poster:"",featured:true},
//   {title:"New Model Showcase",brand:"Brand name",category:"Perfume",type:"image",ratio:"5/8",src:"assets/Miss Dior Cherie Blooming Bouquet 100 мл — ніжний квітковий аромат_edited.jpg",poster:"",featured:true},
//    {title:"Smart Watch Reveal",brand:"Brand name",category:"Pet Products",type:"image",ratio:"5/8",src:"assets/А Ваш котик заценил уже корм _Холка__.jpg",poster:"",featured:true}


];
