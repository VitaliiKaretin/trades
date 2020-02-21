import React from "react";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";

import TabContent from './Content';
// import data1 from './trades-data/trades-1';
// import data2 from './trades-data/trades-2';

export default () =>
    <Tabs>
        <TabList>
            <Tab>My trades</Tab>
            <Tab>My trades</Tab>
        </TabList>

        <TabPanel>
            <TabContent data={null} />
        </TabPanel>
        <TabPanel>
            <TabContent data={null} />
        </TabPanel>
    </Tabs>
