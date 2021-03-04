const testData = {
  navData: [
    {
      id: 1,
      name: 'Home',
      url: '/',
      active: true
    },
    {
      id: 2,
      name: 'Shop',
      url: '/catalog',
      active: false
    },
    {
      id: 3,
      name: 'Blog',
      url: '/blog',
      active: false
    },
    {
      id: 4,
      name: 'About',
      url: '/about',
      active: false
    }
  ],
  mainHeroItems: [
    {
      id: 1,
      title: 'Fall-Winter Clearance Sales',
      description: 'All Sale Items are Final Sale / Free Shipping on All Orders',
      image: 'images/main/hero/girl.png'
    },
    {
      id: 2,
      title: 'Fall-Winter Clearance Sales',
      description: 'All Sale Items are Final Sale / Free Shipping on All Orders',
      image: 'images/main/hero/girl.png'
    },
    {
      id: 3,
      title: 'Fall-Winter Clearance Sales',
      description: 'All Sale Items are Final Sale / Free Shipping on All Orders',
      image: 'images/main/hero/girl.png'
    }
  ],
  testProduct: {
    image: 'images/prod-1.jpg',
    isNew: false,
    isBest: false,
    isSale: true,
    link: '/',
    title: 'Eye Mesh Boat Shoes',
    currency: '$',
    price: 220.00,
    oldPrice: 165.00,
  },
  mainPageBanners: [
    {id: 1, title: `Women's Mid-Season`, url: '/', img: 'images/main/banners/midseason.jpg'},
    {id: 2, title: 'Summer Romance', url: '/', img: 'images/main/banners/summer.jpg'},
    {id: 3, title: '20% Off All Accessories', url: '/', img: 'images/main/banners/accs.jpg'},
  ],
  mainProducts: {
    nav: [
      { idx: 0, name: 'Best Sellers', to: '/?q=best' },
      { idx: 1, name: 'New Products', to: '/?q=new' },
      { idx: 2, name: 'Sale Products', to: '/?=sale' }
    ],
    products: [
      {id: 1, title: 'Eye Mesh Boat Shoes', image: 'images/main/products/prod-1.jpg', price: 100, currency: '$', link: '/'},
      {id: 2, title: 'Eye Mesh Boat Shoes', image: 'images/main/products/prod-2.jpg', price: 100, currency: '$', link: '/'},
      {id: 3, title: 'Eye Mesh Boat Shoes', image: 'images/main/products/prod-3.jpg', price: 100, currency: '$', link: '/'},
      {id: 4, title: 'Eye Mesh Boat Shoes', image: 'images/main/products/prod-4.jpg', price: 100, currency: '$', link: '/'},
      {id: 5, title: 'Eye Mesh Boat Shoes', image: 'images/main/products/prod-5.jpg', price: 100, currency: '$', link: '/'},
    ],
  },
  shopBanners: [
    {id: 1, title: 'Men’s Sportswear', url: '/', img: 'images/main/shop-banners/banner-1.jpg'},
    {id: 2, title: 'Find your fit', url: '/', img: 'images/main/shop-banners/banner-2.jpg'},
  ],
  aboutData: {
    service: {
      title: 'Customer service',
      links: [
        {
          text: 'Phone: +866.597.2742',
          url: 'tel:+8665972742'
        },
        {
          text: 'Live chat',
          url: '/'
        },
        {
          text: 'About Us',
          url: '/'
        },
        {
          text: 'Terms & Conditions',
          url: '/'
        }
      ]
    },
    company: {
      title: 'Company',
      links: [
        {
          text: 'What We Do',
          url: '/'
        },
        {
          text: 'Available Services',
          url: '/'
        },
        {
          text: 'Latest Posts',
          url: '/'
        },
        {
          text: 'FAQs',
          url: '/'
        }
      ]
    },
    subscribe: {
      title: 'Subscribe',
      form: {
        formTitle: 'Join our list and get 15% off your first purchase!',
        note: '*Don’t worry we don’t spam',
        placeholder: 'Email Adress',
        buttonText: 'Subscribe'
      }
    }
  },
  bottomMenu: [
    {
      id: 1,
      text: 'Returns Policy',
      url: '/'
    },
    {
      id: 2,
      text: 'Privacy Policy',
      url: '/'
    },
  ],
  socials: [
    {
      id: '1',
      url: '/',
      icon: 'images/png-icons/tw.png'
    },
    {
      id: '2',
      url: '/',
      icon: 'images/png-icons/fb.png'
    },
    {
      id: '3',
      url: '/',
      icon: 'images/png-icons/in.png'
    },
    {
      id: '4',
      url: '/',
      icon: 'images/png-icons/pin.png'
    },
  ],
}

export { testData }
