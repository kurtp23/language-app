import React, { useRef, useState, useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { useSpring, animated } from 'react-spring'
import { Card, Button, Image } from 'semantic-ui-react'

function useMeasure() {
  const ref = useRef()
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 })
  const [ro] = useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)))
  useEffect(() => (ro.observe(ref.current), ro.disconnect), [])
  return [{ ref }, bounds]
}


function Choice ({ name, value, correct, onChange }) {
    const [picked, setPicked] = React.useState(false)
    const imgString = "/images/Challenge/Choices/" + name.replace(/\s/g, "") + ".PNG"

    const [open, toggle] = useState(false)
    const [bind, { width }] = useMeasure()
    const props = useSpring({ width: open ? width : 0 })
    
    useEffect(() => {
        setPicked(false)
    }, [])


    function onSelection(e) {
        setPicked(true)
        onChange(e)
    }

    const revealedAnswer = <Card.Header style={correct ? { color: 'green'} : { color: 'red'}}>{value}</Card.Header>

    return(
        <Card>
              
        <Image src={imgString} wrapped ui={false} />
        <Card.Content>
          <Button value={value} onClick={onSelection}>Choose</Button>
        </Card.Content>
        <Card.Content>
              <div {...bind} className="main" onClick={() => toggle(!open)}>
                <animated.div className="fill" style={props}>{!picked ? <></> : revealedAnswer}</animated.div>
                <animated.div className="content">{props.width.interpolate(x => x.toFixed(0))}</animated.div>
              </div>
          
        </Card.Content>
      </Card>
    )
}

export default Choice
