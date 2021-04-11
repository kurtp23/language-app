import React from 'react'
import { Card, Button, Image } from 'semantic-ui-react'

function Choice ({ value, onClick }) {
    const [picked, setPicked] = React.useState(false)
    const imgString = value + ".PNG"
    return(
        <Card>
        <Image src={imgString} wrapped ui={false} />
        <Card.Content>
            {!picked ? <></> : <Card.Header>{value}</Card.Header>}
          <Button value={value} onClick={onClick}>Pick Me!</Button>
        </Card.Content>
      </Card>
    )
}

export default Choice
