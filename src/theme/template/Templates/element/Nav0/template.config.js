export default {
  src: 'https://zos.alipayobjects.com/rmsportal/ZjfIAdkDVlpnilf.jpg',
  component: require('./index.jsx'),
  text: '普通型',
  dataSource: [
    {
      key: 'height',
      the: 'style',
      name: '区块高度',
      value: 64,
    },
    {
      key: 'block1',
      name: '内容修改',
      value: {
        logo: {
          name: 'logo图片',
          value: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
        },
        menu1: {
          name: '导航一',
          value: '导航一',
        },
        menu2: {
          name: '导航二',
          value: '导航二',
        },
        menu3: {
          name: '导航三',
          value: '导航三',
        },
        menu4: {
          name: '导航四',
          value: '导航四',
        }
      }
    }
  ],
}
