import React from 'react'
import Tag from './Tag';
type Project = {
    projectName: string;
    projectDescription: string[];
    projectImage: string;
    projectLinkGitHub: string;
    projectFrontendStack: string[];
    projectBackendStack: string[];
    projectDatabase: string;
}
export default function Project({
    projectName,
    projectDescription,
    projectFrontendStack,
    projectBackendStack,
    projectDatabase,
}: Project) {
  return (
    <div>
      <div className=" flex gap-2 border-l pl-5">
        {/* <div className="w-50 h-40 bg-red-500">
          Picture
        </div> */}
        <div>
          <p className="text-2xl font-bold pb-1">{projectName}</p>
          <ul className='list-disc list-inside gap-2 flex flex-col'>
          {
              projectDescription.map((description, index) => (
                  <p key={index} className='flex gap-2'>
                    <span>•</span>
                    <span>

                        {description}
                    </span>
                    
                  </p>
                ))
            }
            </ul>

            <div className='flex gap-2 pt-2'>
                {
                    projectFrontendStack.map((stack, index) => (
                        <Tag key={index} skill={stack} type="frontend" />
                    ))
                }
                {
                    projectBackendStack.map((stack, index) => (
                        <Tag key={index} skill={stack} type="backend" />
                    ))
                }

                <Tag skill={projectDatabase} type="database"   />
            </div>
        </div>

      </div>
    </div>
  )
}
