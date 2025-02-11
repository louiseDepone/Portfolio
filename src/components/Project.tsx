import Tag from "./Tag";
type Project = {
  projectName: string;
  projectDescription: string[];
  projectImage: string;
  projectLinkGitHub: string;
  projectFrontendStack: string[];
  projectBackendStack: string[];
  projectDatabase: string;
};
export default function Project({
  projectName,
  projectDescription,
  projectFrontendStack,
  projectBackendStack,
  projectDatabase,
  projectLinkGitHub
}: Project) {
  return (
    <div>
      <div className=" flex gap-2 border-l pl-5">
        {/* <div className="w-50 h-40 bg-red-500">
          Picture
        </div> */}
        <div>
          <p className="text-2xl font-bold pb-1">{projectName}</p>
          <ul className="list-disc list-inside gap-2 flex flex-col">
            {projectDescription.map((description, index) => (
              <p key={index} className="flex gap-2">
                <span>•</span>
                <span>{description}</span>
              </p>
            ))}
          </ul>

          <div className="flex gap-2 pt-2 flex-wrap">
            {projectFrontendStack.map((stack, index) => (
              <Tag key={index} skill={stack} type="frontend" />
            ))}
            {projectBackendStack.map((stack, index) => (
              <Tag key={index} skill={stack} type="backend" />
            ))}

            <Tag skill={projectDatabase} type="database" />
          </div>
          {projectLinkGitHub !="#" && (
          <a href={projectLinkGitHub} target="_blank" className="flex gap-1 items-center pt-3">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 6.2963V6.92593C16.9987 7.99127 16.6119 9.02015 15.9112 9.82258C15.2105 10.625 14.243 11.1468 13.1876 11.2916C13.6184 11.8429 13.8523 12.5226 13.8519 13.2222V16.3704C13.8519 16.5374 13.7855 16.6975 13.6674 16.8156C13.5494 16.9337 13.3892 17 13.2222 17H8.18518C8.0182 17 7.85805 16.9337 7.73997 16.8156C7.62189 16.6975 7.55556 16.5374 7.55556 16.3704V15.1111H5.66667C4.83173 15.1111 4.03098 14.7794 3.44059 14.189C2.8502 13.5987 2.51852 12.7979 2.51852 11.963C2.51852 11.462 2.31951 10.9816 1.96528 10.6273C1.61104 10.2731 1.13059 10.0741 0.62963 10.0741C0.462641 10.0741 0.302493 10.0077 0.184414 9.88966C0.0663358 9.77159 0 9.61144 0 9.44445C0 9.27746 0.0663358 9.11731 0.184414 8.99923C0.302493 8.88116 0.462641 8.81482 0.62963 8.81482C1.04305 8.81482 1.45242 8.89625 1.83437 9.05446C2.21632 9.21267 2.56337 9.44456 2.85571 9.73689C3.14804 10.0292 3.37993 10.3763 3.53814 10.7582C3.69635 11.1402 3.77778 11.5495 3.77778 11.963C3.77778 12.4639 3.97679 12.9444 4.33102 13.2986C4.68526 13.6528 5.1657 13.8519 5.66667 13.8519H7.55556V13.2222C7.55515 12.5226 7.789 11.8429 8.21981 11.2916C7.16437 11.1468 6.19695 10.625 5.49621 9.82258C4.79547 9.02015 4.40873 7.99127 4.40741 6.92593V6.2963C4.41525 5.51381 4.62363 4.7464 5.01264 4.06742C4.82019 3.4466 4.75845 2.79264 4.83133 2.14677C4.90421 1.50091 5.11011 0.877148 5.43606 0.314825C5.49134 0.219088 5.57084 0.139592 5.66659 0.0843293C5.76233 0.0290666 5.87093 -1.45235e-05 5.98148 1.03034e-05C6.71485 -0.00152475 7.43842 0.168487 8.09437 0.496461C8.75032 0.824435 9.32046 1.30128 9.75926 1.8889H11.6481C12.0869 1.30128 12.6571 0.824435 13.313 0.496461C13.969 0.168487 14.6926 -0.00152475 15.4259 1.03034e-05C15.5365 -1.45235e-05 15.6451 0.0290666 15.7408 0.0843293C15.8366 0.139592 15.9161 0.219088 15.9713 0.314825C16.2973 0.877135 16.5032 1.50093 16.576 2.14682C16.6487 2.79272 16.5867 3.44668 16.394 4.06742C16.7837 4.74614 16.9924 5.51367 17 6.2963Z"
                fill="#9CA3AF"
              />
            </svg>
            <p className="text-sm">View Code</p>
          </a>
          )}
        </div>
      </div>
    </div>
  );
}
