var productImages = ['bag.jpg','banana.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg',
    'dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg'
  ];
  
  var leftProductImage = document.querySelector('#left_product_img');
  var centerProductImage = document.querySelector('#center_product_img');
  var rightProductImage = document.querySelector('#right_product_img');
  var allImageSection = document.getElementById('all_products');
  var products = [];
  var totalClicks = 0;
   

  function Product(name){
    this.name = name;
    this.urlImage = `img/${this.name}`;
    products.push(this);
    this.totalViews=0;
    this.tatalVotes=0;
  }
  
  function choiseRandomImages(){
    var leftImageRandom =  products[randomNumber(0 , products.length-1 )];
    var centerImageRandom =  products[randomNumber(0 , products.length-1 )];
    var rightImageRandom =  products[randomNumber(0 , products.length-1 )];
    while(leftImageRandom === rightImageRandom || centerImageRandom === rightImageRandom || centerImageRandom === leftImageRandom ){
    leftImageRandom =  products[randomNumber(0 , products.length-1 )];
    centerImageRandom =  products[randomNumber(0 , products.length-1 )];
     rightImageRandom =  products[randomNumber(0 , products.length-1 )]; 
    }

    leftImageRandom.totalClicks++;
    rightImageRandom.totalViews++;
    centerImageRandom.totalVotes++;
    

    // console.log(leftImageRandom === leftImageRandom);
    leftProductImage.setAttribute('src' , leftImageRandom.urlImage);
    leftProductImage.setAttribute('alt' , leftImageRandom.name);
    centerProductImage.setAttribute('src' , centerImageRandom.urlImage);
    centerProductImage.setAttribute('alt' , centerImageRandom.name);
    rightProductImage.setAttribute('src' , rightImageRandom.urlImage);
    rightProductImage.setAttribute('alt' ,rightImageRandom.name);
    
    // choiseRandomImages().totalViews++;
    // choiseRandomImages().tatalVotes++;
    
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
      var ulEl=document.getElementById("productList");
      for(i=0;i<25;i++){
        var sideEl=document.getElementById('side');
        var ulEl=document.createElement('ui');
        sideEl.appendchild(ulEl);
        var liEl =document.createElement('li');
        ulEl.appendchild(liEl);
        liEl.textContent=`${products[i].name} had ${products[i].tatalVotes} votes and was shown ${products[i].totalViews} times`;

      }
    }
  }
  
  
  allImageSection.addEventListener('click' , clickImage);

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }