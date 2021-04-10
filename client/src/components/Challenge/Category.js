import React from 'react'

import { Card, Icon } from 'semantic-ui-react'

function Category({ category }) {
    return (
        <>
  <Card
    image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
    header={category}
    href='google.com'
  />
        </>
    )
}

export default Category