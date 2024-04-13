import { describe } from 'vitest'
import { format } from '../../utils/date'

describe('utils/date 테스트', () => {
  describe('format 함수 테스트', () => {
    it('파라미터에 정상적인 날짜 값을 넣었을 경우 year.month.date 포맷으로 값이 나온다.', () => {
      const cases = [
        ['2024-03-01T00:00:00+09:00', 'MAR. 1. 2024 00:00'],

        ['2024-03-01', 'MAR. 1. 2024 09:00'],
        ['2024/03/01', 'MAR. 1. 2024 00:00'],
        ['2024.03.01', 'MAR. 1. 2024 00:00'],

        ['03-01-2024', 'MAR. 1. 2024 00:00'],
        ['03/01/2024', 'MAR. 1. 2024 00:00'],
        ['03.01.2024', 'MAR. 1. 2024 00:00'],

        [1709218800000, 'MAR. 1. 2024 00:00'],

        [new Date(1709218800000), 'MAR. 1. 2024 00:00'],
      ]

      cases.forEach(([param, result]) => {
        expect(format(param)).toBe(result)
      })
    })

    it('파라미터에 정상적이지 않은 날짜 값을 넣었을 경우 공백으로 값이 나온다.', () => {
      const cases = [
        [null, ''],
        [undefined, ''],
        [[], ''],
        [{}, ''],
        ['13.01.2024', ''],
        ['2024.13.01', ''],
        ['12.2024.01', ''],
        ['01.2024.12', ''],
      ]

      cases.forEach(([param, result]) => {
        expect(format(param)).toBe(result)
      })
    })
  })
})
