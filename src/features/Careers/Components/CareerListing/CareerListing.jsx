import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { CustomTabPanel } from "../../../../Components";
import useWindowSize from "../../../../hooks/useWindowSize";
import { useGetAllCareersQuery } from "../../service/jobListing.service";
import Jobs from "./Jobs";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CareerListing = () => {
  const [value, setValue] = useState(0);
  const { width } = useWindowSize();

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
            sx={{
              borderColor: "#508ac2",
              borderBottom: "1px solid",
            }}
            value={value}
            variant={width > 767 ? "standard" : "scrollable"}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="All Positions" {...a11yProps(0)} />
            <Tab label="Information Technology" {...a11yProps(1)} />
            <Tab label="Life Science" {...a11yProps(2)} />
            <Tab label="General" {...a11yProps(3)} />
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
