import DefaultTheme from 'vitepress/theme'
import './custom.css'

const customTheme = {
  ...DefaultTheme,
  theme: {
    colorScheme: {
      // 默认颜色设置为黑色
      default: 'black'
    }
  }
}

export default customTheme