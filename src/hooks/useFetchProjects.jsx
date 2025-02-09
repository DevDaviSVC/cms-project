import { useEffect, useState } from "react";
import * as contentful from "contentful";

const useFetchProjects = () => {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState(null);

  const fetchProjects = async () => {
    setLoading(true);

    try {
      const client = contentful.createClient({
        space: import.meta.env.VITE_SPACE_ID,
        accessToken: import.meta.env.VITE_CD_ACCESS_TOKEN,
      });

      const response = await client.getEntries({
        content_type: "projects",
      });

      const modifiedProjects = response.items.map(({fields, sys}) => {
        const modifiedProject = {
          image: `https:${fields?.image?.fields?.file?.url}`,
          title: fields.title,
          url: fields.url,
          id: sys.id
        };
        
        return modifiedProject;
      })

        setProjects(modifiedProjects);
    } catch (error) {
      console.log(error.message);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return { loading, projects };
};

export default useFetchProjects;
