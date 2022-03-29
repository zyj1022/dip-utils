/**
 * 声明命名空间名称、模块
 */
declare namespace dipUtils {
  /**
   * 生成数字范围内的随机数
   * @param min 最小数字
   * @param max 最大数字
   * @returns number类型
   */
  export function random(min: number, max: number): number
  /**
   * 时间字符串转换为时间戳
   * @param dateStr 字符串格式为 2017-02-10 18:20:30
   * 注意：此处月、日、时分秒、必须为2位数字，否则报错
   * @returns 时间戳
   */
  export function getTimestamp(dateStr: string): number
  /**
   * @param date Date类型 new Date()
   * @param fmt 格式化类型 yyyy-MM-dd hh:mm:ss
   * @returns 时间字符串 2022-03-29 17:22:30
   */
  export function format(date: Date, fmt: string): string
  /**
   * 转换音视频时长，把秒数转换为：HH:MM:SS格式
   * @param duration 音视频时长：120
   * @returns 时间字符串：02:00
   */
  export function makeDuration(duration: number): string
  /**
   * 转换时间字符串为大致时间描述
   * @param date 日期：2022-03-29 09:08:11
   * @returns 时间字符串：1个月前
   */
  export function makeChTime(date: string): string
  /**
   * 转换数字为 大致数字描述
   * @param value 数字：1001
   * @returns 时间字符串：1千
   */
  export function makeChNumber(value: number): string
  /**
   * 判断是否为数组
   * @param input 最小数字
   * @returns boolean
   */
  export function isArray(input: any): boolean
}
declare module 'dip-utils' {
  export = dipUtils
}
