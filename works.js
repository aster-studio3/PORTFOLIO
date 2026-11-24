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
 {slug:"beauty",name:"Beauty",blurb:"Skincare, fragrance and cosmetics visuals with a premium finish.",cover:""},
 {slug:"fashion",name:"Fashion",blurb:"Campaign films and lookbooks for clothing and accessory brands.",cover:""},
 {slug:"food",name:"Food & Drink",blurb:"Appetizing ads for restaurants, cafés and beverage brands.",cover:""},
 {slug:"Homeware",name:"Homeware",blurb:"Interior styling, product showcases and cinematic home decor visuals.",cover:""},
 {slug:"Jewelry",name:"Jewelry",blurb:"Luxury product showcases and elegant cinematic campaigns for jewelry brands.",cover:""},
 {slug:"Fitness & Sports",name:"Fitness & Sports",blurb:"Dynamic promotional films for fitness brands, sports products and activewear.",cover:""},
 {slug:"Perfume",name:"Perfume",blurb:"Elegant fragrance campaigns and cinematic visuals for luxury perfume brands.",cover:""},
 {slug:"Pet Products",name:"Pet Products",blurb:"Creative product commercials and engaging visuals for pet brands and accessories.",cover:""},
];
const WORK=[
 {title:"Cold Brew Launch",brand:"Brand name",category:"food",type:"video",ratio:"1/1",src:"",poster:"",featured:true},
 {title:"Evening Menu",brand:"Brand name",category:"food",type:"image",ratio:"4/5",src:""},
 {title:"Burger Hero Shot",brand:"Brand name",category:"food",type:"image",ratio:"16/9",src:""},
 {title:"Summer Collection Film",brand:"Brand name",category:"fashion",type:"video",ratio:"9/16",src:"",poster:"",featured:true},
 {title:"Street Lookbook",brand:"Brand name",category:"fashion",type:"image",ratio:"4/5",src:""},
 {title:"Signature Fragrance",brand:"Brand name",category:"beauty",type:"image",ratio:"4/5",src:"",featured:true},
 {title:"Glow Serum Campaign",brand:"Brand name",category:"beauty",type:"video",ratio:"9/16",src:"",poster:""},
 {title:"Skyline Residences",brand:"Brand name",category:"real-estate",type:"image",ratio:"16/9",src:"",featured:true},
 {title:"Smart Watch Reveal",brand:"Brand name",category:"tech",type:"video",ratio:"16/9",src:"",poster:"",featured:true},
 {title:"New Model Showcase",brand:"Brand name",category:"automotive",type:"video",ratio:"16/9",src:"",poster:"",featured:true}
];
