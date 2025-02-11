
export default function Education() {
  return (
    <div>
      <p className="font-bold text-2xl pb-5">EDUCATION</p>
      <div className="flex flex-col gap-3">
      <div className=" flex gap-2 border-l pl-5">
          <div className="w-30 h-30 ">
            <img src="/public/static/images/ncf.png" alt="" />
          </div>
          <div>
            <p className="text-2xl font-bold pb-1">Bachelor of Computer Science</p>
            <p>Naga College Foundation Inc. <br />
            July 2021 - Present</p>
          </div>
        </div>
        <div className=" flex gap-2 border-l pl-5">
          <div className="w-30 h-30 ">
            
          <img src="/public/static/images/sti.png" alt="" />
          </div>
          <div>
            <p className="text-2xl font-bold pb-1">Mobile Application And Website Development</p>
            <p>STI College Naga <br />
            July 2019 - April 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}
