import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import AppCard from './AppCard';

const apps = [
    {
        image:'',//require('../images/gem.png'), 
        name: 'SpyMaster Randomizer', 
        description: 'This is a simple web app that creates a random board for the Spymaster.',
        demo: '',
        github: 'https://github.com/swagenseller/CodeNameRandomizer'   
    },
    {
        image: '', 
        name: 'Pet Food Table', 
        description: 'An excel like web app for fictional Pet Food inventory.',
        demo: '',
        github: 'https://github.com/swagenseller/ExcellyWebApp'     
    },
    {
        image:'', 
        name: 'Color Game', 
        description: 'RGB Color guessing game',
        demo: '',
        github: 'https://github.com/swagenseller/ColorGame'     
    },
]

class Projects extends React.Component {

    testCard() {
        return (
            <Card>
                <Image src={''} wrapped ui={false}/>
                <Card.Content>
                    <Card.Header>SpyMaster Randomizer</Card.Header>
                    <Card.Meta>
                        <span className='date'>Vanilla Js</span>
                    </Card.Meta>
                    <Card.Description>
                        This is a simple web app that creates a random board for the Spymaster.
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='github'>
                            Github
                        </Icon>
                    </a>
                </Card.Content>                
            </Card>
        )
    }

    render() {
        return (
            <div>
                <h1>Projects Page</h1>
                {/*<div>{this.testCard()}</div>*/}
                {<AppCard item = {apps[0]} />}
                {<AppCard item = {apps[1]} />}
            
            </div>
        )
    }
}

export default Projects;