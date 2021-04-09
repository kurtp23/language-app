import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import DashButton from '../../components/dash-button/DashButton';

const Dashboard = () => {
    return (
        <div>
            <Grid doubling columns={5} style={{ height: '100vh', innerWidth: '100vh'}}>
                <Grid.Column>
                    <Link to="game">
                        <DashButton children='Play!' color='red'/>
                    </Link>
                </Grid.Column>
                <Grid.Column>
                    <Link to="challenge">
                        <DashButton children='Challenge!'/>
                    </Link>
                </Grid.Column>
                <Grid.Column>
                    <Link to="flashcards">
                        <DashButton children='Flashcards!'/>
                    </Link>
                </Grid.Column>
                <Grid.Column>
                    <Link to="stats">
                        <DashButton children='Stats!'/>
                    </Link>
                </Grid.Column>
                <Grid.Column>
                    <Link to="settings">
                        <DashButton children='Settings!'/>
                    </Link>
                </Grid.Column>
                <Grid.Column>
                    <Link to="teambio">
                        <DashButton children='Team!'/>
                    </Link>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default Dashboard;