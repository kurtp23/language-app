import React from 'react'
import { Card, Button, Image } from 'semantic-ui-react'

function Choice ({ value, correct, onChange }) {
    const [picked, setPicked] = React.useState(false)
    const imgString = value + ".PNG"

    function onSelection(e) {
        console.log(correct)
        setPicked(true)
        onChange(e)
    }

    const revealedAnswer = <Card.Header>{value}</Card.Header>

    return(
        <Card>
        <Image src={imgString} wrapped ui={false} />
        <Card.Content>
            {!picked ? <></> : <Card.Header>{value}</Card.Header>}
          <Button value={value} onClick={onSelection}>Pick Me!</Button>
        </Card.Content>
      </Card>
    )
}

export default Choice
