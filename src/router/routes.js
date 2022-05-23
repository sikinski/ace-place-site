import HomePage from '@/pages/HomePage.vue';
import AceNews from '@/pages/AceNews.vue'
export default [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      breadCrumbs: [
        {
          to: '/', // hyperlink
          text: 'Главная', // crumb text
        },
      ],
    },
    // beforeEnter: () => {
    //   const processStore = useAuthState(pinia); // <-- passing Pinia instance directly
    //   console.log(processStore);
    // },
    children: [
      {
        path: '/news',
        name: 'News',
        component: AceNews,
        meta: {
          breadCrumbs: [
            {
              to: '/news', // hyperlink
              text: 'Новости', // crumb text
            },
          ],
        },
      },
    ]
  },
  
  // {
  //   path: '/',
  //   name: 'AceHeader',
  //   component: AceHeader,
  //   meta: {
  //     breadCrumbs: [
  //       {
  //         to: '/', // hyperlink
  //         text: 'Home', // crumb text
  //       },
  //     ],
  //   },
  // },
  // {
  //   path: '/',
  //   name: 'AceHeader',
  //   component: AceHeader,
  //   meta: {
  //     breadCrumbs: [
  //       {
  //         to: '/', // hyperlink
  //         text: 'Home', // crumb text
  //       },
  //     ],
  //   },
  // },
  // {
  //   path: '/',
  //   name: 'AceHeader',
  //   component: AceHeader,
  //   meta: {
  //     breadCrumbs: [
  //       {
  //         to: '/', // hyperlink
  //         text: 'Home', // crumb text
  //       },
  //     ],
  //   },
  // },
];
