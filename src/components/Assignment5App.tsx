import { useState, useRef, useEffect } from 'react'
import './App5.css'
import fallbackVideo from '/fallback1.mp4'

function App() {
  const [playing, setPlaying] = useState<boolean>(false)
  const [filterType, setFilterType] = useState<string>('none')
  const [grayscale, setGrayscale] = useState<number>(1)
  const [sepia, setSepia] = useState<number>(1)
  const [blur, setBlur] = useState<number>(5)

  const myVideo = useRef<HTMLVideoElement | null>(null)
  const myCanvas = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 400, height: 300 },
          audio: false,
        })
        myVideo.current!.srcObject = stream
      } catch (error) {
        console.log(error)
        myVideo.current!.src = fallbackVideo
        myVideo.current!.loop = true
      } finally {
        setPlaying(true)
      }
    }
    startVideo()
  }, [])

  const getFilterValue = () => {
    switch (filterType) {
      case 'grayscale':
        return `grayscale(${grayscale})`
      case 'sepia':
        return `sepia(${sepia})`
      case 'blur':
        return `blur(${blur}px)`
      default:
        return 'none'
    }
  }

  const snapshotJSX =
    playing && (
      <>
        <button
          onClick={() => {
            const context = myCanvas.current!.getContext('2d')!
            const computedStyle = window.getComputedStyle(myVideo.current!)
            context.filter = computedStyle.filter 
            context.drawImage(myVideo.current!, 0, 0)
          }}
        >
          Snapshot
        </button>
        <br />
        <canvas width={400} height={300} ref={myCanvas}></canvas>
      </>
    )

    return (
      <>
        <div className="secret-message">
          THEY ARE WATCHING<span className="glitch">█ ▓ ▒</span>
        </div>
    
        <h4>WebRTC with React/Typescript</h4>
    
        <div>
          <strong>Choose a filter:</strong>
          {['none', 'grayscale', 'sepia', 'blur'].map((type) => (
            <label key={type} style={{ marginRight: '10px' }}>
              <input
                type="radio"
                name="filter"
                value={type}
                checked={filterType === type}
                onChange={(e) => setFilterType(e.target.value)}
              />
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </label>
          ))}
        </div>
    
        {filterType === 'grayscale' && (
          <div>
            Grayscale: {grayscale.toFixed(2)}
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={grayscale}
              onChange={(e) => setGrayscale(parseFloat(e.target.value))}
            />
          </div>
        )}
        {filterType === 'sepia' && (
          <div>
            Sepia: {sepia.toFixed(2)}
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={sepia}
              onChange={(e) => setSepia(parseFloat(e.target.value))}
            />
          </div>
        )}
        {filterType === 'blur' && (
          <div>
            Blur: {blur}px
            <input
              type="range"
              min="0"
              max="20"
              step="1"
              value={blur}
              onChange={(e) => setBlur(parseInt(e.target.value))}
            />
          </div>
        )}
    
        <video
          width={400}
          height={300}
          autoPlay
          muted
          ref={myVideo}
          style={{ filter: getFilterValue() }}
        />
        <br />
        {snapshotJSX}
      </>
    )
    
}

export default App
