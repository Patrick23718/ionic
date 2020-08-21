import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Location } from '../../../interfaces/Location';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  articles: Location[];

  constructor(private router: Router, public platform: Platform) {
    this.articles = [
      {
        id : 'D001',
        categorie : 'Chambre',
        // tslint:disable-next-line: max-line-length
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illum dignissimos eos assumenda veritatis porro laudantium voluptates commodi harum molestiae consequuntur perferendis, suscipit incidunt quas velit nemo corrupti iure atque',
        type : 'moderne',
        prix : 35000,
        ville : 'Yaoundé',
        quartier : 'Bonas',
        telephone : '655-602-173',
        cite : {
          disponible : true,
          name : 'Cité Cool',
          frais : 0
        },
        img : [
          './assets/images/D001/d001-1.jpg',
          './assets/images/D001/d001-2.jpg',
          './assets/images/D001/d001-3.jpg',
          './assets/images/D001/d001-4.jpg'
        ],
        maps : {
          Long : 3.25,
          lat : 2.5
        },
        pieces : {
          salon : 0,
          cuisine : 1,
          douche : 1,
          chambre : 1,
          terasse : 0
        },
        note : 4,
        creerLe : new Date('2017/2/10')
      },

      
  {
    id : 'D003',
    categorie : 'Chambre',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illum dignissimos eos assumenda veritatis porro laudantium voluptates commodi harum molestiae consequuntur perferendis, suscipit incidunt quas velit nemo corrupti iure atque',
    type : 'moderne',
    prix : 30000,
    ville : 'Yaoundé',
    quartier : 'Bonas',
    telephone : '6 52 90 94 48 ',
    cite : {
      disponible : true,
      name : 'no name',
      frais : 0 
    },
    img : [
      'assets/images/D003/d003-1.jpg',
      'assets/images/D003/d003-2.jpg',
      'assets/images/D003/d003-3.jpg',
      'assets/images/D003/d003-4.jpg'
    ],
    maps : {
      Long : 3.851800,
      lat : 11.496487
    },
    pieces : {
      salon : 0,
      cuisine : 0,
      douche : 1,
      chambre : 1,
      terasse : 1
    },
    note : 2.5,
    creerLe : new Date("2017/2/10")
  },



   {
    id : 'A001',
    categorie : 'Chambre',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illum dignissimos eos assumenda veritatis porro laudantium voluptates commodi harum molestiae consequuntur perferendis, suscipit incidunt quas velit nemo corrupti iure atque',
    type : 'moderne',
    prix : 20000,
    ville : 'Yaoundé',
    quartier : 'ecole des postes-neptune',
    telephone : '6 55 58 50 67',
    cite : {
      disponible : true,
      name : 'cité colonel',
      frais : 0 
    },
    img : [
      'assets/images/A001/a001-1.jpg',
      'assets/images/A001/a001-2.jpg',
      'assets/images/A001/a001-3.jpg',
      'assets/images/A001/a001-4.jpg'
    ],
    maps : {
      Long : 0,
      lat : 0
    },
    pieces : {
      salon : 0,
      cuisine : 0,
      douche : 1,
      chambre : 1,
      terasse : 0
    },
    note : 2,
    creerLe : new Date('2017/2/10')
  },



 {
    id : 'A003',
    categorie : 'Chambre',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illum dignissimos eos assumenda veritatis porro laudantium voluptates commodi harum molestiae consequuntur perferendis, suscipit incidunt quas velit nemo corrupti iure atque',
    type : 'moderne',
    prix : 20000,
    ville : 'Yaoundé',
    quartier : 'ecole des postes-neptune',
    telephone : '6 77 83 78 86',//6 98 31 41 91
    cite : {
      disponible : true,
      name : 'no name',
      frais : 0 
    },
    img : [
      'assets/images/A003/a003-1.jpg',
      'assets/images/A003/a003-2.jpg',
      'assets/images/A003/a003-3.jpg'
    ],
    maps : {
      Long : 0,
      lat : 0
    },
    pieces : {
      salon : 0,
      cuisine : 1,
      douche : 1,
      chambre : 1,
      terasse : 0
    },
    note : 3.5,
    creerLe : new Date("2017/2/10")
  },


  {
    id : 'A004',
    categorie : 'Chambre',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illum dignissimos eos assumenda veritatis porro laudantium voluptates commodi harum molestiae consequuntur perferendis, suscipit incidunt quas velit nemo corrupti iure atque',
    type : 'moderne',
    prix : 40000,// 45000-30000(sans balcon)
    ville : 'Yaoundé',
    quartier : 'ecole des postes-neptune',
    telephone : '6 95 51 68 45',
    cite : {
      disponible : true,
      name : 'cité le progrès',
      frais : 0 
    },
    img : [
      'assets/images/A004/a004-1.jpg',
      'assets/images/A004/a004-2.jpg',
      'assets/images/A004/a004-3.jpg',
      'assets/images/A004/a004-4.jpg'
    ],
    maps : {
      Long : 3.850788,
      lat : 11.500547
    },
    pieces : {
      salon : 0,
      cuisine : 1,
      douche : 1,
      chambre : 1,
      terasse : 1
    },
    note : 3.5,
    creerLe : new Date("2017/2/10")
  },


 {
    id : 'A005',
    categorie : 'Chambre',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illum dignissimos eos assumenda veritatis porro laudantium voluptates commodi harum molestiae consequuntur perferendis, suscipit incidunt quas velit nemo corrupti iure atque',
    type : 'moderne',
    prix : 25000,// à 35000,
    ville: 'Yaoundé',
    quartier : 'ecole des postes-neptune',
    telephone : '6 96 91 12 24', // 6 82 45 04 35
    cite : {
      disponible : true,
      name : 'no name',
      frais : 0 
    },
    img : [
      'assets/images/A005/a005-1.jpg',
      'assets/images/A005/a005-2.jpg',
      'assets/images/A005/a005-3.jpg',
      'assets/images/A005/a005-4.jpg'
    ],
    maps : {
      Long :351001, //N
      lat : 1130030 //E
    },
    pieces : {
      salon : 0,
      cuisine : 0,
      douche : 1,
      chambre : 1,
      terasse : 0
    },
    note : 3.5,
    creerLe : new Date("2017/2/10")
  },



 {
    id : 'B001',
    categorie : 'Chambre',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illum dignissimos eos assumenda veritatis porro laudantium voluptates commodi harum molestiae consequuntur perferendis, suscipit incidunt quas velit nemo corrupti iure atque',
    type : 'moderne',
    prix : 30000,
    ville : 'Yaoundé',
    quartier : 'ecole des postes-neptune',
    telephone : '6 97 76 60 79',
    cite : {
      disponible : true,
      name : 'cité fraternité',
      frais : 0 
    },
    img : [
      'assets/images/B001/b001-1.jpg',
      'assets/images/B001/b001-2.jpg'
    ],
    maps : {
      Long : 0,
      lat : 0
    },
    pieces : {
      salon : 0,
      cuisine : 0,
      douche : 1,
      chambre : 1,
      terasse : 0
    },
    note : 2,
    creerLe : new Date("2017/2/10")
  },

 {
    id : 'B002',
    categorie : 'Chambre',
    description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere illum dignissimos eos assumenda veritatis porro laudantium voluptates commodi harum molestiae consequuntur perferendis, suscipit incidunt quas velit nemo corrupti iure atque',
    type : 'moderne',
    prix : 25000,
    ville : 'Yaoundé',
    quartier : 'ecole des postes-neptune',
    telephone : '6 75 46 89 ',
    cite : {
      disponible : true,
      name : 'cité la solidarité',
      frais : 0 
    },
    img : [
      'assets/images/B002/b002-1.jpg',
      'assets/images/B002/b002-2.jpg'
    ],
    maps : {
      Long : 0,
      lat : 0
    },
    pieces : {
      salon : 0,
      cuisine : 0,
      douche : 1,
      chambre : 1,
      terasse : 0
    },
    note : 2,
    creerLe : new Date("2017/2/10")
  },
    ];
  }

  ngOnInit() {
  }

  goToArticleDetails(article: Location) {
    // tslint:disable-next-line: prefer-const
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(article)
      }
    };
    this.router.navigate(['details'], navigationExtras);
  }

}
