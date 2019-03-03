import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { MenuService } from '../../providers/menu-service/menu-service';


export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  rootPage = 'TabsPage';
  menus: any;

  @ViewChild(Nav) nav: Nav;

  // pages: PageInterface[] = [
  //   {
  //     title: 'Dashboard',
  //     pageName: 'TabsPage',
  //     tabComponent: 'TabDashboardPage',
  //     index: 0,
  //     icon: 'home'
  //   },
  //   {
  //     title: 'E-Learning',
  //     pageName: 'ELearningPage',
  //     icon: 'copy'
  //   },
  //   {
  //     title: 'Events',
  //     pageName: 'EventsPage',
  //     icon: 'people'
  //   },
  //   {
  //     title: 'Informations',
  //     pageName: 'InformationsPage',
  //     icon: 'copy'
  //   }
  // ];

  pages: PageInterface[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuService: MenuService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Menu');
    this.menus = this.getAllMenus();
    console.log('test : ' + this.menus);
  }

  openPage(page: PageInterface) {
    let params = {};

    if (page.index) {
      params = { tabIndex: page.index };
    }

    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      this.nav.setRoot(page.pageName, params);
    }
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }

  getAllMenus() {
    this.menuService.getAllMenus()
      .then(data => {
        this.menus = data;
        this.pages = this.menus;
      });
  }

}
