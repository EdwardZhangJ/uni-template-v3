// uno.config.ts
import type {Preset, SourceCodeTransformer} from 'unocss'
import {defineConfig, presetAttributify, presetIcons, transformerDirectives, transformerVariantGroup} from 'unocss'

import {presetApplet, presetRemRpx, transformerAttributify} from 'unocss-applet'

const presets: Preset[] = []
const transformers: SourceCodeTransformer[] = []

// uni-app
const isApplet = process.env?.UNI_PLATFORM?.startsWith('mp-') ?? false
const isH5 = process.env?.UNI_PLATFORM === 'h5'

if (isApplet) {
  transformers.push(
    transformerAttributify({
      // 解决与第三方框架样式冲突问题
      prefixedOnly: true,
      prefix: 'fg',
    })
  )
} else {
  presets.push(presetAttributify())
}

if (!isH5) {
  presets.push(presetRemRpx())
}

export default defineConfig({
  presets: [
    // The default preset for UnoCSS.
    ...presets,
    presetApplet({enable: !isH5}),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  /**
   * 自定义快捷语句
   * @see https://github.com/unocss/unocss#shortcuts
   */
  shortcuts: [
    ['center', 'flex justify-center items-center'],
    ['border', 'border border-solid'],
  ],
  transformers: [
    ...transformers,
    // 启用 @apply 功能
    transformerDirectives(),
    // 启用 () 分组功能
    transformerVariantGroup(),
  ],
  rules: [
    [
      'p-safe',
      {
        padding:
          'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)',
      },
    ],
    ['pt-safe', {'padding-top': 'env(safe-area-inset-top)'}],
    ['pb-safe', {'padding-bottom': 'env(safe-area-inset-bottom)'}],
  ],
})

/**
 * mp 里面：mt-4 => margin-top: 32rpx
 * h5 里面：mt-4 => margin-top: 1rem
 */
