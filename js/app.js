var productImages = ['bag.jpg','banana.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg',
    'dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg'
  ];
  
  var leftProductImage = document.querySelector('#left_product_img');
  var centerProductImage = document.querySelector('#center_product_img');
  var rightProductImage = document.querySelector('#right_product_img');
  var allImageSection = document.getElementById('all_products');
  var products = [];
  var totalClicks = 0;
  var totalViews = 0; 
   

  function Product(name){
    this.name = name;
    this.urlImage = `img/${this.name}`;
    products.push(this);
  }
  
  function choiseRandomImages(){
    var leftImageRandom =  products[randomNumber(0 , products.length-1 )];
    var centerImageRandom =  products[randomNumber(0 , products.length-1 )];
    var rightImageRandom =  products[randomNumber(0 , products.length-1 )];
    leftProductImage.setAttribute('src' , leftImageRandom.urlImage);
    leftProductImage.setAttribute('alt' , leftImageRandom.name);
    centerProductImage.setAttribute('src' , centerImageRandom.urlImage);
    centerProductImage.setAttribute('alt' , centerImageRandom.name);
    rightProductImage.setAttribute('src' , rightImageRandom.urlImage);
    rightProductImage.setAttribute('alt' ,rightImageRandom.name);
    while(leftProductImage === rightProductImage || centerProductImage === rightProductImage || centerProductImage === leftProductImage ){
        choiseRandomImages();  
        this.totalClicks += this.products[i];
        this.totalViews +=this.products[i];
    }
  }
  
  
  for(var i = 0; i< productImages.length ; i++){
    new Product(productImages[i]);
  }
  choiseRandomImages();
  
  
  function clickImage(e){
    if( e.target.id === 'left_product_img' || e.target.id === 'right_product_img'||e.target.id === 'center_product_img' ){
        choiseRandomImages();
      totalClicks++;
    }
    console.log(totalClicks);
    if(totalClicks === 25){
      leftProductImage.remove();
      centerProductImage.remove();
      rightProductImage.remove();
    }
  }
  
  allImageSection.addEventListener('click' , clickImage);

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }