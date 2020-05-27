import React from 'react';
import { Card, Image } from 'semantic-ui-react'

const apps = [
    {
        image:require('../images/gem.png'), 
        name: 'SpyMaster Randomizer', 
        description: 'This is a simple web app that creates a random board for the Spymaster.',
        demo: '',
        github: 'https://github.com/swagenseller/CodeNameRandomizer'   
    },
    {
        image:require('../images/gem.png'), 
        name: 'Pet Food Table', 
        description: 'An excel like web app for fictional PetFood inventory.',
        demo: '',
        github: 'https://github.com/swagenseller/CodeNameRandomizer'     
    },
    {
        image:require('../images/gem.png'), 
        name: 'Color Game', 
        description: 'RGB Color guessing game',
        demo: '',
        github: 'https://github.com/swagenseller/CodeNameRandomizer'     
    },
]

class Projects extends React.Component {

    testCard() {
        return (
            <Card>
                <Image src={require('../images/gem.png')} wrapped ui={false}/>
                <Card.Content>
                    <Card.Header>SpyMaster Randomizer</Card.Header>
                    <Card.Meta>
                        <span className='date'>Vanilla Js</span>
                    </Card.Meta>
                    <Card.Description>
                        This is a simple web app that creates a random board for the Spymaster.
                    </Card.Description>
                </Card.Content>                
            </Card>
        )
    }

    render() {
        return (
            <div>
                <h1>Projects Page</h1>
                <div>{this.testCard()}</div>
            
            </div>
        )
    }
}

export default Projects;