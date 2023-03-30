import Image from "next/legacy/image";
import samplePic from "../public/sample.png";
import React from "react";

const ProjectItem = ({ data }) => {
  //   console.log("=====");
  console.log(data);

  const title = data.properties.Name.title[0].plain_text;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgUrl = data.cover.external?.url || data.cover.file.url;
  const gitUrl = data.properties.Github.url;
  const ytUrl = data.properties.Youtube.url;
  const tags = data.properties.Tags.multi_select;
  const start = data.properties.WorkPeriod.date.start;
  const end = data.properties.WorkPeriod.date.end;
  const siteUrl = data.properties.Site.url;

  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    var startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    var endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );

    // console.log(`startDate: ${startDate}`);
    // console.log(`endDate: ${endDate}`);

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    // console.log(`기간 : ${result}`);
    return result;
  };

  return (
    <div className="project-card">
      <div className="btn-project">
        <a href={siteUrl} target="_blank">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src={imgUrl}
            alt="content"
            width="100%"
            height="60%"
            layout="responsive"
          />
        </a>
        <h3 className="flex gap-3 mt-5 tracking-widest text-indigo-500 dark:text-slate-300  text-xs font-medium title-font">
          {tags.map((item) => (
            <span key={item.id}>{item.name}</span>
          ))}
        </h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
          {title}
        </h2>
        <p className="leading-relaxed text-base">{description}</p>
        <div className="flex gap-5">
          <a
            className="dark:hover:text-slate-500"
            href={gitUrl}
            target="_blank"
          >
            Github
          </a>
          <a className="dark:hover:text-slate-500" href={ytUrl} target="_blank">
            Youtube
          </a>
        </div>
        {/* 작업기간 */}
        <div>
          작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
