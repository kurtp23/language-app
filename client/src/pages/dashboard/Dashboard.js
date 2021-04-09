import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div>
                <Link to='/'><h1>Home</h1></Link>
            </div>
            <Grid doubling columns={5} style={{ height: '100vh'}}>
                <Grid.Column>
                    <div>
                        <Link to="/game">Play!</Link>
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <div>
                        <Link to="/challenge">Challenge!</Link>
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <div>
                        <Link to="/flashcards">Flash Cards!</Link>
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <div>
                        <Link to="/stats">Stats!</Link>
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <div>
                        <Link to="/settings">Settings!</Link>
                    </div>
                </Grid.Column>
                <Grid.Column>
                    <div>
                        <Link to="/teambio">Team</Link>
                    </div>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default Dashboard;