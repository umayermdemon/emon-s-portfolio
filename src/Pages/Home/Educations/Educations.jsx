import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import educationImg from "../../../assets/EducationLogo/education.png";
import devImg from "../../../assets/EducationLogo/dev.png";
import versityImg from "../../../assets/EducationLogo/Bangladesh-National-University.png";

const Educations = () => {
  return (
    <div className="max-w-7xl mx-auto my-12">
      <div className="flex justify-center ">
        <h1 className=" text-2xl lg:text-3xl text-white gradient px-8 rounded-sm py-2 font-semibold">
          Educations
        </h1>
      </div>

      <div className="flex flex-row md:gap-12 lg:gap-36 pt-6 lg:pt-16 items-center justify-between">
        <div className="flex-1" data-aos="zoom-in" data-aos-duration="2000">
          <img src={educationImg} alt="" />
        </div>
        <div className="flex-1">
          <Timeline>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0" data-aos="fade-down"
                    data-aos-duration="2000">
                  <Avatar
                    size="sm"
                    src={devImg}
                    alt="user 1"
                    withBorder
                    
                  />
                </TimelineIcon>
                <Typography
                  variant="h5"
                  color="white"
                  data-aos="zoom-out-left"
                  data-aos-duration="2000"
                >
                  Junior Web Developer
                </Typography>
              </TimelineHeader>
              <TimelineBody
                className="pb-8"
                data-aos="zoom-out-left"
                data-aos-duration="2000"
              >
                <Typography
                  color="gary"
                  className="font-normal pb-1 text-gray-600"
                >
                  Programming Hero
                </Typography>
                <Typography className="text-gray-500 text-xs">
                  30/12/2023 - 23/06/2024
                </Typography>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem>
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0" data-aos="fade-right"
                    data-aos-duration="2000">
                  <Avatar size="sm" src={versityImg} alt="user 2" withBorder />
                </TimelineIcon>
                <Typography
                  variant="h5"
                  color="white"
                  data-aos="zoom-out-left"
                  data-aos-duration="2000"
                >
                  MBA in Accounting
                </Typography>
              </TimelineHeader>
              <TimelineBody
                className="pb-8"
                data-aos="zoom-out-left"
                data-aos-duration="2000"
              >
                <Typography color="gary" className="font-normal text-gray-600">
                  National University
                </Typography>
                <Typography className="text-gray-500 text-xs">
                  2023 - Present
                </Typography>
              </TimelineBody>
            </TimelineItem>
            <TimelineItem>
              <TimelineHeader>
                <TimelineIcon className="p-0" data-aos="fade-up"
                    data-aos-duration="2000">
                  <Avatar size="sm" src={versityImg} alt="user 3" withBorder />
                </TimelineIcon>
                <Typography
                  variant="h5"
                  color="white"
                  data-aos="zoom-out-left"
                  data-aos-duration="2000"
                >
                  BBA in Accounting
                </Typography>
              </TimelineHeader>
              <TimelineBody data-aos="zoom-out-left" data-aos-duration="2000">
                <Typography color="gary" className="font-normal text-gray-600">
                  National University
                </Typography>
                <Typography className="text-gray-500 text-xs">
                  2015 - 2019
                </Typography>
              </TimelineBody>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Educations;
