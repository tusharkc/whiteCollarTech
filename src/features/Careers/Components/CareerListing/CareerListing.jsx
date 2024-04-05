import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { CustomTabPanel } from "../../../../Components";
import Jobs from "./Jobs";
import { useGetAllCareersQuery } from "../../service/jobListing.service";

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

  const { data: career } = useGetAllCareersQuery({
    jobCategory:
      value === 0
        ? "All Positions"
        : value === 1
        ? "Development"
        : value === 2
        ? "Sales"
        : "Design",
  });

  return (
    <div className="py-12 container mx-auto">
      <div className="mx-4 sm:mx-[140px] ">
        <div className="space-y-4">
          <p className="text-center text-[3rem] font-light">
            Job Roles and Openings
          </p>
          <p className="font-light text-center">
            Check out the below open positions in our company. We are actively
            hiring and are open to speaking soon!
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
            <Jobs jobsData={career?.data} />
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
};

export default CareerListing;
