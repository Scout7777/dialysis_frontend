export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
    ],
  },
  {
    path: '/home',
    name: '血液透析中心',
    access: 'alluser',
    icon: 'home',
    component: './home',
  },
  {
    path: '/monitor',
    name: '透析监控',
    access: 'alluser',
    icon: 'FundOutlined',
    component: './monitor',
  },
  {
    path: '/record',
    name: '透析记录',
    access: 'alluser',
    icon: 'FileSearchOutlined',
    component: './record',
  },
  {
    path: '/patient',
    name: '患者管理',
    access: 'alluser',
    icon: 'TeamOutlined',
    component: './patient',
  },
  {
    path: '/bed',
    name: '排床管理',
    access: 'worker',
    icon: 'OrderedListOutlined',
    component: './bed',
  },
  // {
  //   path: '/bed_backup',
  //   name: '排床管理_日历',
  //   access: 'worker',
  //   icon: 'OrderedListOutlined',
  //   component: './bed_backup',
  // },
  {
    path: '/schedule',
    name: '医护排班',
    access: 'worker',
    icon: 'ScheduleOutlined',
    component: './schedule',
  },
  {
    path: '/equipment_management',
    name: '设备管理',
    access: 'alluser',
    icon: 'DatabaseOutlined',
    component: './equ_manage',
  },
  {
    path: '/stock',
    name: '库存管理',
    access: 'worker',
    icon: 'GoldOutlined',
    component: './stock',
  },
  {
    path: '/account',
    name: '费用管理',
    access: 'worker',
    icon: 'AccountBookOutlined',
    component: './account',
  },
  {
    path: '/quality',
    name: '质量分析',
    access: 'alluser',
    icon: 'BarChartOutlined',
    component: './quality',
  },
  {
    path: '/dashboard',
    name: '设备监控',
    access: 'alluser',
    icon: 'DashboardOutlined',
    component: './dashboard',
  },
  {
    path: '/system',
    name: '系统管理',
    access: 'alluser',
    icon: 'ToolOutlined',
    routes: [
      {
        path: '/system/users',
        name: '用户管理',
        component: './user',
      },
    ],
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    component: './404',
  },
];
