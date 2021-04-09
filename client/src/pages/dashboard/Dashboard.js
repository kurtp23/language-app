import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <Grid doubling columns={5} style={{ height: '100vh'}}>
                <Grid.Column>
                    <Link to="game">
                        <div style={{ height: '100%', outline: '1px solid black' }}>

                        </div>
                    </Link>
                </Grid.Column>
                <Grid.Column>
                    <Link to="challenge">
                        <div style={{ height: '100%', outline: '1px solid black' }}>

                        </div>
                    </Link>
                </Grid.Column>
                <Grid.Column>
                    <Link to="flashcards">
                        <div style={{ height: '100%', outline: '1px solid black' }}>

                        </div>
                    </Link>
                </Grid.Column>
                <Grid.Column>
                    <Link to="stats">
                        <div style={{ height: '100%', outline: '1px solid black' }}>

                        </div>
                    </Link>
                </Grid.Column>
                <Grid.Column>
                    <Link to="settings">
                        <div style={{ height: '100%', outline: '1px solid black' }}>

                        </div>
                    </Link>
                </Grid.Column>
                <Grid.Column>
                    <Link to="teambio">
                        <div style={{ height: '100%', outline: '1px solid black' }}>
                            
                        </div>
                    </Link>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default Dashboard;