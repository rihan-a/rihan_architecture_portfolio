import projects from "../../projects.json";

let allProjectTypes: string[] = ["All"];

projects.forEach((project) => {
    allProjectTypes.push(project.programme);
});

export const projectTypes = allProjectTypes.filter(
    (item, index) => allProjectTypes.indexOf(item) === index
);
