export default {
  src: 'https://zos.alipayobjects.com/rmsportal/gyseCGEPqWjQpYF.jpg',
  component: require('./index.jsx'),
  text: '单张背景图的主页首屏幕，由一张单屏背景图',
  dataSource: [
    {
      key: 'height',
      the: 'style',
      name: '区块高度',
      value: '100%',
      calc: true,// 如果是在导航后第一个区块，是否减去导航高度
    },
    {
      key: 'block1',
      name: '文字区域',
      value: {
        logo: {
          name: 'logo图片',
          value: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png',
          size: '320*254',
        },
        content: {
          name: '广告语',
          value: '一个高效的页面动画解决方案',
        },
        button: {
          name: '按钮文案',
          value: 'Learn More',
        },
        bgImg: {
          name: '背景图片',
          value: 'https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg',
          size: '1920*1080',
        },
      }
    }
  ]
}
