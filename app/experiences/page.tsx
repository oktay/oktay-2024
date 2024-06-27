import { toNextMetadata } from "react-datocms";

import ExperienceList from "@/components/experience-list";
import MainPage from "@/components/main-page";
import RichText from "@/components/rich-text";
import { performRequest } from "@/lib/datocms";
import { experiencesQuery, experiencesSeoQuery } from "@/lib/query";

export async function generateMetadata() {
  const response = await performRequest({ query: experiencesSeoQuery });
  return toNextMetadata([...response.data.experiences.seo]);
}

export default async function Experiences() {
  const { data } = await performRequest({ query: experiencesQuery });

  return (
    <MainPage>
      <RichText content={data.page.description} />
      <div className="mt-10">
        <ExperienceList experiences={data.experiences} />
      </div>
    </MainPage>
  );
}
