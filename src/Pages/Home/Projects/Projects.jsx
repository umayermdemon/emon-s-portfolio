import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div id="projects">
      <div className="flex justify-center ">
        <h1 className=" text-2xl lg:text-3xl text-white gradient px-8 rounded-sm py-2 font-semibold">
          Projects
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3  max-w-7xl mx-2 lg:mx-auto py-12">
        {/* Card 1 */}
        <Card className="bg-[#1a1443]" data-aos="fade-right" data-aos-duration="2000">
          <CardHeader shadow={false} floated={false}>
            <img
              src="https://i.ibb.co/hKt8bmm/Screenshot-2024-06-10-060945.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography className="font-bold text-xl text-[#FFB641]">
                Swift Parcel
              </Typography>
            </div>
            <Typography
              variant="small"
              color="white"
              className="font-normal opacity-75 text-justify font-poppins"
            >
              Swift Parcel is a comprehensive parcel management system designed
              to streamline the process of sending and receiving packages. It
              offers real-time tracking, automated notifications, and easy
              management of parcel data.
            </Typography>
            <div className="font-poppins text-white mt-2">
              <h2 className="text-[#FFB641] text-lg font-bold pb-2">
                Technology Used:
              </h2>
              <ul>
                <li className="text-sm text-gray-400">
                  <span className="font-semibold text-white">Frontend:</span>{" "}
                  HTML, CSS, JavaScript, React
                </li>
                <li className="text-sm text-gray-400">
                  <span className="font-semibold text-white">Backend:</span>{" "}
                  Node.js, Express.js
                </li>
                <li className="text-sm text-gray-400">
                  <span className="font-semibold text-white">Database:</span>{" "}
                  MongoDB
                </li>
                <li className="text-sm text-gray-400">
                  <span className="font-semibold text-white">API:</span> Axios
                </li>
              </ul>
            </div>
          </CardBody>
          <div className="flex gap-4 pb-2 lg:pb-0 lg:pt-4 items-center justify-center">
            <Button className="gradient text-xs">
              <Link to="https://swift-parcel-7b99a.web.app" target="_blank">
                Live
              </Link>
            </Button>
            <Button className="gradient text-xs">
              <Link
                to="https://github.com/umayermdemon/swift-parcel-client"
                target="_blank"
              >
                Client
              </Link>
            </Button>
            <Button className="gradient text-xs">
              <Link
                to="https://github.com/umayermdemon/swift-parcel-server"
                target="_blank"
              >
                Server
              </Link>
            </Button>
          </div>
        </Card>
        {/* Card 2 */}
        <Card
          className="bg-[#1a1443]"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <CardHeader shadow={false} floated={false}>
            <img
              src="https://i.ibb.co/gWTT4zM/Screenshot-2024-05-15-153702.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center  justify-between">
              <Typography className="font-bold text-xl text-[#FFB641]">
                ElectroCare
              </Typography>
            </div>
            <Typography
              variant="small"
              color="white"
              className="font-normal opacity-75 text-justify font-poppins"
            >
              ElectroCare is a mobile service website that offers a wide range
              of repair services for electronic devices. Customers can book
              repair appointments, track service progress, and access support
              resources.
            </Typography>
            <div className="font-poppins text-white  mt-2">
              <h2 className="text-[#FFB641] text-lg font-bold pb-2">
                Technology Used:
              </h2>
              <ul>
                <li className="text-sm text-gray-400">
                  <span className="font-semibold text-white">Frontend:</span>{" "}
                  HTML, CSS, JavaScript, React
                </li>
                <li className="text-sm text-gray-400">
                  <span className="font-semibold text-white">Backend:</span>{" "}
                  Node.js, Express.js
                </li>
                <li className="text-sm text-gray-400">
                  <span className="font-semibold text-white">Database:</span>{" "}
                  MongoDB
                </li>
                <li className="text-sm text-gray-400">
                  <span className="font-semibold text-white">API:</span> Axios
                </li>
              </ul>
            </div>
          </CardBody>
          <div className="flex gap-4 pb-2 md:pb-0 md:pt-4 lg:pt-10 justify-center">
            <Button className="gradient text-xs">
              <Link to="https://electro-care-fd46f.web.app" target="_blank">
                Live
              </Link>
            </Button>
            <Button className="gradient text-xs">
              <Link
                to="https://github.com/umayermdemon/electro-care-client"
                target="_blank"
              >
                Client
              </Link>
            </Button>
            <Button className="gradient text-xs">
              <Link
                to="https://github.com/umayermdemon/electro-care-server"
                target="_blank"
              >
                Server
              </Link>
            </Button>
          </div>
        </Card>
        {/* Card 3 */}
        <Card className="bg-[#1a1443]" data-aos="fade-left" data-aos-duration="2000">
          <CardHeader shadow={false} floated={false}>
            <img
              src="https://i.ibb.co/wzhFcYj/Screenshot-2024-04-30-195354.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography className="font-bold text-xl text-[#FFB641]">
                Artistry Avenue
              </Typography>
            </div>
            <Typography
              variant="small"
              color="white"
              className="font-normal opacity-75 text-justify font-poppins"
            >
              Welcome to Artistry Avenue, where creativity meets craftsmanship!
              This repository hosts the code for our art and craft website,
              designed to showcase a wide range of artistic creations. From
              handmade crafts to intricate artworks, explore our repository to
              see how we bring artistry to life online.
            </Typography>
            <div className="font-poppins text-white mt-2">
              <h2 className="text-[#FFB641] text-lg font-bold pb-2">
                Technology Used:
              </h2>
              <ul>
                <li className="text-sm text-gray-400">
                  <span className="font-semibold text-white">Frontend:</span>{" "}
                  HTML, CSS, JavaScript, React
                </li>
                <li className="text-sm text-gray-400">
                  <span className="font-semibold text-white">Backend:</span>{" "}
                  Node.js, Express.js
                </li>
                <li className="text-sm text-gray-400">
                  <span className="font-semibold text-white">Database:</span>{" "}
                  MongoDB
                </li>
                <li className="text-sm text-gray-400">
                  <span className="font-semibold text-white">API:</span> Axios
                </li>
              </ul>
            </div>
          </CardBody>
          <div className="flex gap-4 pb-2 items-center justify-center">
            <Button className="gradient text-xs">
              <Link to="https://artistry-avenue-b9a0.web.app" target="_blank">
                Live
              </Link>
            </Button>
            <Button className="gradient text-xs">
              <Link
                to="https://github.com/umayermdemon/artistry-avenue-client"
                target="_blank"
              >
                Client
              </Link>
            </Button>
            <Button className="gradient text-xs">
              <Link
                to="https://github.com/umayermdemon/artistry-avenue-server"
                target="_blank"
              >
                Server
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
