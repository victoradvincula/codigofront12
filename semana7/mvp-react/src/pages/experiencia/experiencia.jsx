import "../experiencia/experiencia.scss";
import { Percentage } from "../../components/percentage/percentage";

export const PageExperiencia = () => {
    const percentage =[
        {
            label: "js",
            percentage:"80%"
        },
        {
            label: "html",
            percentage:"60%"
        },{
            label: "css",
            percentage:"90%"
        },
        {
            label: "react",
            percentage:"60%"
        },
        {
            label: "js",
            percentage:"20%"
        },
        {
            label: "html",
            percentage:"60%"
        },{
            label: "css",
            percentage:"40%"
        },
        {
            label: "react",
            percentage:"55%"
        },
    ]
  return (
    <div className="page-experiencia">
      <h1>Experiencia</h1>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          debitis, id perspiciatis itaque molestiae ullam, aperiam obcaecati aut
          culpa placeat recusandae incidunt, repudiandae minima eligendi. Eaque
          vitae laudantium possimus esse?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          debitis, id perspiciatis itaque molestiae ullam, aperiam obcaecati aut
          culpa placeat recusandae incidunt, repudiandae minima eligendi. Eaque
          vitae laudantium possimus esse?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          debitis, id perspiciatis itaque molestiae ullam, aperiam obcaecati aut
          culpa placeat recusandae incidunt, repudiandae minima eligendi. Eaque
          vitae laudantium possimus esse?
        </p>
        <div className="page-nosotros__container">
        {percentage.map((ref) => (
              <Percentage
                label={ref.label}
                percentage={ref.percentage}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
