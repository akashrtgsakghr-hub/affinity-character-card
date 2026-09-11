// 必须加上这两行，相当于把工具（zod 和 lodash）带进这个文件
import { z } from 'zod';
import _ from 'lodash';

export const Schema = z.object({
  世界: z
    .object({
      时间: z.string().prefault(''),
      地点: z.string().prefault(''),
      天气: z.string().prefault(''),
      温度: z.string().prefault(''),
    })
    .prefault({}),
  角色: z
    .record(
      z.string().describe('角色名'),
      z.object({
        情感依恋: z.coerce
          .number()
          .transform(value => _.clamp(Math.round(value * 2) / 2, 0, 100))
          .prefault(0),
        肉体吸引: z.coerce
          .number()
          .transform(value => _.clamp(Math.round(value * 2) / 2, 0, 100))
          .prefault(0),
        关系意愿: z.coerce
          .number()
          .transform(value => _.clamp(Math.round(value * 2) / 2, 0, 100))
          .prefault(0),
        服饰: z.string().prefault(''),
        表情: z.string().prefault(''),
        心声: z.string().prefault(''),
      }),
    )
    .prefault({}),
});
