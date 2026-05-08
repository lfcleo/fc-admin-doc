# 图片上传

[本章示例代码](https://github.com/lfcleo/fc-admin/blob/main/src/views/vab/form/uploadImg.vue)

[查看预览](https://www.fcadmin.fun/#/vab/form/uploadImg)

已经集成了图片裁剪，图片压缩，拖拽排序(多图片上传)功能。图片上传分为单图片 `<fc-upload-img>` 和多图片上传 `<fc-upload-imgs>` ，可配合 `<fc-form>` 使用

## 单图片上传

```vue
...
<fc-upload-img v-model:image-url="avatar1" :requestApi="uploadImg" :file-size="3"
    @update:imageUrl="handleImageUrlUpdate">
    <template #tip> 上传图片最大为 3M </template>
</fc-upload-img>
...
```

## 参数说明

### Attributes

属性名  |   说明    |   类型    |   默认值
:----:|----|:----:|:----:|
imageUrl | 图片地址，必传 | string | - |
requestApi | 上传图片的 api，必传 | Function | - |
drag | 是否支持拖拽上传 | boolean | true |
disabled | 是否禁用上传组件 | boolean | false |
fileSize | 图片大小限制,单位M | number | 5 |
fileType | 图片类型限制，可选项见下方`ImageMimeType` | string数组 | ["image/jpeg", "image/png", "image/gif"] |
height | 组件高度 | string | 150px |
width | 组件宽度 | string | 150px |
borderRadius | 组件边框圆角 | string | 8px |
cropper | 是否启用裁剪图片 | boolean | false |
cropperOption | 裁剪图片配置选项,`cropper=true`时生效 | CropperOption,见下方 | 150px |
comporess | 是否启用图片压缩 | boolean | false |
comporessQuality | 图片压缩质量 取0-1之间 | number | 0.4 |

ImageMimeType可选值:`"image/apng"` `"image/bmp"` `"image/gif"` `"image/jpeg"` `"image/pjpeg"` `"image/png"` `"image/svg+xml"` `"image/tiff"` `"image/webp"` `"image/x-icon"`

CropperOption Attributes

属性名  |   说明    |   类型    |   默认值
:----:|----|:----:|:----:|
autoCropWidth | 默认生成截图框宽度 | number | 200 |
autoCropHeight | 默认生成截图框高度 | number | 200 |
outputType | 裁剪生成图片的格式，可选`jpeg`,`png`,`webp` | string | png |
autoCrop | 是否默认生成截图框 | boolean | true |
fixedBox | 是否固定截图框大小 | boolean | false |

### Events

事件名  |   说明    |   类型    
:----:|----|:----:|
update:imageUrl | 图片上传成功后的回调方法 | Function |

### Slots

插槽名  |   说明    
:----:|----|
empty | 空内容插槽 |
tip | 提示插槽 |

## 多图片上传

```vue
...
<fc-upload-imgs v-model:file-list="fileList1" :requestApi="uploadImg" width="250px" :sortable="true">
    <template #empty>
        <el-icon>
            <Picture />
        </el-icon>
        <span>请上传图片</span>
    </template>
    <template #tip> 图片拖拽排序,拖拽上传 </template>
</fc-upload-imgs>
...
```

## 参数说明

### Attributes

属性名  |   说明    |   类型    |   默认值
:----:|----|:----:|:----:|
fileList | 默认上传文件，必传<br />同`el-upload`的`v-model:file-list` | object | - |
requestApi | 上传图片的 api，必传 | Function | - |
drag | 是否支持拖拽上传 | boolean | true |
disabled | 是否禁用上传组件 | boolean | false |
limit | 最大图片上传数 | number | 5 |
fileSize | 图片大小限制,单位M | number | 5 |
fileType | 图片类型限制，可选项见下方`ImageMimeType` | string数组 | ["image/jpeg", "image/png", "image/gif"] |
height | 组件高度 | string | 150px |
width | 组件宽度 | string | 150px |
borderRadius | 组件边框圆角 | string | 8px |
comporess | 是否启用图片压缩 | boolean | false |
comporessQuality | 图片压缩质量 取0-1之间 | number | 0.4 |
sortable | 是否开启拖拽排序 | boolean | false |

ImageMimeType可选值:`"image/apng"` `"image/bmp"` `"image/gif"` `"image/jpeg"` `"image/pjpeg"` `"image/png"` `"image/svg+xml"` `"image/tiff"` `"image/webp"` `"image/x-icon"`

### Events

事件名  |   说明    |   类型    
:----:|----|:----:|
update:fileList | 图片上传成功后的回调方法 | Function |

### Slots

插槽名  |   说明    
:----:|----|
empty | 空内容插槽 |
tip | 提示插槽 |