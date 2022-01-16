import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import "../../App.css"


export default function CenteredTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} centered>

                <Link to="/dashboard" className="tabs">
                    <Tab label="All" />
                </Link>

                <Link to="/vehicles" className="tabs">
                    <Tab label="Vehicles" />
                </Link>

                <Link to="/properties" className="tabs">
                    <Tab label="Properties" />
                </Link>

                {/* <Tab label="All" onChange={<Link to='/dashboard'></Link>} />
                <Tab label="Vehicles" onChange={<Link to='/vehicles'></Link>}/>
                <Tab label="Properties" onChange={<Link to='/properties'></Link>}/> */}


            </Tabs>
        </Box>
    );
}
