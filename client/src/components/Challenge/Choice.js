import React, { useEffect } from 'react'
import { Card, Button, Image } from 'semantic-ui-react'

function Choice ({ name, value, correct, onChange }) {
    const [picked, setPicked] = React.useState(false)
    const imgString = "/images/Challenge/Choices/" + name.replace(/\s/g, "") + ".PNG"

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
          {!picked ? <></> : revealedAnswer}
        </Card.Content>
      </Card>
    )
}

export default Choice
