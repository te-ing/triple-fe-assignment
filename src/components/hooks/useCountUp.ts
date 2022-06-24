import { useEffect, useState } from 'react'

const easeOutExpo = (x: number): number => {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
}

const useCountUp = (target: number, time = 2): number => {
  const [count, setCount] = useState(0)
  const frame = 60
  useEffect(() => {
    let level = 0
    const counter = setInterval(() => {
      setCount(level)
      if (level === frame * time) {
        clearInterval(counter)
      }
      level++
    }, 1000 / frame)
  }, [time])

  return Math.round(easeOutExpo(count / frame / time) * target)
}

export default useCountUp
