import React from 'react'
import { Card, Button, Image } from 'semantic-ui-react'

import './Challenge.css'

function Choice ({ value, correct, onChange }) {
    const [picked, setPicked] = React.useState(false)
    const imgString = value + ".PNG"

    function onSelection(e) {
        setPicked(true)
        onChange(e)
    }

    const revealedAnswer = <Card.Header style={correct ? { color: 'green'} : { color: 'red'}}>{value}</Card.Header>

    return(
        <Card>
        <Image src={imgString} wrapped ui={false} />
        <Card.Content>
            {!picked ? <></> : revealedAnswer}
          <Button value={value} onClick={onSelection}>Pick Me!</Button>
        </Card.Content>
      </Card>
    )
}

export default Choice
