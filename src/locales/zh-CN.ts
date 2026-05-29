import { LocaleData } from "@/type";
import zhCN from "antd/locale/zh_CN";

const localeData: LocaleData = {
  antLocale: zhCN,
  logo: "PicUntu",
  initial: "正在初始化...",
  previewHelp: "拖动分割线对比压缩效果：左侧为原图，右侧为压缩后图片",
  uploadCard: {
    title: "将图片拖至此处，支持文件、文件夹拖拽上传",
    subTitle: "开源批量图片压缩工具，支持 %s 格式",
    pasteHint: "💡 小提示：复制图片后按下 Ctrl+V（Mac 系统 Cmd+V）即可快速粘贴",
  },
  listAction: {
    batchAppend: "批量添加",
    addFolder: "添加文件夹",
    clear: "清空列表",
    downloadAll: "全部保存",
    downloadOne:提供**优化润色版**（用语更简洁、专业、贴合工具类产品交互文案，修正口语化表述，统一风格），同时保留原有字段结构不变，可直接替换使用：

```typescript
import { LocaleData } from "@/type";
import zhCN from "antd/locale/zh_CN";

const localeData: LocaleData = {
  antLocale: zhCN,
  logo: "PicUntu",
  initial: "正在初始化...",
  previewHelp: "拖动分割线对比压缩效果：左侧为原图，右侧为压缩后图片",
  uploadCard: {
    title: "将图片拖至此处，支持文件、文件夹拖拽上传",
    subTitle: "开源批量图片压缩工具，支持 %s 格式",
    pasteHint: "💡 小提示：复制图片后按下 Ctrl+V（Mac 系统 Cmd+V）即可快速粘贴",
  },
  listAction: {
    batchAppend: "批量添加",
    addFolder: "添加文件夹",
    clear: "清空列表",
    downloadAll: "全部保存",
    downloadOne: "保存图片",
    removeOne: "移除图片",
    reCompress: "重新压缩",
  },
  columnTitle: {
    status: "状态",
    name: "文件名",
    preview: "预览",
    size: "原大小",
    dimension: "原尺寸",
    decrease: "压缩比例",
    action: "操作",
    newSize: "压缩后大小",
    newDimension: "压缩后尺寸",
  },
  optionPannel: {
    failTip: "已达到最小体积，请调整参数后重试",
    help: "PicUntu 是一款批量图片压缩工具，参数修改将对全部图片生效",
    resizeLable: "图片尺寸调整",
    jpegLable: "JPEG / WEBP 参数",
    pngLable: "PNG 参数",
    gifLable: "GIF 参数",
    avifLable: "AVIF 参数",
    resizePlaceholder: "请选择缩放模式",
    fitWidth: "指定宽度，高度自适应",
    fitHeight: "指定高度，宽度自适应",
    setShort: "指定短边，长边自适应",
    setLong: "指定长边，短边自适应",
    setCropRatio: "裁剪模式 - 按比例裁剪",
    setCropSize: "裁剪模式 - 按尺寸裁剪",
    cwRatioPlaceholder: "输入宽度比例",
    chRatioPlaceholder: "输入高度比例",
    cwSizePlaceholder: "输入裁剪宽度",
    chSizePlaceholder: "输入裁剪高度",
    widthPlaceholder: "设置输出图片宽度",
    heightPlaceholder: "设置输出图片高度",
    shortPlaceholder: "设置输出图片短边边长",
    longPlaceholder: "设置输出图片长边边长",
    resetBtn: "重置参数",
    confirmBtn: "应用设置",
    qualityTitle: "图片质量（取值 0-1）",
    colorsDesc: "色彩数量（取值 2-256）",
    pngDithering: "PNG 抖动系数（取值 0-1）",
    gifDithering: "开启色彩抖动",
    avifQuality: "图片质量（取值 1-100）",
    avifSpeed: "压缩速度（取值 1-10）",
    outputFormat: "输出格式",
    outputFormatPlaceholder: "选择图片输出格式",
    transparentFillDesc: "透明区域填充色",
    cropCompareWarning: "裁剪模式暂不支持对比预览",
  },
  error404: {
    backHome: "返回首页",
    description: "抱歉，您访问的页面不存在",
  },
  progress: {
    before: "压缩前",
    after: "压缩后",
    rate: "压缩率",
  },
};

export default localeData;