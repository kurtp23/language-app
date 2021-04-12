import React from 'react'

import { Card, Button, Image } from 'semantic-ui-react'
 
function Category({ category, onChange, description }) {

    function handleClick(e){
        onChange(e.target.value)
    }
    
    const imgUrl = "/images/Challenge/" + category.replace(/\s/g, "") + ".PNG"

    return (
        <>
            <Card>
                <Card.Content>
                    <Image
                    floated='right'
                    size='medium'
                    src={imgUrl}
                    />
                    <Card.Header>{category}</Card.Header>
                    <Card.Description>
                        {description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button value={category} basic color='green' onClick={handleClick}>
                        Select
                    </Button>
                    </div>
                </Card.Content>
            </Card>
        </>
    )
}

export default Category