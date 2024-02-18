import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { CustomTabPanel } from "../../../../Components";
import Jobs from "./Jobs";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CareerListing = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="py-12 container mx-auto">
      <div className="mx-4 sm:mx-[140px] ">
        <div className="space-y-4">
          <p className="text-center text-[3rem] font-light">Career Listing</p>
          <p className="font-light text-center">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Ut
            elit tellus, luctus nec.
          </p>
        </div>

        <Box sx={{ borderBottom: 1, borderColor: "transparent", py: "60px" }}>
          <Tabs
            sx={{ borderColor: "#508ac2", borderBottom: "1px solid" }}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="All Positions" {...a11yProps(0)} />
            <Tab label="Development" {...a11yProps(1)} />
            <Tab label="Sales" {...a11yProps(2)} />
            <Tab label="Design" {...a11yProps(3)} />
          </Tabs>

          <CustomTabPanel value={value} index={value}>
            <Jobs
              jobsData={[
                {
                  id: "0",
                  title: "Computer System Analysts",
                  jobType: "Full Time",
                  experienceRequired: "2 - 5 Years",
                  location: "Nazareth PA",
                },
              ]}
            />
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
};

export default CareerListing;
