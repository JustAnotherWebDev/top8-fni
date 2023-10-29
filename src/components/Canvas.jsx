import { useState, useRef, useEffect } from "react"

const Canvas = props => {
  const { details, finalists } = props
  const canvasRef = useRef(null)
  const [isDisabled, setDisabled] = useState(true)
  const characters = finalists.map(finalist => `/src/assets/characters/${finalist.character}.png`)
  const players = finalists.map(finalist => {
    const { social, name } = finalist
    return { social, name }
  })

  const preloadImages = urls => {
    const promises = urls.map((url) => {
      return new Promise((resolve, reject) => {
        const image = new Image()
        image.src = url
        image.onload = () => resolve(image)
        image.onerror = () => reject(`Image failed to load: ${url}`)
      })
    })
    return Promise.all(promises)
  }

  const drawImageScaled = (startX, startY, width, height, image, context, offset=25) => {
    const wRatio = width  / image.width
    const hRatio =  height / image.height
    const ratio = Math.max(wRatio, hRatio)
    
    context.clearRect(startX, startY, width, height)
    context.fillStyle = details.color
    context.fillRect(startX, startY, width, height)
    context.drawImage(image, 0, 0, image.width, image.height, startX, startY-offset, image.width * ratio, image.height * ratio)
 }

  const handleImage = async () => {
    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    const images = await preloadImages(["/src/assets/foreground.png", ...characters, "/src/assets/shadow.png"])

    // CLEAN
    context.clearRect(0,0,canvas.width, canvas.height)

    // CHARACTERS
    // 1st:     684 x 535
    // 2nd-4th: 347 x 271
    // 5th-8th: 262 x 205
    drawImageScaled(77, 198, 684, 535, images[1], context, 50)
    drawImageScaled(783, 198, 347, 271, images[2], context)
    drawImageScaled(1160, 198, 347, 271, images[3], context)
    drawImageScaled(1533, 198, 347, 271, images[4], context)
    drawImageScaled(731, 611, 262, 205, images[5], context)
    drawImageScaled(1015, 611, 262, 205, images[6], context)
    drawImageScaled(1295, 611, 262, 205, images[7], context)
    drawImageScaled(1575, 611, 262, 205, images[8], context)

    // FOREGROUND
    context.drawImage(images[0], 0, 0)
    
    // TOP LEFT
    context.fillStyle = "#FFFFFF"
    context.font = "58px Fatal Fighter"
    context.textAlign = "left"
    context.textBaseline = "middle"
    context.fillText(details.topLeft, 40, 92)

    // TOP RIGHT
    context.fillStyle = "#FFFFFF"
    context.font = "42px Rheiborn Sans Clean"
    context.textAlign = "right"
    context.textBaseline = "middle"
    context.fillText(details.topRight, canvas.width - 40, 92)

    // BOTTOM LEFT
    context.fillStyle = "#FFFFFF"
    context.font = "67px Rheiborn Sans Clean"
    context.textAlign = "left"
    context.textBaseline = "middle"
    context.fillText(details.bottomLeft, 40, canvas.height - 92)

    // BOTTOM RIGHT
    context.fillStyle = "#FFFFFF"
    context.font = "67px Rheiborn Sans Clean"
    context.textAlign = "right"
    context.textBaseline = "middle"
    context.fillText(details.bottomRight, canvas.width - 40, canvas.height - 92)


    // FIRST
    context.fillStyle = "#4D4D48"
    context.font = "100px Rheiborn Sans Clean"
    context.textAlign = "center"
    context.textBaseline = "middle"
    context.fillText(players[0].name, 376, 785)
    context.font = "51px Rheiborn Sans Clean"
    context.textAlign = "center"
    context.textBaseline = "middle"
    context.fillText(players[0].social, 366, 871)
    
    // SECOND
    context.fillStyle = "#4D4D48"
    context.font = "62px Rheiborn Sans Clean"
    context.textAlign = "center"
    context.textBaseline = "middle"
    context.fillText(players[1].name, 933, 500)
    context.font = "38px Rheiborn Sans Clean"
    context.textAlign = "center"
    context.textBaseline = "middle"
    context.fillText(players[1].social, 927, 558)

    // THIRD
    context.fillStyle = "#4D4D48"
    context.font = "62px Rheiborn Sans Clean"
    context.textAlign = "center"
    context.textBaseline = "middle"
    context.fillText(players[2].name, 1310, 500)
    context.font = "38px Rheiborn Sans Clean"
    context.textAlign = "center"
    context.textBaseline = "middle"
    context.fillText(players[2].social, 1304, 558)

    // FOURTH
    context.fillStyle = "#4D4D48"
    context.font = "62px Rheiborn Sans Clean"
    context.textAlign = "center"
    context.textBaseline = "middle"
    context.fillText(players[3].name, 1686, 500)
    context.font = "38px Rheiborn Sans Clean"
    context.textAlign = "center"
    context.textBaseline = "middle"
    context.fillText(players[3].social, 1680, 558)

    // FIFTH
    context.fillStyle = "#4D4D48"
    context.font = "38px Rheiborn Sans Clean"
    context.textAlign = "center"
    context.textBaseline = "middle"
    context.fillText(players[4].name, 848, 835)
    context.font = "30px Rheiborn Sans Clean"
    context.textAlign = "center"
    context.textBaseline = "middle"
    context.fillText(players[4].social, 843, 879)
    
    // SIXTH
    context.fillStyle = "#4D4D48"
    context.font = "38px Rheiborn Sans Clean"
    context.textAlign = "center"
    context.textBaseline = "middle"
    context.fillText(players[5].name, 1129, 835)
    context.font = "30px Rheiborn Sans Clean"
    context.textAlign = "center"
    context.textBaseline = "middle"
    context.fillText(players[5].social, 1124, 879)

    // SEVENTH
    context.fillStyle = "#4D4D48"
    context.font = "38px Rheiborn Sans Clean"
    context.textAlign = "center"
    context.textBaseline = "middle"
    context.fillText(players[6].name, 1409, 835)
    context.font = "30px Rheiborn Sans Clean"
    context.textAlign = "center"
    context.textBaseline = "middle"
    context.fillText(players[6].social, 1404, 879)

    // EIGTH
    context.fillStyle = "#4D4D48"
    context.font = "38px Rheiborn Sans Clean"
    context.textAlign = "center"
    context.textBaseline = "middle"
    context.fillText(players[7].name, 1690, 835)
    context.font = "30px Rheiborn Sans Clean"
    context.textAlign = "center"
    context.textBaseline = "middle"
    context.fillText(players[7].social, 1685, 879)

    // SHADOW
    context.drawImage(images[9], 0, 0)

    setDisabled(false)
  }


  const saveImage = () => {
    const canvas = canvasRef.current
    const dataUrl = canvas.toDataURL("image/png")
    const link = document.createElement("a")
    link.href = dataUrl
    link.download = "top8.png"
    link.click()
  }

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="flex items-center justify-center h-full bg-gray-800">
        <canvas width={1920} height={1080} ref={canvasRef} onClick={handleImage} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <button id="download" disabled={isDisabled} onClick={saveImage}>Download</button>
      </div>
    </div>
  )
}

export default Canvas
