'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [sparkles, setSparkles] = useState<Array<{id: number, x: number, y: number}>>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const newSparkle = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100
      }
      setSparkles(prev => [...prev, newSparkle])
      setTimeout(() => {
        setSparkles(prev => prev.filter(s => s.id !== newSparkle.id))
      }, 2000)
    }, 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className={styles.main}>
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className={styles.sparkle}
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`
          }}
        >✨</div>
      ))}

      <div className={styles.kitchen}>
        <div className={styles.window}>
          <div className={styles.windowFrame}></div>
          <div className={styles.sunshine}></div>
        </div>

        <h1 className={styles.title}>PTIBOUTON</h1>
        <p className={styles.subtitle}>Une cuisine pleine de joie et d&apos;imagination!</p>

        <div className={styles.scene}>
          <div className={styles.character + ' ' + styles.char1}>
            <div className={styles.head}>
              <div className={styles.eye}></div>
              <div className={styles.eye}></div>
              <div className={styles.smile}></div>
            </div>
            <div className={styles.body}>
              <div className={styles.apron}>
                <span className={styles.apronText}>PTIBOUTON</span>
              </div>
              <div className={styles.arms}>
                <div className={styles.arm + ' ' + styles.armLeft}>
                  <div className={styles.bowl}>🥣</div>
                </div>
                <div className={styles.arm + ' ' + styles.armRight}>
                  <div className={styles.spoon}>🥄</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.character + ' ' + styles.char2}>
            <div className={styles.head}>
              <div className={styles.eye}></div>
              <div className={styles.eye}></div>
              <div className={styles.smile}></div>
            </div>
            <div className={styles.body}>
              <div className={styles.apron + ' ' + styles.apronGreen}>
                <span className={styles.apronText}>PTIBOUTON</span>
              </div>
              <div className={styles.arms}>
                <div className={styles.arm + ' ' + styles.armLeft}>
                  <div className={styles.flour}>🍪</div>
                </div>
                <div className={styles.arm + ' ' + styles.armRight}>
                  <div className={styles.rollingPin}></div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.character + ' ' + styles.char3}>
            <div className={styles.head}>
              <div className={styles.eye}></div>
              <div className={styles.eye}></div>
              <div className={styles.smile}></div>
            </div>
            <div className={styles.body}>
              <div className={styles.apron + ' ' + styles.apronPink}>
                <span className={styles.apronText}>PTIBOUTON</span>
              </div>
              <div className={styles.arms}>
                <div className={styles.arm + ' ' + styles.armLeft}>
                  <div className={styles.veggie}>🥕</div>
                </div>
                <div className={styles.arm + ' ' + styles.armRight}>
                  <div className={styles.veggie}>🥬</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.table}>
            <div className={styles.tableTop}>
              <div className={styles.ingredient + ' ' + styles.ing1}>🍎</div>
              <div className={styles.ingredient + ' ' + styles.ing2}>🥖</div>
              <div className={styles.ingredient + ' ' + styles.ing3}>🧀</div>
              <div className={styles.ingredient + ' ' + styles.ing4}>🥐</div>
              <div className={styles.ingredient + ' ' + styles.ing5}>🍓</div>
            </div>
            <div className={styles.tableLeg + ' ' + styles.legLeft}></div>
            <div className={styles.tableLeg + ' ' + styles.legRight}></div>
          </div>
        </div>

        <div className={styles.decorations}>
          <div className={styles.shelf}>
            <div className={styles.jar}>🫙</div>
            <div className={styles.jar}>🫙</div>
            <div className={styles.jar}>🫙</div>
          </div>
        </div>

        <div className={styles.hearts}>
          <span className={styles.heart}>💚</span>
          <span className={styles.heart}>💙</span>
          <span className={styles.heart}>💜</span>
        </div>
      </div>
    </main>
  )
}
