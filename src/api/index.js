export const COUPON_TYPE = {
  REDUCE: 1, // 满减
  TIME: 2, // 加时
  DEDUCE: 3, // 抵扣
};

export const USE_TYPE = {
  ALL: 1, // 全部
  TYPE: 2, //项目类型
  PROJECT: 3, //项目
};

export const getProjects = () => {
  return [
    {
      id: 1,
      title: "盲人按摩",
      typeId: 1,
      typeName: "按摩",
      price: 299,
    },
    {
      id: 2,
      title: "美女按摩",
      typeId: 1,
      typeName: "按摩",
      price: 250,
    },
    {
      id: 3,
      title: "盲人推拿",
      typeId: 2,
      typeName: "推拿",
      price: 160,
    },
    {
      id: 4,
      title: "giegie精油",
      typeId: 3,
      typeName: "精油",
      price: 100,
    },
  ];
};

export const getCoupons = () => {
  return [
    {
      id: 1,
      type: COUPON_TYPE.REDUCE,
      useType: USE_TYPE.ALL,
      projectTypes: [],
      projectIds: [],
      canPlus: false,
      name: "满减券，所有项目",
      count: 300,
      discount: 50,
    },
    {
      id: 11,
      type: COUPON_TYPE.REDUCE,
      useType: USE_TYPE.ALL,
      projectTypes: [],
      projectIds: [],
      canPlus: true,
      name: "满减券，所有项目，可叠加",
      count: 300,
      discount: 50,
    },
    {
      id: 2,
      type: COUPON_TYPE.REDUCE,
      useType: USE_TYPE.TYPE,
      projectTypes: [1],
      projectIds: [],
      canPlus: false,
      name: "满减券，按摩项目",
      count: 300,
      discount: 50,
    },
    {
      id: 22,
      type: COUPON_TYPE.REDUCE,
      useType: USE_TYPE.TYPE,
      projectTypes: [1],
      projectIds: [],
      canPlus: true,
      name: "满减券，按摩项目，可叠加",
      count: 300,
      discount: 50,
    },
    {
      id: 3,
      type: COUPON_TYPE.REDUCE,
      useType: USE_TYPE.PROJECT,
      projectTypes: [],
      projectIds: [1],
      canPlus: false,
      name: "满减券，盲人按摩",
      count: 300,
      discount: 50,
    },
    {
      id: 33,
      type: COUPON_TYPE.REDUCE,
      useType: USE_TYPE.PROJECT,
      projectTypes: [],
      projectIds: [1],
      canPlus: true,
      name: "满减券，盲人按摩，可叠加",
      count: 300,
      discount: 50,
    },
    {
      id: 4,
      type: COUPON_TYPE.TIME,
      useType: USE_TYPE.PROJECT,
      projectTypes: [],
      projectIds: [1],
      name: "加时券，盲人按摩",
      count: 300,
      discount: 50,
      time: 20,
    },
  ];
};
