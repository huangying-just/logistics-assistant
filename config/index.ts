import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: '智能物流助教',
  description: '通过与AI助教进行5-10题的问答，给出评价',
  copyright: '中物联教育培训',
  privacy_policy: ' AI也会犯错，请注意分辨',
  default_language: 'zh-Hans',
}

export const isShowPrompt = false
export const promptTemplate = '我希望你扮演一个精通物流知识与技能的老师。'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48

